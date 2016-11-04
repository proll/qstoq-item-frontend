qst.ItemReceiptHolder = Backbone.Model.extend({
	
	url: 'http://api.qstoq.ru/v1/invoices/',
	inter: 0,
	
	defaults: {
		id: 0,
		secret: 0,
		state: -1,

		receipt: {},
	},

	initialize: function (options) {
	},


	fetch: function() {
		var options = {};

		options.url = this.url + this.get('id');
		options.type = 'get';
		options.data = options.data || {
			secret: this.get('secret')
		};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');
		return Backbone.Model.prototype.fetch.call(this, options);
	},


	success: function (model, response, options) {
		response = _.toJSON(response);

		
		if(response.success) {
			var state = response.result.state;
			this.set({state:state});

			if(state == 0 || state == 1 ) {
				// repeat of a delaid payment check
				this.delaidFetch();
			} else if (state == 3) {
				// just show payment error
			} else if(state == 2) {
				var link = response.result.link;
				if(!link) {
					this.trigger('load:error');
				} else {
					var receipt_opts = {},
						receipt_obj = false;
					_.forEach(link.preview, function(el, index) {
						if(el.identifier === 'receipt_comment') {
							receipt_obj = el;
						}
					})
					opts = {
						link_id: this.get('id'),
						active: 		link.active,
						name: 			link.name,
						description: 	link.description,
						url: 			link.url,
						external: 		link.external,
						url_short: 		link.url_short,
						price: 			link.price,
						price_pwyw: 	link.price_pwyw,
						currency: 		link.currency,
						ship_limit: 	link.ship_limit
					}
					if(!!receipt_obj
						&& !!receipt_obj.data) {
						opts.receipt_comment = receipt_obj.data;
						opts.receipt_comment_id = receipt_obj.id;
					}

					this.set({receipt: opts});
					qst.app.statistic.trackProductSold(link.name);
					this.trigger('load:success', opts);
				}
			} else {
				this.trigger('load:error');
			}
		} else {
			this.trigger('load:error');
		}
	},

	delaidFetch: function() {
		clearInterval(this.inter);
		this.inter = setTimeout(_.bind(this.fetch, this), 8000);
	},

	error: function (model, xhr, options) {
		this.trigger('load:error');
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});
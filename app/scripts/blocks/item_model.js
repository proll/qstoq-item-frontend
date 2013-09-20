qst.Item = Backbone.Model.extend({
	
	url: '/v1/links/',
	url_invoice: '/v1/invoices/',
	preview: null,
	
	defaults: {
		preview_obj: '',
		// filename: '',
		// "id": XXX,
		// "name": "Pencil Icon PSD",
		// "description": "I made this for fun."
		// "price": 100,
		// "price_pwyw": 0,
		// "currency": "rur"
		// "url_short": "https://host.ru/l/XXX"
		// "url_qr": "https://host.ru/assets/qr-link-XXX.png",
		// "active": 1
		// "user": {
		// 		"name": "some",
		// 		"id": <user_id>,
		// },
	},

	initialize: function (options) {
		this.view = new qst.ItemView({
			model:this
		});
	},

	init: function() {
		this.set('url_short_path', this.get('url_short').split('http://')[1]);

		var preview = this.get('preview');
		if(!!preview 
			&& preview.length 
			&& !!preview[preview.length-1] 
			&& !!preview[preview.length-1].data) {
			this.set('preview_obj', preview[preview.length-1])
		}
	},

	fetch: function (options) {
		options = options || {};
		options.url = this.url + this.get('id');
		options.type = 'get';
		options.data = options.data || {};
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');
		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response.result);

		if(response.success) {
			this.init();
			this.trigger('load:success');
		} else {
			this.trigger('load:error');
		}
	},

	error: function (xhr, options) {
		this.trigger('load:error');
	},

	save: function (options) {
		// поддержка формата цен на серверной стороне
		var data = this.toJSON();
		if(data.price_pwyw) {
			data.price+= '+';
		}

		options = options || {};
		options.url = this.url + this.get('id');
		options.type = 'post';
		options.data = options.data || {
			active: 		data.active,
			name: 			data.name,
			description: 	data.description,
			url: 			data.url,
			price: 			data.price,
			ship_limit: 	data.ship_limit,
		};
		options.success  	= _.bind(this.saveSuccess, this);
		options.error  		= _.bind(this.saveError, this);

		this.trigger('save:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	saveSuccess: function (model, response, options) {
		response = _.toJSON(response);
		
		if(response.success) {
			this.trigger('save:success');
		} else {
			this.trigger('save:error');
		}
	},

	saveError: function (model, xhr, options) {
		this.trigger('save:error');
	},


	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});
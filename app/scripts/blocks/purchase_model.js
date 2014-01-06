qst.Purchase = Backbone.Model.extend({
	
	url_invoice: '/v1/invoices/',
	url_purchase: '/v1/purchases/',
	
	defaults: {
		// "id": XXX,
		// "currency": "rur"
		// "price": 100,
		// customer_email: '',
	},

	initialize: function (options) {
		this.view = new qst.PurchaseView({
			model:this
		});
	},

	activate: function(data) {
		this.set("sleeped", false);

		this.set(data);
		this.invoice();
	},

	invoice: function (options) {
		var data = this.toJSON();

		options = options || {};
		options.url = this.url_invoice;
		options.type = 'post';
		options.data = options.data || {
			amount: 		data.price,
			currency: 		data.currency,
			link_id: 		data.id,
			buyer_email: 	data.customer_email,
		};
		options.success  	= _.bind(this.invoiceSuccess, this);
		options.error  		= _.bind(this.invoiceError, this);
		this.trigger('invoice:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	invoiceSuccess: function (model, response, options) {
		response = _.toJSON(response);

		this.set({
			invoice: response.result,
			invoice_id: response.result.id
		});
		this.trigger('invoice:success');
	},

	invoiceError: function (model, xhr, desc) {
		if(!!xhr.responseText) {
			var resp = _.toJSON(xhr.responseText);
			if(!!resp && !!resp.error) {
				this.trigger('invoice:error', resp.error);
				return true;
			}
		}
		this.trigger('invoice:error', {});
		return true;
	},

	purchase: function (options) {
		var data = this.toJSON();

		options = options || {};
		options.url = this.url_purchase;
		options.type = 'post';
		options.data = {
			invoice_id: 	this.get('invoice_id'),
			method_id: 		options.method_id
		};
		
		options.success  	= _.bind(this.purchaseSuccess, this);
		options.error  		= _.bind(this.purchaseError, this);
		this.trigger('purchase:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	purchaseSuccess: function (model, response, options) {
		response = _.toJSON(response);
		this.trigger('purchase:success');
		this.view.requestForm(response.result);
	},

	purchaseError: function (model, xhr, desc) {
		if(!!xhr.responseText) {
			var resp = _.toJSON(xhr.responseText);
			if(!!resp && !!resp.error) {
				this.trigger('purchase:error', resp.error);
				return true;
			}
		}
		this.trigger('purchase:error', {});
		return true;
	},

	

	sleep: function() {
		this.set("sleeped", true);
	},

	remove: function() {
	},

});
qst.PurchasePage = Backbone.Model.extend({

	visited: false,

	defaults: {
		in_popup: true,
		id: 0,
	},

	initialize: function(options){
	},
	
	render: function(options) {
		this.set(options);
		this.visited = true;
		options.in_popup = !!options.in_popup;

		this.view = new qst.PurchasePageView({
			model: this, 
			template:"pages/purchase-page"
		});
		
		this.view.render(options.in_popup, false);

		this.purchase = new qst.Purchase(options);
		this.view.addPurchase(this.purchase);

		// hard link to item obj
		var data = qst.app.item.item.toJSON();

		this.purchase.activate({
			id: 			this.get('id'),
			customer_email: data.customer_email,
			currency: 		data.currency,
			price: 			data.price
		});
	},

	sleep: function () {
		this.remove();
	},

	remove: function () {
		this.off();
		if(this.purchase) {
			this.purchase.off();
			this.purchase.remove();
		}
		if(this.view) {
			this.view.off();
			this.view.remove();
		}
	}
});
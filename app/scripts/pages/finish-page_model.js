qst.FinishPage = qst.Page.extend({
	visited: false,
	itemreceiptholder: null,
	itemreceipt: null,

	defaults: {
		id: 0,
		secret: 0,
		sleeped: true
	},


	initialize: function(options){
		options 		= options || {};
	},

	needRerender: function(options) {
		return this.get('sleeped') || 
			options.id 		!= this.get('id');
	},


	render: function(options) {
		this.set(options);

		if(!this.needRerender(options)) {
			return false;
		}

		if(!this.visited) {
			this.visited = true;
			this.view = new qst.FinishPageView({
				model: this, 
				template:"pages/finish-page"
			});
			this.view.render();

			this.itemreceiptholder = new qst.ItemReceiptHolder(options);
			this.itemreceiptholder.on('load:success', this.renderReceipt, this)
			this.itemreceiptholder.on('load:error', this.error, this)
			this.itemreceiptholder.fetch();
			this.itemreceiptholder.on('change:state', this.view.describeState, this.view)

			this.set('sleeped', false);
		} else {
			this.view.render();

			this.itemreceiptholder.set(options);
			this.itemreceiptholder.fetch();

			this.set('sleeped', false);
		}
	},


	renderReceipt: function(receipt_opts) {
		if(!this.itemreceipt) {
			this.itemreceipt = new qst.ItemReceipt(receipt_opts);
			this.itemreceipt.activate();
			this.view.addItemReceipt(this.itemreceipt);
		} else {
			this.itemreceipt.set(receipt_opts);
			this.itemreceipt.activate();
			this.view.addItemReceipt(this.itemreceipt);
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.itemreceiptholder) {
			this.itemreceiptholder.sleep();
		}

		if(this.itemreceipt) {
			this.itemreceipt.sleep();
		}

	},

	error: function() {
		qst.trigger('404');
	},
});
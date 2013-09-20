qst.ItemPage = qst.Page.extend({
	visited: false,

	defaults: {
		id: 0,
		sleeped: true
	},

	url:'',

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
			this.view = new qst.ItemPageView({
				model: this, 
				template:"pages/item-page"
			});
			this.view.render();

			this.item = new qst.Item(options);
			this.item.fetch();
			this.item.activate();
			this.view.addItem(this.item);
			this.item.on('load:error', this.error, this)

			this.set('sleeped', false);
		} else {
			this.view.render();
			this.item.set(options);
			this.item.fetch();
			this.item.activate();
			this.view.addItem(this.item);

			this.set('sleeped', false);
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.item) {
			this.item.sleep();
		}

	},

	error: function() {
		qst.trigger('404');
	},
});
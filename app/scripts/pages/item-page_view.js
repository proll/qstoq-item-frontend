qst.ItemPageView = qst.PageView.extend({
	addItem: function (item_model) {
		this.$el.find('.item__section-row').html(item_model.view.$el);
	},
});
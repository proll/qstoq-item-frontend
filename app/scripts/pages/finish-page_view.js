qst.FinishPageView = qst.PageView.extend({
	addItemReceipt: function (item_model) {
		this.$el.find('.item-receipt__cont').html(item_model.view.$el);
	},
});
qst.FinishPageView = qst.PageView.extend({
	addItemReceipt: function (item_model) {
		this.$el.find('.item-receipt__cont').html(item_model.view.$el);
	},

	describeState: function(itemreceiptholder_model, state) {
		this.$el
			.toggleClass('state0', false)
			.toggleClass('state1', false)
			.toggleClass('state2', false)
			.toggleClass('state3', false)
			.toggleClass('state'+state, true)
	}
});
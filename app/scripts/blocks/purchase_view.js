qst.PurchaseView = Backbone.View.extend({
	template: "blocks/purchase",
	template_form: "misc/request-form",
	className: "purchase",

	events: {
		'click .purchase__info-item-a': 'purchase',
	},

	initialize: function(){
		this.template = 		qst.Templates.get(this.template);
		this.template_form = 	qst.Templates.get(this.template_form);
		this.model.on("invoice:start",   this.toggleLoadingOn, this);
		this.model.on("invoice:success", this.render, this);
		this.model.on('invoice:error',   this.error, this);
		this.model.on('change:sleeped',  this.sleep, this);

		// this.model.on('purchase:success', this.toggleBlockedOff, this);
		this.model.on('purchase:start', this.toggleLoadingOn, this);
		this.model.on("purchase:success", this.render, this);
		this.model.on('purchase:error', this.error, this);
	},

	render: function(){
		this.toggleLoadingOff();
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.delegateEvents();
	},

	purchase: function(e) {
		var $this = $(e.currentTarget),
			data = $this.data();

		this.model.purchase({
			method_id: data.methodid
		});

		e.preventDefault();
		e.stopPropagation();
		return false;
	},

	error: function(error_obj) {
		this.toggleLoadingOff();
		this.showError(qst.localize('Something went wrong...', 'misc'), 'email');
	},

	toggleLoadingOn: function() {
		this.$el.toggleClass('loading', true);
	},

	toggleLoadingOff: function() {
		this.$el.toggleClass('loading', false);
	},

	clear: function() {
		this.hideErrors();
	},

	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
			this.clear();
		} else {
			this.delegateEvents();
		}
	},

	requestForm: function(form_obj) {
		var template = this.template_form(form_obj),
			$request_form = $(template);

		$('body').append($request_form);
		$request_form.submit();
	}
});


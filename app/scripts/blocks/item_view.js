qst.ItemView = Backbone.View.extend({
	template: "blocks/item",
	template_form: "misc/request-form",
	className: "item",

	events: {
		'click .showcase__share-itm-a': 'clickShare',
		'click .showcase__form__buy-btn': 'submitForm',
		'keydown': 'hideErrors',
		'click': 'hideErrors',
		'submit form': 'submit',
	},

	initialize: function(){
		this.template = 		qst.Templates.get(this.template);
		this.template_form = 	qst.Templates.get(this.template_form);
		this.model.on("load:success", this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:url', this.changeLink, this);
		this.model.on('change:customer_email', this.changeCustomerEmail, this);

		this.lazy_loader = new qst.LazyLoader();

		this.model.on('invoice:start', this.toggleBlockedOn, this);
		this.model.on('invoice:error',  this.purchaseError, this);
		// this.model.on('purchase:success', this.toggleBlockedOff, this);
		this.model.on('purchase:error', this.purchaseError, this);
	},

	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$form = this.$el.find('form');
		this.$error = this.$el.find('.item__error');
		this.$input_email = this.$el.find('[name=customer_email]');


		this.lazy_loader.load(this.$el);
		this.delegateEvents();

		// meta
		$('title').text('qstoq - ' + this.model.get('name'));
		$('#og_title').attr('content', 'qstoq - ' + this.model.get('name'));
		$('#og_url').attr('content', this.model.get('url_short'));
		if(!!this.model.get('preview_obj') && this.model.get('preview_obj').data) {
			$('#og_image').attr('content', this.model.get('preview_obj').data);
		}
		if(!!this.model.get('description')) {
			$('meta[name=description]').attr('content', this.model.get('description'));
			$('#og_description').attr('content', this.model.get('description'));
		}
	},

	submit: function(e) {
		var email = $.trim(this.$input_email.val());
		if(!_.isEmail(email)) {
			this.showError(qst.localize('Doesn&#39;t look like a valid email', 'item'), 'email')
		} else if (email.length > 50){
			this.showError(qst.localize('Too much', 'item'), 'email')
		} else {
			this.model.set({
				customer_email: email
			});
			this.model.invoice();
		}
		return false;
	},

	changeCustomerEmail: function(model, value) {
		if(this.$input_email && !!value) {
			this.$input_email.val(value);
		}
	},


	showError: function(txt, input_name) {
		this.$error.html(txt);
		this.$el.toggleClass('error', true);
		switch(input_name) {
			case 'email': 
				this.$input_email.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_email.focus();
				break;
		}
	},
	
	hideErrors: function() {
		this.$el.toggleClass('error', false);
		this.$el.find('.error-inp').toggleClass('error-inp', false);
	},

	submitForm: function() {
		this.$form.submit();
		return false;
	},


	clickShare: function(e) {
		var social = $(e.currentTarget).attr('href'),
			url = "http://api.addthis.com/oexchange/0.8/forward/" + social + "/offer?"
			+"url=" + this.model.get('url_short')
			+"&title=" + encodeURIComponent(this.model.get('name'))
			+"&description=" + encodeURIComponent(this.model.get('description'))
			+"&pubid=prolll"
			+"&text=" + encodeURIComponent(this.model.get('description'))
			+"&via=qstoq";
		// console.log(e, url);
		_.openWindow3(url, social, 480, 360);
		return false;
	},

	// invoiceSuccess: function() {
	// 	console.log('invoice:success')
	// },

	purchaseError: function(error_obj) {
		this.toggleBlockedOff();
		this.showError(qst.localize('Something went wrong...', 'misc'), 'email');
	},

	toggleBlockedOn: function() {
		this.$el.toggleClass('blocked', true);
	},

	toggleBlockedOff: function() {
		this.$el.toggleClass('blocked', false);
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


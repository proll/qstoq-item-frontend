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
		// TODO do on page-description.js
		$('title').text('Qstoq - ' + this.model.get('name'));
		$('#og_title').attr('content', 'Qstoq - ' + this.model.get('name'));
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
		if(!this.model.get('active')) {
			this.showError(qst.localize('Link inactive', 'item'))
			return false;
		}
		var email = $.trim(this.$input_email.val());
		if(!_.isEmail(email)) {
			this.showError(qst.localize('Doesn&#39;t look like a valid email', 'item'), 'email')
		} else if (email.length > 50){
			this.showError(qst.localize('Too much', 'item'), 'email')
		} else {
			this.model.set({
				customer_email: email
			});
			qst.navigate('/purchase/'+this.model.get('id'), {trigger: true});
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


	// clickShare: function(e) {
	// 	var social = $(e.currentTarget).attr('href'),
	// 		url = "http://api.addthis.com/oexchange/0.8/forward/" + social + "/offer?"
	// 		+"url=" + this.model.get('url_short')
	// 		+"&title=" + encodeURIComponent(this.model.get('name'))
	// 		+"&description=" + encodeURIComponent(this.model.get('description'))
	// 		+"&pubid=prolll"
	// 		+"&text=" + encodeURIComponent(this.model.get('description'))
	// 		+"&via=qstoq";
	// 	// console.log(e, url);
	// 	_.openWindow3(url, social, 480, 360);
	// 	return false;
	// },


	clickShare: function(e) {
		var social = $(e.currentTarget).attr('href'),
			description = encodeURIComponent(this.model.get('description')),
			href = this.model.get('url_short'),
			url = '',
			image = (!!this.model.get('preview_obj')) ? this.model.get('preview_obj').data : 'http://qstoq.ru/images_static/fav144.png';

		if(social==='facebook') {
			url = "https://www.facebook.com/dialog/feed?";
			url += ''
				+"link=" + encodeURIComponent(href)
				+"&redirect_uri=" + encodeURIComponent(href)
				+"&display=popup"
				+"&app_id=137692866413480"
				+"&caption=" + encodeURIComponent(this.model.get('name'))
				+"&picture=" + image
				+"&description=" + encodeURIComponent(this.model.get('description'));
		} else {
			if(social === 'vk') {
				url = "http://vkontakte.ru/share.php?noparse=true&"
			} else {	
				url = "http://api.addthis.com/oexchange/0.8/forward/" + social + "/offer?"
			}

			url += ''
				+"url=" + encodeURIComponent(href)
				+"&title=" + encodeURIComponent(this.model.get('name'))
				+"&description=" + encodeURIComponent(this.model.get('description'))
				+"&pubid=prolll"
				+"&text=" + encodeURIComponent(this.model.get('description'))
				+"&via=qstoq"
				+"&screenshot=" + image
				+"&image=" + image;
		}
		_.openWindow3(url, social, 480, 360);
		return false;
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
});


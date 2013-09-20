qst.ItemView = Backbone.View.extend({
	template: "blocks/item",
	className: "item",

	events: {
		'click .itemedit__submit-a': 'submitForm',
		'keypress': 'hideErrors',
		'click': 'hideErrors',
		'click .itemedit__delete-a': 'deleteItem',
		'submit form': 'submit',

		'click .itemedit__share-inp-cont': 'clickShortLink',
		'click .itemedit__share-btn, .showcase__share-itm-a, .finish__share-itm-a': 'clickShare',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("load:success", this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:url', this.changeLink, this);

		this.lazy_loader = new qst.LazyLoader();

		this.model.on('save:success', this.saveSuccess, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$form = this.$el.find('form');
		this.$error = this.$el.find('.item__error');

		
		this.$showcase = this.$el.find('.showcase__form');
		this.$showcase_img = this.$showcase.find('.showcase__form__img')

		this.$receipt_comment = this.$el.find('.finish__form-desc');
		this.$input_receipt_comment = this.$el.find('.finish__form-receipt_desc');


		var comment = $.trim(this.model.get('receipt_comment'));
		if(!!comment) {
			this.$el
				.toggleClass('comment-editing', false)
				.toggleClass('comment-can-edit', true)
				.toggleClass('comment-can-add', false)
		} else {
			this.$el
				.toggleClass('comment-editing', false)
				.toggleClass('comment-can-edit', false)
				.toggleClass('comment-can-add', true)
		}


		this.lazy_loader.load(this.$el);
		this.delegateEvents();
	},


	submit: function(e) {
		var active = this.$input_active.is(':checked'),
			name = $.trim(this.$input_name.val()),
			price = this.$input_price.val(),
			ship_limit = this.$input_ship_limit.val(),
			link = this.$input_link.val(),
			file = this.$input_file.val(),
			description = $.trim(this.$input_description.val()),
			state = this.model.get('state');

		if(_.isEmpty(name)) {
			this.showError(qst.localize('write some name of the item', 'itemlist'), 'name')
			return false;
		} else if(_.isEmpty(price) || _.isNaN(parseInt(price))){
			this.showError(qst.localize('set price, please', 'itemlist'), 'price')
			return false;
		} else if(_.isEmpty(ship_limit) || _.isNaN(parseInt(ship_limit))){
			this.showError(qst.localize('set ship limit, please', 'itemlist'), 'ship_limit')
			return false;
		} else if (state === 'link') {
			if(_.isEmpty(link)) {
				this.showError(qst.localize('set a link, please', 'itemlist'), 'link')
				return false;
			} else if(!_.isUrl(link)) {
				this.showError(qst.localize('set a valid link, please', 'itemlist'), 'link')
				return false;
			}
		}

			var price_plus = (price.indexOf('+')!==-1);
			this.model.set({
				active: 		active + 0,
				name: 			name,
				url: 			link,
				description: 	description,
				price: 			parseInt(price),
				price_pwyw: 	price_plus + 0,
				ship_limit: 	parseInt(ship_limit),
			});

			this.model.save();
		return false;
	},


	showError: function(txt, input_name) {
		this.$error.text(txt);
		this.$el.toggleClass('error', true);
		switch(input_name) {
			case 'name': 
				this.$input_name.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_name.focus();
				break;
			case 'price': 
				this.$input_price.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_price.focus();
				break;
			case 'link': 
				this.$input_link.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_link.focus();
				break;
			case 'file': 
				this.$input_file.parents('.qst__inp-cont').toggleClass('error-inp', true);
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
		console.log(e, url);
		_.openWindow3(url, social, 480, 360);

		return false;
	},


	clickShortLink: function(e) {
		$(e.currentTarget).find('input').select();
	},

	deleteItem: function(e) {
		this.model.deleteItem();
		return false;
	},

	changeLink: function(model, value) {
		if(this.$input_link) {
			this.$input_link.val(value);
		}
	},

	saveSuccess: function() {
		console.log('save:success')
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


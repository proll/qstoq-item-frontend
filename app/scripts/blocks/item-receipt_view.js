qst.ItemReceiptView = Backbone.View.extend({
	template: "blocks/item-receipt",
	className: "item-receipt",

	events: {
		'click .receipt__share-itm-a': 'clickShare',

		'click .receipt__form-add-comment-a': 'toggleOnReceiptComment',
		'click .receipt__form-receipt_desc-action_cancel>a': 'cancelReceiptComment',
		'click .receipt__form-receipt_desc-action_save>a': 'saveReceiptComment',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on('change', this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.render();
	},

	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$receipt_comment = this.$el.find('.receipt__form-desc');
		this.$input_receipt_comment = this.$el.find('.receipt__form-receipt_desc');
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

		this.delegateEvents();
	},


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


	toggleOnReceiptComment: function(e) {
		this.$el
			.toggleClass('comment-editing',  true)
			.toggleClass('comment-can-edit', false)
			.toggleClass('comment-can-add',  false)

		this.$input_receipt_comment.focus();
		return false;
	},

	toggleOffReceiptComment: function(e) {
		var comment = $.trim(this.model.get('receipt_comment'));
		if(!!comment) {
			this.$el
				.toggleClass('comment-editing',  false)
				.toggleClass('comment-can-edit', true)
				.toggleClass('comment-can-add',  false)
		} else {
			this.$el
				.toggleClass('comment-editing',  false)
				.toggleClass('comment-can-edit', false)
				.toggleClass('comment-can-add',  true)
		}

		return false;
	},


	cancelReceiptComment: function(e) {
		this.$input_receipt_comment.val(this.model.get('receipt_comment'));
		this.toggleOffReceiptComment();
		return false;
	},

	saveReceiptComment: function(e) {
		var receipt_comment = $.trim(this.$input_receipt_comment.val());
		this.model.set('receipt_comment', receipt_comment);
		this.$receipt_comment.text(receipt_comment);

		this.toggleOffReceiptComment();
		return false;
	},


	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
		} else {
			this.delegateEvents();
		}
	},
});


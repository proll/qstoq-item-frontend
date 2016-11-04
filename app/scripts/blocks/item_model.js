qst.Item = Backbone.Model.extend({
	
	url: 			'http://api.qstoq.ru/v1/links/',
	preview: null,
	
	defaults: {
		preview_obj: '',
		// filename: '',
		// "id": XXX,
		// "name": "Pencil Icon PSD",
		// "description": "I made this for fun."
		// "price": 100,
		// "price_pwyw": 0,
		// "currency": "rur"
		// "url_short": "https://host.ru/l/XXX"
		// "url_qr": "https://host.ru/assets/qr-link-XXX.png",
		// "active": 1
		// "user": {
		// 		"name": "some",
		// 		"id": <user_id>,
		// },
		customer_email: '',
	},

	initialize: function (options) {
		this.view = new qst.ItemView({
			model:this
		});
		qst.on('usersettings:ready', this.updateCustomerEmail, this);
	},

	init: function() {
		this.set('url_short_path', this.get('url_short').split('http://')[1]);

		var preview = this.get('preview');
		if(!!preview && preview.length) {
			var preview_image = _.where(preview, {identifier: 'preview_image'});
			if(!!preview_image && preview_image.length)
			this.set('preview_obj', preview_image[0])
		}
	},

	fetch: function (options) {
		options = options || {};
		options.url = this.url + this.get('id');
		options.type = 'get';
		options.data = options.data || {};
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');
		return Backbone.Model.prototype.fetch.call(this, options);
	},

	updateCustomerEmail: function(user_obj) {
		if(user_obj && user_obj.email) {
			this.set('customer_email', user_obj.email);
		}
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response.result);

		if(response.success) {
			this.init();
			this.trigger('load:success');
		} else {
			this.trigger('load:error');
		}
	},

	error: function (xhr, options) {
		this.trigger('load:error');
	},

	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});
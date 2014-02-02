qst.PurchaseView = Backbone.View.extend({
	template: "blocks/purchase",
	template_form: "misc/request-form",
	className: "purchase",

	events: {
		'click .purchase__category-item-a': 'chooseGroup',
		'click .purchase__method-item-a': 'purchase',

		'submit .purchase__method-item-misc-form': 'purchaseMisc',
		'keypress .purchase__method-item-misc-form input': 'validateMiscInput',
	},

	initialize: function(){
		this.template = 		qst.Templates.get(this.template);
		this.template_form = 	qst.Templates.get(this.template_form);
		this.model.on("invoice:start",   this.toggleLoadingOn, this);
		this.model.on("invoice:success", this.render, this);
		this.model.on('invoice:error',   this.error, this);
		this.model.on('change:sleeped',  this.sleep, this);

		this.model.on('purchase:start', this.toggleLoadingOn, this);
		this.model.on('purchase:error', this.error, this);
	},

	render: function(){
		this.toggleLoadingOff();
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$categories = this.$el.find('.purchase__category-item-a');
		this.$category_groups = this.$el.find('.purchase__method-list');

		this.delegateEvents();


		// if there is only one group immediately opwn it
		if(this.$categories.length === 1) {
			this.$categories.eq(0).click();
		}
	},

	chooseGroup: function(e) {
		this.$categories.toggleClass('active', false);
		this.$el.parents('.popup__inner').toggleClass('open', true);

		var $item = $(e.currentTarget);
		$item.toggleClass('active', true);

		this.$category_groups.toggleClass('active', false);
		this.$category_groups
			.filter('.purchase__method-list-'+$item.attr('href'))
				.toggleClass('active', true);
	},

	purchase: function(e) {
		var $item = $(e.currentTarget),
			data = $item.data();

		if(!data.misc) {
			this.model.purchase({
				method_id: data.methodid
			});
		} else {
			this.showMiscParams(e);
		}


		e.preventDefault();
		e.stopPropagation();
		return false;
	},

	showMiscParams: function(e) {
		var $this = $(e.currentTarget),
			$item = $this
				.parents('.purchase__method-item');
		
		$item.toggleClass('active-item', true);

		setTimeout(function(){
			$item
				.find('input').eq(0)
					.focus();
		}, 500)
	},

	purchaseMisc: function(e) {
		var $form = $(e.currentTarget),
			$inputs = $(e.currentTarget).find(':input'),
			$input = '',
			data = {},
			valid = true,
			out_data = {};

		for (var i = 0; i < $inputs.length; i++) {
			$input = $inputs.eq(i);
			data = $input.data();
			if(_.isEmpty(data)) {
				continue;
			} else {
				if(data.name) {
					if(data.length) {
						if($input.val().length === data.length) {
							out_data[data.name] = $input.val();
							continue;
						} else {
							$input
								.focus()
								.select();
							$input.toggleClass('error', true);
							valid = false;
							break;
						}
					} else {
						out_data[data.name] = $input.val();
						continue;
					}
				}
			}
		};

		if(valid) {
			var $item_a = $form
				.parents('.purchase__method-item')
					.find('.purchase__method-item-a'),
				data_item = $item_a.data();

			out_data = _.extend(out_data, {method_id: data_item.methodid});
			this.model.purchase(out_data);
		}

		e.preventDefault();
		e.stopPropagation();
		return false;
	},

	validateMiscInput: function(e) {
		var $input = $(e.currentTarget),
			data = $input.data();

		$input.toggleClass('error', false);

		if(!data.type) {
			return true;
		} else {
			if(data.type === 'phone' || data.type === 'number') {
				// only digits or enter
				if (e && (e.keyCode>47 && e.keyCode<58 || e.keyCode === 13)){
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
	},



	error: function(error_obj) {
		this.toggleLoadingOff();
		qst.warning('Something went wrong...', 'misc')
	},

	toggleLoadingOn: function() {
		this.$el.toggleClass('loading', true);
	},

	toggleLoadingOff: function() {
		this.$el.toggleClass('loading', false);
	},

	clear: function() {
		// this.hideErrors();
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


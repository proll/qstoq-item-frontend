qst.App = Backbone.Model.extend({
	_didScroll: false,

	initialize: function () {
		this.$og_image = $('#og_image');
		this.$og_url = $('#og_url');

		var that = this,
			qst = window.qst;

		// this.dataStorage = new qst.DataStorage;
		this.statistic 	 = new qst.Statistic;

		this.router = new qst.Router;
		this.pages 	= new qst.PagesCollection;


		this.user = new qst.User;
		qst.user = this.user;
		
		// GLOBAL objects
		qst.config = this.config;





		// Pages create
		// 404 page
		this.pages.add(new qst.Page({
			name:'404',
			template:'pages/404-page'
		}));

		this.pages.add(new qst.Page({
			name:'403',
			template:'pages/403-page'
		}));

		this.item = new qst.ItemPage({
			name: 'item',
			template: 'pages/item-page'
		});
		this.pages.add(this.item);

		this.purchase = new qst.PurchasePage({
			name: 'purchase',
			template: 'pages/purchase-page'
		});
		this.pages.add(this.purchase);

		this.finish = new qst.FinishPage({
			name: 'finish',
			template: 'pages/finish-page'
		});
		this.pages.add(this.finish);

		// Pages render on route
		this.router.on('404', function () {
			that.pages.getPage('404').render();
		});

		this.router.on('route', function (router, route, params) {
			// console.log('route:' + router);
			if(this.router.route_passed > 1) {
				this.statistic.trackCurrentPageChange();
			}
			
			qst.trigger('route', router, route, params);

			switch (router) {

				case 'er404': 
					this.pages.getPage('404').render();
					break;

				case 'er403':
					this.pages.getPage('403').render();
					break;

				case 'item': 
					this.item.render({
						id: route[0]
					});
					break;


				case 'purchase': 
					if(this.router.route_passed <= 1) {
						if(!!route[0]) {
							qst.navigate('/b'+route[0], {trigger: true});
						} else {
							qst.navigate('/403', {trigger: true});
						}
					} else {
						this.purchase.render({
							id: route[0],
							in_popup: true
						});
					}
					break;

				case 'finish': 
					var secret = _.getURLParameter('secret');
					if(secret) {
						this.finish.render({
							id: route[0],
							secret: secret
						});
					} else {
						qst.navigate('/403', {trigger: true});
					}
					break;

				default:
					if(!!route[0] && !this.router.previousWasPopup()) {
					}
					break;
			}

			this.trigger('need:meta:update');
		}, this);

		

		

		// Clear pages - sleep
		this.router.on('reset', function (prev_route, dest_route) {
			// console.log(prev_route, dest_route)

			if(!this.router.isPopup(dest_route)) {
				if(!this.router.isPopup(prev_route)) {
					// Magic scroll to top onchange page
					qst.speedScrollTop(0, 1);
				}

				switch (prev_route) {
					case 'item':
						console.log('reset:item');
						this.item.sleep();
						break;

					case 'finish':
						console.log('reset:finish');
						this.finish.sleep();
						break;

					default:
						break;
				}
			}

			// every page sleeps when we quit popup
			if(this.router.isPopup(prev_route)) {

				_.forEach(this.pages.models, function(page, i) {
					if(!!page.sleep && page.get('name') != dest_route) {
						page.sleep();
					}
				})
			}

		}, this);

		this.on('need:meta:update', function(){
			this.$og_url.attr('content', window.location.href);
		}, this);


		qst.on('historyback', function(){
			qst.navigate(this.router.back_path, {trigger: true});
		}, this);


		qst.on('historyback:reload', function(){
			qst.trigger('historyback');
			window.location.reload();
		}, this);

		qst.on('404', function () {
			this.pages.getPage('404').render();
		}, this);
		
		this.on('error', function (err) {
			console.error('error');
			if(!!err && !!err.description) {
				qst.error(err.description);
			}
		});


		/**
		 * Global event casting
		 */

		/**
		 * USER AUTH EVENTS
		 */


		this.user.on('user:error', function(err){
			this.trigger('error', err);
		}, this)

		this.user.settings.on('usersettings:ready', function (user_obj) {
			qst.trigger('usersettings:ready', user_obj);
		}, this);

		/**
		 * Scroll handler
		 */
		var $win = $(window),
			$doc = $(document);

		$(window).scroll(function(){
			var s_top = $win.scrollTop(),
				d_h = $doc.height(),
				w_h = $win.height();
			qst.trigger('scroll', {
				s_top: s_top,
				d_h: d_h,
				w_h: w_h
			});
			if( s_top+150 >= (d_h - w_h) ) {
				qst.trigger('pagebottom:reached');
			}
		});




		/**
		 * APPLICATION READY
		 */
		qst.trigger('app:init');
	},
});

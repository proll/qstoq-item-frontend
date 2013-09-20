window.qst=window.qst||{},window.qst=_.extend(window.qst,{language:_.getCookie("lang")||(navigator.language||navigator.systemLanguage||navigator.browserLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase(),root:"http://localhost:3017",l10n:{},preloadTemplates:function(){if(window.qst_dev){var a=[];return _.each(window.templates.files,function(b){var c=window.templates.path+"/"+b+"."+window.templates.ext;a.push($.get(c,function(a){qst.Templates.add(b,a)}))}),a}return[]},init:function(){"en"!==this.language&&"ru"!==this.language&&(this.language="en"),$.when.apply(this,this.preloadTemplates()).done(function(){qst.app=new qst.App({debug:!0}),Backbone.history.start({pushState:!0})}),$(document).on("click","a",function(a){if(a.metaKey||a.ctrlKey)return!0;var b=$(this);return b.attr("target")?!0:(a.stopPropagation(),a.preventDefault(),"event"==b.attr("type")?qst.trigger(b.attr("href")):(qst.app.router.context=b.data(),qst.app.router.navigate(b.attr("href"),{trigger:!0})),!1)})},log:function(a){console.log(a)},error:function(a){console.error(a)},navigate:function(a,b){b&&b.trigger===!1&&(qst.app.statistic.trackCurrentPageChange(),qst.app.trigger("need:meta:update")),qst.app.router.navigate(a,b)},is_authed:function(){return!!qst.user&&qst.user.is_auth()},warning:function(a,b){new qst.WarningView({content:qst.localize(a,b)})},localize:function(a,b){return Handlebars.helpers._(a,b).toString()},speedScrollTop:function(a,b){$("html, body").animate({scrollTop:a||0},b||300)}}),window.qst.Templates=window.qst.Templates||{},window.qst.Templates=_.extend(window.qst.Templates,{templates:{},compiled:{},add:function(a,b){this.templates[a]=b},get:function(a){if(window.qst_dev)return this.compiled[a]?this.templates[a]:this.templates[a]?(this.templates[a]=Handlebars.compile(this.templates[a]),this.compiled[a]=!0,this.templates[a]):(console.error("Can't find template \""+a+'"'),function(){return""});if(this.ptemplates){var b=this.ptemplates[a];return b?b:(console.error("Can't find template \""+a+'"'),function(){return""})}return console.error("Can't find templates at all"),function(){return""}}}),Backbone._sync=Backbone.sync,Backbone.sync=function(a,b,c){return c=c||{},Backbone._sync(a,b,c)},$(document).ready(function(){_.extend(qst,Backbone.Events),qst.init()}),qst.LazyLoader=Backbone.Model.extend({onImageError:function(){this.trigger("load:error")},load:function(a){var b=a.find("img.lazy"),c=this;_.forEach(b,function(a){var b=$(a),d=b.data(),e=new Image;e.src=d.orig,e.onload=function(){if(b.parents(".load-bg").toggleClass("img-loaded",!0),d.scale){var a=this.width,c=this.height,e=d.width,f=d.height,g=a/e,h=c/f;g>h?b.css({width:e,height:"auto"}):b.css({width:"auto",height:f})}if(d.bg){var i={},j="cover",k=0,l=0;if(d.crop){var a=this.width,c=this.height,e=d.width,f=d.height,g=a/e,h=c/f;g>h?(j="cover",k=-Math.round((a/h-e)/2)):h>g&&(j="cover",l=-Math.round((c/g-f)/2)),i={"background-image":"url("+d.orig+")","background-position-x":k,"background-position-y":l,width:e,height:f}}else i={"background-image":"url("+d.orig+")"};b.css(i)}else b.attr("src",d.orig)},e.onerror=_.bind(c.onImageError,c)})}}),qst.Page=Backbone.Model.extend({initialize:function(a){a.template||this.trigger("error",{message:"Page must have a template"}),this.view=new qst.PageView({model:this,template:a.template}),this.view.on("render",function(){this.collection.trigger("render")}),this.get("view")&&(this.pageView=this.get("model")?new(qst[this.get("view")])({model:this.get("model")}):new(qst[this.get("view")])),this.get("model")&&(this.pageModel=new(qst[this.get("model")]))},render:function(){this.view&&this.view.render&&this.view.render()},remove:function(){this.view.remove()},enterDocument:function(){}}),qst.PageView=Backbone.View.extend({el:"#qst-container",template:"",renderedHtml:null,initialize:function(a){return a&&a.template?(this.template=qst.Templates.get(a.template),this.createDom(),void 0):(qst.error("Page must have a template"),void 0)},createDom:function(){},render:function(){if(this.renderedHtml)this.$el.append(this.renderedHtml);else{var a=$("<div></div>").addClass("page-"+this.model.get("name")).html(this.template(this.model.toJSON()));this.trigger("page:preRender",a),this.$el.html(a)}$("body").attr("class","body__page-"+this.model.get("name")),this.model.enterDocument(),this.trigger("page:render",this.model),this.trigger("enterDocument",this.model)},remove:function(){console.log("page remove"),this.renderedHtml=this.$el.find(".page-"+this.model.get("name")).detach()}}),qst.PagesCollection=Backbone.Collection.extend({initialize:function(){},getPage:function(a){var b=this.find(function(b){return b.get("name")==a});return b||this.first()},havePage:function(a){return this.any(function(b){return b.get("name")==a})}}),qst.PopupView=Backbone.View.extend({template:"popups/popup",className:"popup",events:{"click .popup__previous":"previous","click .popup__close":"hide","click .popup__td":"bgClick"},options:{},defaults:{content:"","class":"",width:""},_rendered:!1,initialize:function(){this.template=qst.Templates.get(this.template),_.defaults(this.options,this.defaults),this.on("popup:show",function(){this.trigger("show")},this),this.on("popup:hide",function(){this.trigger("hide")},this)},render:function(){if(this._rendered)return this.$el;var a=this.options.content;return(_.isObject(a)||!a)&&(this.options.content="<div id='placeholder"+this.cid+"'>"),this.$el.append(this.template(this.options)),this.setContent(a),this._rendered=!0,this.$el.on("scroll.popup",function(a){var b=$(a.currentTarget),c=b.find(".popup__table");b.scrollTop()+150>=c.height()-b.height()&&qst.trigger("popupbottom:reached")}),this.$el},lockPage:function(){$("body").css("overflow","hidden")},unlockPage:function(){$("body").css("overflow","auto")},bgClick:function(a){a&&a.target&&"popup__td"==a.target.className&&this.hide()},reactKeypress:function(a){if(27==a.keyCode){var b=$(a.srcElement);b.is(":input")||this.hide()}},showPopup:function(){var a=$(document.body);a.append(this.render()),this.lockPage(),this.trigger("popup:show"),$(document).on("keyup.popup",_.bind(this.reactKeypress,this))},hidePopup:function(){this.$el.off("scroll.popup"),this.$el.detach(),this.trigger("popup:hide"),$(document).off("keyup.popup")},show:function(){this.showPopup()},hide:function(){return this.hidePopup(),this.unlockPage(),!1},previous:function(){this.trigger("previous")},scroll:function(a){this.$el.animate({scrollTop:a},200)},setContent:function(a){a&&(this.options.content=a,this._rendered?this.$el.find(".popup__content").empty().append(a):this.$el.find("#placeholder"+this.cid).replaceWith(a))},setWidth:function(a){a&&(this.options.width=a,this.$el.find(".popup__inner").toggleClass().addClass("popup__inner").addClass("span"+a))}}),qst.WarningView=Backbone.View.extend({template:"popups/warning",className:"warning",events:{"click .warning__close":"close"},options:{content:":("},initialize:function(a){this.options=a,this.template=qst.Templates.get(this.template),this.popup_view=new qst.PopupView({"class":"warning-popup"}),this.popup_view.on("hide",this.clear,this),this.render()},render:function(){return this.$el.append(this.template(this.options)),this.popup_view.setContent(this.$el),this.popup_view.show(),this.$el},close:function(){return this.popup_view.hide(),!1},clear:function(){return this.popup_view.remove(),this.remove(),!1}}),qst.Confirm=Backbone.Model.extend({url:"/",defaults:{url:"/",data:{},method:"post",event:"",eventdata:"",content:"?",ok_title:"Ok",close_title:"Cancel",success_title:"Allset",error_title:"Something went wrong...",backreload:!1},initialize:function(a){a&&a.url&&(this.url=a.url),this.view=new qst.ConfirmView({model:this})},fetch:function(a){return a=a||{},a.type=this.get("method"),a.data=this.get("data"),a.success=_.bind(this.success,this),a.error=_.bind(this.error,this),this.trigger("load:start"),Backbone.Model.prototype.fetch.call(this,a)},success:function(a,b){b=_.toJSON(b),b.error?this.trigger("confirm:error"):(this.trigger("confirm:success"),this.get("event")&&(console.log(this.get("event"),this.get("eventdata")),this.get("eventdata")&&!_.isEmpty(_.toJSON(this.get("eventdata")))?qst.trigger(this.get("event"),_.toJSON(this.get("eventdata"))):qst.trigger(this.get("event"))))},error:function(){this.trigger("confirm:error")}}),qst.ConfirmView=Backbone.View.extend({template:"popups/confirm",className:"confirm",events:{"click .confirm__close":"close","click .confirm__ok":"confirm"},initialize:function(){this.template=qst.Templates.get(this.template),this.popup_view=new qst.PopupView({"class":"confirm-popup"}),this.model.on("load:start",this.confirmStart,this),this.model.on("confirm:success",this.confirmSuccess,this),this.model.on("confirm:error",this.confirmError,this),this.popup_view.on("hide",this.clear,this),this.render()},render:function(){return this.$el.append(this.template(this.model.toJSON())),this.popup_view.setContent(this.$el),this.popup_view.show(),this.$el},confirm:function(){return this.model.fetch(),!1},confirmStart:function(){return this.$el.toggleClass("confirm_loading",!0).toggleClass("confirm_success",!1).toggleClass("confirm_error",!1),!1},confirmSuccess:function(){return this.$el.toggleClass("confirm_loading",!1).toggleClass("confirm_success",!0).toggleClass("confirm_error",!1),this.model.get("backreload")&&setTimeout(_.bind(function(){qst.trigger("historyback:reload"),this.clear()},this),1e3),!1},confirmError:function(){return this.$el.toggleClass("confirm_loading",!1).toggleClass("confirm_success",!1).toggleClass("confirm_error",!0),setTimeout(_.bind(function(){this.$el.toggleClass("confirm_error",!1)},this),2500),!1},close:function(){return this.popup_view.hide(),!1},clear:function(){return this.popup_view.remove(),this.remove(),this.model.clear({silent:!0}),!1}}),qst.UserSettings=Backbone.Model.extend({url:"/v1/users/",defaults:{geo_position:null},fetch:function(a){return a=a||{},a.type="get",a.data=a.data||{token:_.getCookie("token")},a.success=_.bind(this.success,this),a.error=_.bind(this.error,this),this.trigger("load:start"),Backbone.Model.prototype.fetch.call(this,a)},success:function(a,b){var b=_.toJSON(b);b.success&&b.result.user?(this.set(b.result.user),this.trigger("usersettings:ready",b.result.user)):this.trigger("error",{description:"invalid token!"})},error:function(){this.trigger("error",{description:"invalid token!"})},getGeoPosition:function(){this.get("geo_position")||(navigator.geolocation?navigator.geolocation.getCurrentPosition(_.bind(this.getGeoSuccess,this),_.bind(this.getGeoError,this)):error("not supported"))},getGeoSuccess:function(a){this.set("geo_position",a)},getGeoError:function(a){qst.error(a)}}),qst.User=Backbone.Model.extend({cookie_time:365,defaults:{status:"",uid:"",token:""},settings:null,initialize:function(){this.settings=new qst.UserSettings,this.settings.on("error",function(a){this.trigger("user:error",a)},this),this.on("change:token",function(){this.settings.fetch()},this),this.getSession(),qst.on("auth:success",this.setSession,this),qst.on("auth:clear",this.clearSession,this)},getSession:function(){var a=_.getCookie("uid"),b=_.getCookie("token");a&&b&&this.set({uid:a,token:b})},is_auth:function(){return!!this.get("token")},setSession:function(a){_.setCookie("uid",a.session.uid,this.cookie_time),_.setCookie("token",a.session.token,this.cookie_time),this.set(a.session)},clearSession:function(){_.clearCookie("uid"),_.clearCookie("token"),this.set({uid:"",token:""})}}),qst.Registration=Backbone.Model.extend({url:"/v1/users/",initialize:function(){},fetch:function(a){var b=this;this.set(a),$.ajax({type:"POST",url:_.toSafeUrl(this.url),dataType:"json",data:{email:a.login,password:a.password,name:a.name}}).success(function(a,c,d){b.success(a,c,d)}).error(function(a,c,d){b.error(a,c,d)})},success:function(a){var b=_.toJSON(a);b?(this.trigger("auth:success",{response:b.result,user:b.result.user,session:{token:b.result.token,uid:b.result.user.id}}),this.trigger("registration:success")):this.error(null,null,"unknown")},error:function(a,b,c){this.trigger("error",{description:c})}}),qst.Signin=Backbone.Model.extend({url:"/v1/auth",initialize:function(){},login:function(a){return this.fetch(a),!1},fetch:function(a){var b=this;$.ajax({type:"post",url:this.url,dataType:"json",data:{email:a.login,password:a.password}}).success(function(a,c,d){b.success(a,c,d)}).error(function(a,c,d){b.error(a,c,d)})},success:function(a){var b=_.toJSON(a);b?this.trigger("auth:success",{response:b.result,user:b.result.user,session:{token:b.result.token,uid:b.result.user.id}}):this.error(null,null,"unknown")},error:function(a,b,c){if(console.log(a,b,c),a.responseText){var d=_.toJSON(a.responseText);if(d&&d.error)return this.trigger("error",d.error),!0}return this.trigger("error",{}),!0}}),qst.TW=Backbone.Model.extend({url_token:"/api/auth/twitter/request_token/",url:"/api/auth/",inited:!1,req_count:0,req_max:5,curWind:null,loading:!1,oauth_token:0,initialize:function(){var a,b=document.getElementsByTagName("script")[0];document.getElementById("twitter-jssdk")||(a=document.createElement("script"),a.id="twitter-jssdk",$(a).load(function(){}),a.src="//platform.twitter.com/widgets.js",b.parentNode.insertBefore(a,b),this.inited=!0,this.on("error",function(a){console.error(a)},this),qst.is_authed()||(this.req_count=0,this.fetchToken()))},login:function(){return qst.log("login tw >"),this.loading||(this.curWind=_.openWindow2("Twitter auth",640,480),this.curWind.location.href="http://api.twitter.com/oauth/authorize?oauth_token="+this.oauth_token),!1},fetchToken:function(){this.req_count>this.req_max&&this.trigger("error",{description:"too many token request to "+this.url_token}),this.loading=!0;var a=this;$.ajax({type:"GET",url:_.toSafeUrl(this.url_token),dataType:"json"}).success(function(b,c,d){a.successToken(b,c,d)}).error(function(b,c,d){a.errorToken(b,c,d)})},successToken:function(a){var b=_.toJSON(a);this.req_count++,b.error?this.trigger("error",{description:"WHP/auth/TW : got error while getting twitter token = ["+b.error.code+"]"}):(this.oauth_token=b.oauth_token,this.loading=!1,qst.log("WHP/auth/TW : get twitter request token = ["+b.oauth_token+"]"),this.req_count=0)},errorToken:function(a,b){this.req_count++,this.trigger("error",{description:"WHP/auth/TW : error while logging in!"});var b=a.status;console.log(a),0==b?this.trigger("error",{description:"WHP/auth/TW : OFFLINE mode!"}):this.trigger("error",{description:"WHP/auth/TW : error while getting twitter request token! Status = ["+b+"] Tries = ["+this.req_count+"]"}),this.fetchToken()},fetch:function(a){qst.log("GET TW AUTH = ["+a.uid+" : "+a.token+" : "+a.secret+"]"),qst.log("WHP/auth/TW : get auth...");var b=this;$.ajax({type:"GET",url:_.toSafeUrl(this.url),dataType:"json",data:{social:"tw",access_token:a.token,access_token_secret:a.secret}}).success(function(a,c,d){b.success(a,c,d)}).error(function(a,c,d){b.error(a,c,d)})},success:function(a){var b=_.toJSON(a);b.error?"API_AuthFailed"==b.error.code?this.trigger("error",{description:"This account isn't linked with WeHeartPics"}):this.trigger("error",{description:"Something went wrong"}):this.trigger("auth:success",{response:b,user:b.user,session:{token:b.user.token,uid:b.user.id}})},error:function(){this.trigger("error",{description:"WHP/auth/TW : error while logging in!"})}}),qst.VK=Backbone.Model.extend({url:"/v1/auth/vk",inited:!1,wind:null,app_id:3836385,redirect_url:qst.root+"/go/close_vk.html",initialize:function(){},login:function(){return this.wind=_.openWindow2("VK auth",640,480),this.wind.location.href="http://oauth.vk.com/authorize?client_id="+this.app_id+"&scope=photos,offline&response_type=token&display=popup&redirect_uri="+this.redirect_url,!1},fetch:function(a){var b=this;$.ajax({type:"post",url:this.url,dataType:"json",data:{vkAccessToken:a.token,vkUserId:a.uid}}).success(function(a,c,d){b.success(a,c,d)}).error(function(a){b.error(a)})},success:function(a){var b=_.toJSON(a);b&&b.success?this.trigger("auth:success",{response:b.result,user:b.result.user,session:{token:b.result.token,uid:b.result.user.id}}):this.error()},error:function(){qst.log("WHP/auth/VK : error while logging in!"),this.trigger("error",{description:"Something went wrong"})}}),qst.FB=Backbone.Model.extend({url:"/v1/auth/fb",app_id:"137692866413480",inited:!1,access_token:null,access_uid:null,initialize:function(){window.fbAsyncInit=_.bind(function(){FB.init({appId:this.app_id,cookie:!0,status:!0,xfbml:!0,oauth:!1}),FB.Event.subscribe("edge.create",this.fbShareEvents),_.browser.opera&&(FB.XD._transport="postmessage",FB.XD.PostMessage.init()),FB.getLoginStatus(_.bind(function(a){"connected"==a.status?qst.log("Facebook : user was succesfully connected! :)"):qst.log("Facebook : user was not connected! :(")},this))},this),function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/all.js#xfbml=1",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk"),this.inited=!0},fetch:function(){if(null!=this.access_token){var a=this;$.ajax({type:"post",url:this.url,data:{fbUserId:this.access_uid,fbAccessToken:this.access_token},dataType:"json"}).success(function(b,c,d){a.success(b,c,d)}).error(function(b){a.error(b)})}},success:function(a){var b=_.toJSON(a);b&&b.success?this.trigger("auth:success",{response:b.result,user:b.result.user,session:{token:b.result.token,uid:b.result.user.id}}):this.error()},error:function(){qst.log("WHP/auth/FB : error while logging in!"),this.trigger("error",{description:"WHP/auth/FB : error while logging in!"})},login:function(){return this.access_token="",FB.login(_.bind(this.onFBData,this),{scope:"publish_actions,publish_stream,user_photos,offline_access,email,user_birthday"}),!1},loginOG:function(a,b){this.access_token="",FB.login(b,{scope:"publish_actions,publish_stream,user_photos,offline_access,email,user_birthday"})},fbShareEvents:function(a){qst.log("CreateEdge"),this.trigger("fb:like",a)},onFBData:function(a){if("connected"==a.status){qst.log("Facebook : user was succesfully connected! :)",a.authResponse);var b=a.authResponse.userID,c=a.authResponse.accessToken;this.access_token!=c?(qst.log("Facebook : token = ["+c+"]"),this.access_uid=b,this.access_token=c,this.fetch()):qst.log("Facebook : user was not connected! :(")}}}),qst.Config=function(){return{}},qst.Statistic=Backbone.Model.extend({url:"/api/photo/share/",initialize:function(){},trackCurrentPageChange:function(){return this.trackPageChange(window.location.pathname),!0},trackPageChange:function(a){var b=a.toString();"/"!=b.charAt(0)&&(b="/"+b),_gaq.push(["_trackPageview",b])},trackLike:function(){var a=_.getLS("qst_likec");_.isNaN(a)&&(a=0),a++,_.setLS("qst_likec",a,6e4)},trackComment:function(a){var b=_.getLS("qst_comc");_.isNaN(b)&&(b=0),b++,_.setLS("qst_comc",b,6e4);var c=1==a;c?_gaq.push(["_trackEvent","Photo","reply"]):_gaq.push(["_trackEvent","Photo","comment"])},trackShare:function(a){if("SHARE_FACEBOOK"==a){var b=_.getLS("qst_shrc");_.isNaN(b)&&(b=0),b++,_.setLS("qst_shrc",b,6e4)}_gaq.push(["_trackEvent","Photo","share",a])},trackTimeline:function(a,b){var c="USER_TIMELINE_";a&&(c="MAIN_TIMELINE_"),_gaq.push(["_trackEvent","Timeline","PagesLoaded",c+b,b])},trackNotifications:function(a){_gaq.push(["_trackEvent","Notifications","PagesLoaded","PAGES_LOADED_"+a,a])},trackDownload:function(a){_gaq.push(["_trackEvent","Download","click",a])},trackEmptyTimeline:function(a){var b="SHOW_TIMELINE_USER_EMPTY";a&&(b="SHOW_TIMELINE_MAIN_EMPTY"),_gaq.push(["_trackEvent","Download","Views",b])},trackPhotoPlateShow:function(){_gaq.push(["_trackEvent","Download","Views","SHOW_PHOTO_PAGE_PLATE"])},trackDownloadButtonMenu:function(a){var b="SHOW_DOWNLOAD_MENU_NEW";a||(b="SHOW_DOWNLOAD_MENU"),_gaq.push(["_trackEvent","Download","Views",b])},trackEmptyStories:function(){_gaq.push(["_trackEvent","Download","Views","SHOW_EMPTYSTORIES_DOWNLOAD"])},trackShowMainButton:function(){_gaq.push(["_trackEvent","Download","Views","SHOW_MAIN_DOWNLOAD"])},trackXclick:function(){_gaq.push(["_trackEvent","Download","Views","SHOW_CLICK_CLOSE_PLATE"])},trackShuffle:function(){var a=parseInt(_.getLS("qstsc"));_.isNaN(a)&&(a=0),a++,_.setLS("qstsc",a,1e3),_gaq.push(["_trackEvent","Other","Shuffle","click",a])}}),qst.App=Backbone.Model.extend({_didScroll:!1,initialize:function(){this.$og_image=$("#og_image"),this.$og_url=$("#og_url");var a=this,b=window.qst;this.statistic=new b.Statistic,this.router=new b.Router,this.pages=new b.PagesCollection,this.user=new b.User,b.user=this.user,b.config=this.config,this.pages.add(new b.Page({name:"404",template:"pages/404-page"})),this.pages.add(new b.Page({name:"403",template:"pages/403-page"})),this.item=new b.ItemPage({name:"item",template:"pages/item-page"}),this.pages.add(this.itemedit),this.router.on("404",function(){a.pages.getPage("404").render()}),this.router.on("route",function(a,c,d){switch(console.log("route:"+a),this.statistic.trackCurrentPageChange(),b.trigger("route",a,c,d),a){case"er404":this.pages.getPage("404").render();break;case"er403":this.pages.getPage("403").render();break;case"item":this.item.render({id:c[0]});break;default:c[0]&&!this.router.previousWasPopup()}this.trigger("need:meta:update")},this),this.router.on("reset",function(a,c){if(console.log(a,c),!this.router.isPopup(c))switch(this.router.isPopup(a)||b.speedScrollTop(0,1),a){case"item":console.log("reset:itemedit"),this.itemedit.sleep()}this.router.isPopup(a)&&_.forEach(this.pages.models,function(a){a.sleep&&a.get("name")!=c&&a.sleep()})},this),this.on("need:meta:update",function(){this.$og_url.attr("content",window.location.href)},this),b.on("historyback",function(){b.navigate(this.router.back_path,{trigger:!0})},this),b.on("historyback:reload",function(){b.trigger("historyback"),window.location.reload()},this),b.on("404",function(){this.pages.getPage("404").render()},this),this.on("error",function(a){console.error("error"),a&&a.description&&b.error(a.description)}),this.user.on("user:error",function(a){this.trigger("error",a)},this),this.user.settings.on("usersettings:ready",function(a){b.trigger("usersettings:ready",a)},this);var c=$(window),d=$(document);$(window).scroll(function(){var a=c.scrollTop(),e=d.height(),f=c.height();b.trigger("scroll",{s_top:a,d_h:e,w_h:f}),a+150>=e-f&&b.trigger("pagebottom:reached")}),b.trigger("app:init")}}),qst.Router=Backbone.Router.extend({_previous_route:"",previous_route:"",previous_page_route:"",current_route:"",_back_path:"",back_path:"",route_passed:0,context:{},routes:{"b:id/":"item","b:id":"item",404:"er404",403:"er403","*default":"er404"},popoup_routes:[],item:function(){},er404:function(){return console.log("no such route ",arguments),this.trigger("404",arguments),!1},er403:function(){return console.log("access dinied route ",arguments),this.trigger("403",arguments),!1},initialize:function(){var a=_.uniq(_.values(this.routes));_(a).each(function(a){this.on("route:"+a,function(){this.route_passed++,this._previous_route&&this._previous_route!=a&&(this.trigger("reset",this._previous_route,a,this._back_path),this.trigger("reset:"+this._previous_route)),this._previous_route=a,this._back_path=Backbone.history.fragment},this)},this),this.on("reset",function(a,b,c){this.back_path=c,this.current_route=b,this.previous_route=a,this.isPopup(this.previous_route)||(this.previous_page_route=this.previous_route)})},previousWasPopup:function(){return this.isPopup(this.previous_route)},currentIsPopup:function(){return this.isPopup(this.current_route)},isPopup:function(a){return-1!==_.indexOf(this.popoup_routes,a)}}),qst.Item=Backbone.Model.extend({url:"/v1/links/",url_invoice:"/v1/invoices/",preview:null,defaults:{preview_obj:""},initialize:function(){this.view=new qst.ItemView({model:this})},init:function(){this.set("url_short_path",this.get("url_short").split("http://")[1]);var a=this.get("preview");a&&a.length&&a[a.length-1]&&a[a.length-1].data&&this.set("preview_obj",a[a.length-1])},fetch:function(a){return a=a||{},a.url=this.url+this.get("id"),a.type="get",a.data=a.data||{},a.success=_.bind(this.success,this),a.error=_.bind(this.error,this),this.trigger("load:start"),Backbone.Model.prototype.fetch.call(this,a)},success:function(a,b){b=_.toJSON(b),this.set(b.result),b.success?(this.init(),this.trigger("load:success")):this.trigger("load:error")},error:function(){this.trigger("load:error")},save:function(a){var b=this.toJSON();return b.price_pwyw&&(b.price+="+"),a=a||{},a.url=this.url+this.get("id"),a.type="post",a.data=a.data||{active:b.active,name:b.name,description:b.description,url:b.url,price:b.price,ship_limit:b.ship_limit},a.success=_.bind(this.saveSuccess,this),a.error=_.bind(this.saveError,this),this.trigger("save:start"),Backbone.Model.prototype.fetch.call(this,a)},saveSuccess:function(a,b){b=_.toJSON(b),b.success?this.trigger("save:success"):this.trigger("save:error")},saveError:function(){this.trigger("save:error")},activate:function(){this.set("sleeped",!1)},sleep:function(){this.set("sleeped",!0)}}),qst.ItemView=Backbone.View.extend({template:"blocks/item",className:"item",events:{"click .itemedit__submit-a":"submitForm",keypress:"hideErrors",click:"hideErrors","click .itemedit__delete-a":"deleteItem","submit form":"submit","click .itemedit__share-inp-cont":"clickShortLink","click .itemedit__share-btn, .showcase__share-itm-a, .finish__share-itm-a":"clickShare"},initialize:function(){this.template=qst.Templates.get(this.template),this.model.on("load:success",this.render,this),this.model.on("change:sleeped",this.sleep,this),this.model.on("change:url",this.changeLink,this),this.lazy_loader=new qst.LazyLoader,this.model.on("save:success",this.saveSuccess,this)},render:function(){var a=this.template(this.model.toJSON());this.$el.html(a),this.$form=this.$el.find("form"),this.$error=this.$el.find(".item__error"),this.$showcase=this.$el.find(".showcase__form"),this.$showcase_img=this.$showcase.find(".showcase__form__img"),this.$receipt_comment=this.$el.find(".finish__form-desc"),this.$input_receipt_comment=this.$el.find(".finish__form-receipt_desc");var b=$.trim(this.model.get("receipt_comment"));b?this.$el.toggleClass("comment-editing",!1).toggleClass("comment-can-edit",!0).toggleClass("comment-can-add",!1):this.$el.toggleClass("comment-editing",!1).toggleClass("comment-can-edit",!1).toggleClass("comment-can-add",!0),this.lazy_loader.load(this.$el),this.delegateEvents()},submit:function(){var a=this.$input_active.is(":checked"),b=$.trim(this.$input_name.val()),c=this.$input_price.val(),d=this.$input_ship_limit.val(),e=this.$input_link.val(),f=(this.$input_file.val(),$.trim(this.$input_description.val())),g=this.model.get("state");if(_.isEmpty(b))return this.showError(qst.localize("write some name of the item","itemlist"),"name"),!1;if(_.isEmpty(c)||_.isNaN(parseInt(c)))return this.showError(qst.localize("set price, please","itemlist"),"price"),!1;if(_.isEmpty(d)||_.isNaN(parseInt(d)))return this.showError(qst.localize("set ship limit, please","itemlist"),"ship_limit"),!1;if("link"===g){if(_.isEmpty(e))return this.showError(qst.localize("set a link, please","itemlist"),"link"),!1;if(!_.isUrl(e))return this.showError(qst.localize("set a valid link, please","itemlist"),"link"),!1}var h=-1!==c.indexOf("+");return this.model.set({active:a+0,name:b,url:e,description:f,price:parseInt(c),price_pwyw:h+0,ship_limit:parseInt(d)}),this.model.save(),!1},showError:function(a,b){switch(this.$error.text(a),this.$el.toggleClass("error",!0),b){case"name":this.$input_name.parents(".qst__inp-cont").toggleClass("error-inp",!0),this.$input_name.focus();break;case"price":this.$input_price.parents(".qst__inp-cont").toggleClass("error-inp",!0),this.$input_price.focus();break;case"link":this.$input_link.parents(".qst__inp-cont").toggleClass("error-inp",!0),this.$input_link.focus();break;case"file":this.$input_file.parents(".qst__inp-cont").toggleClass("error-inp",!0)}},hideErrors:function(){this.$el.toggleClass("error",!1),this.$el.find(".error-inp").toggleClass("error-inp",!1)},submitForm:function(){return this.$form.submit(),!1},clickShare:function(a){var b=$(a.currentTarget).attr("href"),c="http://api.addthis.com/oexchange/0.8/forward/"+b+"/offer?"+"url="+this.model.get("url_short")+"&title="+encodeURIComponent(this.model.get("name"))+"&description="+encodeURIComponent(this.model.get("description"))+"&pubid=prolll"+"&text="+encodeURIComponent(this.model.get("description"))+"&via=qstoq";return console.log(a,c),_.openWindow3(c,b,480,360),!1},clickShortLink:function(a){$(a.currentTarget).find("input").select()},deleteItem:function(){return this.model.deleteItem(),!1},changeLink:function(a,b){this.$input_link&&this.$input_link.val(b)},saveSuccess:function(){console.log("save:success")},clear:function(){this.hideErrors()},sleep:function(a,b){b?(this.undelegateEvents(),this.clear()):this.delegateEvents()}}),qst.ItemPage=qst.Page.extend({visited:!1,defaults:{id:0,sleeped:!0},url:"",initialize:function(a){a=a||{}},needRerender:function(a){return this.get("sleeped")||a.id!=this.get("id")},render:function(a){return this.set(a),this.needRerender(a)?(this.visited?(this.view.render(),this.item.set(a),this.item.fetch(),this.item.activate(),this.view.addItem(this.item),this.set("sleeped",!1)):(this.visited=!0,this.view=new qst.ItemPageView({model:this,template:"pages/item-page"}),this.view.render(),this.item=new qst.Item(a),this.item.fetch(),this.item.activate(),this.view.addItem(this.item),this.item.on("load:error",this.error,this),this.set("sleeped",!1)),void 0):!1},sleep:function(){return this.get("sleeped")?!1:(this.set("sleeped",!0),this.item&&this.item.sleep(),void 0)},error:function(){qst.trigger("404")}}),qst.ItemPageView=qst.PageView.extend({addItem:function(a){this.$el.find(".item__section-row").html(a.view.$el)}});
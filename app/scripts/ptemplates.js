this["qst"] = this["qst"] || {};
this["qst"]["Templates"] = this["qst"]["Templates"] || {};
this["qst"]["Templates"]["ptemplates"] = this["qst"]["Templates"]["ptemplates"] || {};

this["qst"]["Templates"]["ptemplates"]["blocks/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<div class=\"showcase__form__img-cont load-bg\">\n							<img src=\"";
  if (stack1 = helpers._empty_img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._empty_img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" class=\"showcase__form__img lazy\" data-width=\"320\" data-height=\"180\" data-bg=\"1\" data-crop=\"1\" data-orig=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.preview_obj),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n						</div>\n						";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span class=\"hidden showcase__form-image\" itemprop=\"image\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.preview_obj),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  }

  buffer += "<table class=\"showcase__table\" itemscope itemtype=\"http://schema.org/Product\">\n	<tr>\n		<td>\n			<div class=\"showcase__cont\">\n				<div class=\"showcase__form\">\n					<div class=\"showcase__form__col1\">\n						";
  stack1 = helpers['if'].call(depth0, depth0.preview_obj, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<h1 class=\"showcase__form-h\" itemprop=\"name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n						<p class=\"showcase__form-desc\" itemprop=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n						";
  stack1 = helpers['if'].call(depth0, depth0.preview_obj, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<span class=\"hidden showcase__form-url\" itemprop=\"url\">";
  if (stack1 = helpers.url_short) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url_short; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n						<ul class=\"showcase__share\">\n							<li class=\"showcase__share-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "item", options) : helperMissing.call(depth0, "_", "Share", "item", options)))
    + "</li>\n							<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n							<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n							<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n						</ul>\n					</div>\n					<div class=\"showcase__form__col2\" itemprop=\"offers\" itemscope itemtype=\"http://schema.org/Offer\">\n						<span class=\"showcase__form-price\"><span class=\"showcase__form-price-val\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)))
    + "</span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n						<span class=\"hidden showcase__form-price\" itemprop=\"price\">";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n						<form action=\"buy\" method=\"post\">\n							<div class=\"showcase__form-email-group qst__inp-group\">\n								<div class=\"showcase__form-email-cont qst__inp-cont\">\n									<input type=\"text\" value=\"";
  if (stack2 = helpers.customer_email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer_email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "email", "itemedit", options) : helperMissing.call(depth0, "_", "email", "itemedit", options)))
    + "\" class=\"showcase__form-email qst__inp\" name=\"customer_email\" maxlength=\"50\">\n								</div>\n							</div>\n							<input type=\"submit\" class=\"hidden-submit\">\n						</form>\n						<p class=\"showcase__form-price-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "for notifications about your purchases<br/>and feedback", "itemedit", options) : helperMissing.call(depth0, "_", "for notifications about your purchases<br/>and feedback", "itemedit", options)))
    + "</p>\n\n						<a class=\"showcase__form__buy-btn\" href=\"buy\"><span class=\"showcase__form__buy-btn-in\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Buy", "itemedit", options) : helperMissing.call(depth0, "_", "Buy", "itemedit", options)))
    + "</span></a>\n						<span class=\"item__error\"></span>\n					</div>\n					<div class=\"showcase__form__bottom-row\">\n						<div class=\"showcase__form__bottom-row__col1\"><a href=\"http://qstoq.me\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemedit", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemedit", options)))
    + "</div>\n						<div class=\"showcase__form__bottom-row__col2\"><i class=\"is is-lock showcase__form__safe-icn\"></i><span class=\"showcase__form__safe-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Safe payment", "item", options) : helperMissing.call(depth0, "_", "Safe payment", "item", options)))
    + "</span></div>\n					</div>\n					<div class=\"showcase__form__blocker\"></div>\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["misc/request-form"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<input type=\"hidden\" name=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">\n";
  return buffer;
  }

  buffer += "<form action=\"";
  if (stack1 = helpers.submitUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.submitUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" method=\"";
  if (stack1 = helpers.method) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.method; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"hidden-form\">\n";
  stack1 = helpers.each.call(depth0, depth0.parameters, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<input type=\"submit\" value=\"buy\">\n</form>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/403-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"error-page__description\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sorry, can’t let you get any further than this.<br/>Please <a href=\"auth:show\" type=\"event\" class=\"lnk\">log in</a> or <a  href=\"auth:show\" type=\"event\" class=\"lnk\">sign up</a> to see this page.", "p403", options) : helperMissing.call(depth0, "_", "Sorry, can’t let you get any further than this.<br/>Please <a href=\"auth:show\" type=\"event\" class=\"lnk\">log in</a> or <a  href=\"auth:show\" type=\"event\" class=\"lnk\">sign up</a> to see this page.", "p403", options)))
    + "</p>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/404-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"error-page__list\">\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Make sure that URL entered correctly;", "p404", options) : helperMissing.call(depth0, "_", "Make sure that URL entered correctly;", "p404", options)))
    + "</li>\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or drop us a line to <a href=\"mailto:support@qstoq.me\" class=\"lnk\">support@qstoq.me.</a>", "p404", options) : helperMissing.call(depth0, "_", "or drop us a line to <a href=\"mailto:support@qstoq.me\" class=\"lnk\">support@qstoq.me.</a>", "p404", options)))
    + "</li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/item-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"item__section-row\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["popups/confirm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"confirm__p\">";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<ul class=\"confirm__line\">\n	<li class=\"confirm__ok\">";
  if (stack1 = helpers.ok_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ok_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n	<li class=\"confirm__close\">";
  if (stack1 = helpers.close_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.close_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n</ul>\n<p class=\"confirm__p_success\">";
  if (stack1 = helpers.success_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.success_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"confirm__p_error\">";
  if (stack1 = helpers.error_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/popup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"popup__table ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n	<tr>\n		<td class=\"popup__td\">\n			<div class=\"popup__close\">\n				<div class=\"popup__close-col\">\n					<span class=\"close\">&times;</span>\n				</div>\n			</div>\n			<div class=\"popup__previous\">\n				<div class=\"popup__previous-col\">\n					<i class=\"prev\"></i>\n				</div>\n			</div>\n			<div class=\"popup__inner\">\n				<div class=\"popup__content\">\n					";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/warning"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<h1 class=\"warning__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Warning!", "warning", options) : helperMissing.call(depth0, "_", "Warning!", "warning", options)))
    + "</h1>\n<p class=\"warning__p\">";
  if (stack2 = helpers.content) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.content; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<span class=\"warning__close\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "warning", options) : helperMissing.call(depth0, "_", "Ok", "warning", options)))
    + "</span>";
  return buffer;
  });
this["qst"] = this["qst"] || {};
this["qst"]["Templates"] = this["qst"]["Templates"] || {};
this["qst"]["Templates"]["ptemplates"] = this["qst"]["Templates"]["ptemplates"] || {};

this["qst"]["Templates"]["ptemplates"]["blocks/item-receipt"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n				";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.external, "0", options) : helperMissing.call(depth0, "ifEq", depth0.external, "0", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n					<span class=\"receipt__form__buy-btn\"><a class=\"receipt__form__buy-btn-in\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get file", "itemreceipt", options) : helperMissing.call(depth0, "_", "Get file", "itemreceipt", options)))
    + "</a></span>\n				";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n					<span class=\"receipt__form__buy-btn\"><a class=\"receipt__form__buy-btn-in\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get link", "itemreceipt", options) : helperMissing.call(depth0, "_", "Get link", "itemreceipt", options)))
    + "</a></span>\n				";
  return buffer;
  }

  buffer += "<div class=\"receipt__form-add-comment\">\n	<i class=\"is is-com receipt__form-add-comment__icn\"></i>\n	<ul class=\"receipt__form-add-comment__list\">\n		<li class=\"receipt__form-add-comment__add\"><a href=\"add\" rel=\"nofollow\" class=\"receipt__form-add-comment-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add your<br/>message on the receipt", "itemreceipt", options) : helperMissing.call(depth0, "_", "Add your<br/>message on the receipt", "itemreceipt", options)))
    + "</a></li>\n		<li class=\"receipt__form-add-comment__edit\"><a href=\"edit\" rel=\"nofollow\" class=\"receipt__form-add-comment-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit your message on the receipt", "itemreceipt", options) : helperMissing.call(depth0, "_", "Edit your message on the receipt", "itemreceipt", options)))
    + "</a></li>\n	</ul>\n</div>\n<div class=\"receipt__cont\">\n	<div class=\"receipt__form-t\"></div>\n	<div class=\"receipt__form\">\n		<div class=\"receipt__form-col\">\n			<span class=\"receipt__form-line\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Purchased", "itemreceipt", options) : helperMissing.call(depth0, "_", "Purchased", "itemreceipt", options)))
    + "</span>\n			<span class=\"receipt__form-price\"><span class=\"receipt__form-price-val\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)))
    + "</span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n			<h1 class=\"receipt__form-h\"><a href=\"";
  if (stack2 = helpers.url_short) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></h1>\n			";
  stack2 = helpers['if'].call(depth0, depth0.url, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"receipt__form-receipt_desc-group qst__inp-group\">\n				<div class=\"receipt__form-receipt_desc-cont qst__inp-cont\">\n					<textarea value=\"\" class=\"receipt__form-receipt_desc qst__inp\" name=\"receipt_comment\">";
  if (stack2 = helpers.receipt_comment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.receipt_comment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\n				</div>\n				<ul class=\"receipt__form-receipt_desc-action-list\"><li class=\"receipt__form-receipt_desc-action receipt__form-receipt_desc-action_cancel\"><a href=\"receipt-cancel\" rel=\"nofollow\" class=\"receipt__form-receipt_desc-action-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "itemreceipt", options) : helperMissing.call(depth0, "_", "Cancel", "itemreceipt", options)))
    + "</a></li><li class=\"receipt__form-receipt_desc-action receipt__form-receipt_desc-action_save\"><a href=\"receipt-save\" rel=\"nofollow\" class=\"receipt__form-receipt_desc-action-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "itemreceipt", options) : helperMissing.call(depth0, "_", "Save", "itemreceipt", options)))
    + "</a></li>\n				</ul>\n			</div>\n			<p class=\"receipt__form-desc\">";
  if (stack2 = helpers.receipt_comment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.receipt_comment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n			<p class=\"receipt__form-desc-static\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "All purchasement info we&#39;ve sent to your email", "itemreceipt", options) : helperMissing.call(depth0, "_", "All purchasement info we&#39;ve sent to your email", "itemreceipt", options)))
    + "</p>\n			<ul class=\"receipt__share\">\n				<li class=\"receipt__share-itm receipt__share-itm-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "itemreceipt", options) : helperMissing.call(depth0, "_", "Share", "itemreceipt", options)))
    + "</li>\n				<li class=\"receipt__share-itm\"><a class=\"receipt__share-itm-a\" rel=\"nofollow\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n				<li class=\"receipt__share-itm\"><a class=\"receipt__share-itm-a\" rel=\"nofollow\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n				<li class=\"receipt__share-itm\"><a class=\"receipt__share-itm-a\" rel=\"nofollow\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n			</ul>\n		</div>\n		<div class=\"receipt__service-desc\"><a href=\"http://qstoq.ru\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemreceipt", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemreceipt", options)))
    + "</div>\n	</div>\n	<div class=\"receipt__form-b\"></div>\n</div>";
  return buffer;
  });

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
    + "\" alt=\"\" class=\"showcase__form__img lazy\" data-orig=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.preview_obj),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n						</div>\n						";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<pre class=\"showcase__form-desc\" itemprop=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</pre>";
  return buffer;
  }

function program5(depth0,data) {
  
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
    + "</h1>\n						";
  stack1 = helpers['if'].call(depth0, depth0.description, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  stack1 = helpers['if'].call(depth0, depth0.preview_obj, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
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
    + "</span>\n						<form action=\"purchase\" method=\"post\">\n							<div class=\"showcase__form-email-group qst__inp-group\">\n								<div class=\"showcase__form-email-cont qst__inp-cont\">\n									<input type=\"text\" value=\"";
  if (stack2 = helpers.customer_email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer_email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "email", "itemedit", options) : helperMissing.call(depth0, "_", "email", "itemedit", options)))
    + "\" class=\"showcase__form-email qst__inp\" name=\"customer_email\" maxlength=\"50\">\n								</div>\n							</div>\n							<input type=\"submit\" class=\"hidden-submit\">\n						</form>\n						<p class=\"showcase__form-price-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "for notifications about your purchases<br/>and feedback", "itemedit", options) : helperMissing.call(depth0, "_", "for notifications about your purchases<br/>and feedback", "itemedit", options)))
    + "</p>\n\n						<a class=\"showcase__form__buy-btn\" href=\"purchase\"><span class=\"showcase__form__buy-btn-in\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Buy", "itemedit", options) : helperMissing.call(depth0, "_", "Buy", "itemedit", options)))
    + "</span></a>\n						<span class=\"item__error\"></span>\n					</div>\n					<div class=\"showcase__form__bottom-row\">\n						<div class=\"showcase__form__bottom-row__col1\"><a href=\"http://qstoq.ru\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemedit", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemedit", options)))
    + "</div>\n						<div class=\"showcase__form__bottom-row__col2\"><i class=\"is is-lock showcase__form__safe-icn\"></i><span class=\"showcase__form__safe-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Safe payment", "item", options) : helperMissing.call(depth0, "_", "Safe payment", "item", options)))
    + "</span></div>\n					</div>\n					<div class=\"showcase__form__blocker\"></div>\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/purchase"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			<div class=\"purchase__col1\">\n				<h1 class=\"purchase__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Choose a payment method", "purchase", options) : helperMissing.call(depth0, "_", "Choose a payment method", "purchase", options)))
    + "</h1>\n				<ul class=\"purchase__category-list\">\n				";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.pay_categories), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</ul>\n			</div>\n			<div class=\"purchase__col2\">\n				";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.pay_categories), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</div>\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					<li class=\"purchase__category-item\"><span class=\"purchase__category-item-a\" href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"pc pc-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i><span class=\"purchase__category-item-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span></li>\n				";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<ul class=\"purchase__method-list purchase__method-list-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n					";
  stack1 = helpers.each.call(depth0, depth0.methods, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</ul>\n				";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					<li class=\"purchase__method-item\">\n						<span class=\"purchase__method-item-a\" href=\"";
  if (stack1 = helpers.system_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.system_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" rel=\"nofollow\" data-methodid=\"";
  if (stack1 = helpers.method_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.method_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-systemid=\"";
  if (stack1 = helpers.system_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.system_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, depth0.params, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"ps ps-";
  if (stack1 = helpers.method_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.method_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i><span class=\"purchase__method-item-title\"><span class=\"purchase__method-item-title-in\">";
  if (stack1 = helpers.method_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.method_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span></span>\n						";
  stack1 = helpers['if'].call(depth0, depth0.params, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</li>\n					";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "  data-misc=\"1\"";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n						<div class=\"purchase__method-item-misc\">\n								";
  stack1 = helpers.each.call(depth0, depth0.params, {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								<input type=\"submit\" class=\"hidden-submit\">\n								<div class=\"purchase__method-item-misc-submit\">\n									<button type=\"submit\" class=\"purchase__method-item-misc-submit-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Next", "purchase", options) : helperMissing.call(depth0, "_", "Next", "purchase", options)))
    + "</button>\n								</div>\n							</form>\n						</div>\n						";
  return buffer;
  }
function program9(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n								<form action=\".\" class=\"purchase__method-item-misc-form\">\n									<div class=\"qst__inp-cont\">\n										<label>\n											<span class=\"qst__lbl\">";
  if (stack1 = helpers.label) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n											<div class=\"qst__inp-cont-in";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, "phone", options) : helperMissing.call(depth0, "ifEq", depth0.type, "phone", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n												<input type=\"text\" data-type=\"";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"qst__inp\" data-name=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"";
  stack2 = helpers['if'].call(depth0, depth0.length, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " name=\""
    + escapeExpression(((stack1 = depth1.system_id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" value=\"\">\n											</div>\n										</label>\n									</div>\n								";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return " qst__inp_cont_phone";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-length=\"";
  if (stack1 = helpers.length) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.length; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" maxlength=\"";
  if (stack1 = helpers.length) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.length; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<h2 class=\"purchase__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "No payment methods for this item :(", "purchase", options) : helperMissing.call(depth0, "_", "No payment methods for this item :(", "purchase", options)))
    + "</h2>\n		";
  return buffer;
  }

  buffer += "<div class=\"purchase__cont\">\n	<div class=\"purchase__row\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.pay_methods)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(14, program14, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n</div>\n<div class=\"purchase__fader\"></div>";
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
  if (stack1 = helpers.submit_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.submit_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
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
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or drop us a line to <a href=\"mailto:support@qstoq.ru\" class=\"lnk\">support@qstoq.ru.</a>", "p404", options) : helperMissing.call(depth0, "_", "or drop us a line to <a href=\"mailto:support@qstoq.ru\" class=\"lnk\">support@qstoq.ru.</a>", "p404", options)))
    + "</li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/finish-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<table class=\"finish__table\">\n	<tr>\n		<td>\n			<div class=\"item-receipt__cont\"></divv>\n			<ul class=\"invoice-state__cont\">\n				<li class=\"invoice-state__item invoice-state__0\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "New", "finish", options) : helperMissing.call(depth0, "_", "New", "finish", options)))
    + "</li>\n				<li class=\"invoice-state__item invoice-state__1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Processing", "finish", options) : helperMissing.call(depth0, "_", "Processing", "finish", options)))
    + "</li>\n				<li class=\"invoice-state__item invoice-state__2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "finish", options) : helperMissing.call(depth0, "_", "Ok", "finish", options)))
    + "</li>\n				<li class=\"invoice-state__item invoice-state__3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Not paid", "finish", options) : helperMissing.call(depth0, "_", "Not paid", "finish", options)))
    + "</li>\n			</ul>\n		</td>\n	</tr>\n</table>\n";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/item-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"item__section-row\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/purchase-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"purchase-row\"></div>";
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
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n	<tr>\n		<td class=\"popup__td\">\n			<div class=\"popup__close\">\n				<div class=\"popup__close-col\">\n					<span class=\"close\">&times;</span>\n				</div>\n			</div>\n			<div class=\"popup__previous\">\n				<div class=\"popup__previous-col\">\n					<i class=\"prev\"></i>\n				</div>\n			</div>\n			<div class=\"popup__inner\">\n				<div class=\"popup__content\">\n					<i class=\"qi qi-popup-close popup__close-btn\"></i>\n					";
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
this.qst=this.qst||{},this.qst.Templates=this.qst.Templates||{},this.qst.Templates.ptemplates=this.qst.Templates.ptemplates||{},this.qst.Templates.ptemplates["blocks/item"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n						<div class="showcase__form__img-cont load-bg">\n							<img src="',(d=c._empty_img)?d=d.call(a,{hash:{},data:b}):(d=a._empty_img,d=typeof d===l?d.apply(a):d),e+=m(d)+'" alt="" class="showcase__form__img lazy" data-width="320" data-height="180" data-bg="1" data-crop="1" data-orig="'+m((d=a.preview_obj,d=null==d||d===!1?d:d.data,typeof d===l?d.apply(a):d))+'">\n						</div>\n						'}function g(a){var b,c="";return c+='<span class="hidden showcase__form-image" itemprop="image">'+m((b=a.preview_obj,b=null==b||b===!1?b:b.data,typeof b===l?b.apply(a):b))+"</span>"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i,j,k="",l="function",m=this.escapeExpression,n=this,o=c.helperMissing;return k+='<table class="showcase__table" itemscope itemtype="http://schema.org/Product">\n	<tr>\n		<td>\n			<div class="showcase__cont">\n				<div class="showcase__form">\n					<div class="showcase__form__col1">\n						',h=c["if"].call(b,b.preview_obj,{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(h||0===h)&&(k+=h),k+='\n						<h1 class="showcase__form-h" itemprop="name">',(h=c.name)?h=h.call(b,{hash:{},data:e}):(h=b.name,h=typeof h===l?h.apply(b):h),k+=m(h)+'</h1>\n						<p class="showcase__form-desc" itemprop="description">',(h=c.description)?h=h.call(b,{hash:{},data:e}):(h=b.description,h=typeof h===l?h.apply(b):h),k+=m(h)+"</p>\n						",h=c["if"].call(b,b.preview_obj,{hash:{},inverse:n.noop,fn:n.program(3,g,e),data:e}),(h||0===h)&&(k+=h),k+='\n						<span class="hidden showcase__form-url" itemprop="url">',(h=c.url_short)?h=h.call(b,{hash:{},data:e}):(h=b.url_short,h=typeof h===l?h.apply(b):h),k+=m(h)+'</span>\n						<ul class="showcase__share">\n							<li class="showcase__share-itm">',j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,"Share","item",j):o.call(b,"_","Share","item",j)))+'</li>\n							<li class="showcase__share-itm"><a class="showcase__share-itm-a" href="vk"><i class="is is-shc-vk"></i></a></li>\n							<li class="showcase__share-itm"><a class="showcase__share-itm-a" href="facebook"><i class="is is-shc-fb"></i></a></li>\n							<li class="showcase__share-itm"><a class="showcase__share-itm-a" href="twitter"><i class="is is-shc-tw"></i></a></li>\n						</ul>\n					</div>\n					<div class="showcase__form__col2" itemprop="offers" itemscope itemtype="http://schema.org/Offer">\n						<span class="showcase__form-price"><span class="showcase__form-price-val">',j={hash:{},data:e},k+=m((h=c._number_format||b._number_format,h?h.call(b,b.price,j):o.call(b,"_number_format",b.price,j)))+"</span>",j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,b.currency,"currency",j):o.call(b,"_",b.currency,"currency",j)))+'</span>\n						<span class="hidden showcase__form-price" itemprop="price">',(i=c.price)?i=i.call(b,{hash:{},data:e}):(i=b.price,i=typeof i===l?i.apply(b):i),k+=m(i)+" ",j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,b.currency,"currency",j):o.call(b,"_",b.currency,"currency",j)))+'</span>\n						<form action="purchase" method="post">\n							<div class="showcase__form-email-group qst__inp-group">\n								<div class="showcase__form-email-cont qst__inp-cont">\n									<input type="text" value="',(i=c.customer_email)?i=i.call(b,{hash:{},data:e}):(i=b.customer_email,i=typeof i===l?i.apply(b):i),k+=m(i)+'" placeholder="',j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,"email","itemedit",j):o.call(b,"_","email","itemedit",j)))+'" class="showcase__form-email qst__inp" name="customer_email" maxlength="50">\n								</div>\n							</div>\n							<input type="submit" class="hidden-submit">\n						</form>\n						<p class="showcase__form-price-desc">',j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,"for notifications about your purchases<br/>and feedback","itemedit",j):o.call(b,"_","for notifications about your purchases<br/>and feedback","itemedit",j)))+'</p>\n\n						<a class="showcase__form__buy-btn" href="purchase"><span class="showcase__form__buy-btn-in">',j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,"Buy","itemedit",j):o.call(b,"_","Buy","itemedit",j)))+'</span></a>\n						<span class="item__error"></span>\n					</div>\n					<div class="showcase__form__bottom-row">\n						<div class="showcase__form__bottom-row__col1"><a href="http://qstoq.me" target="_blank">Qstoq</a> &mdash; ',j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,"selling in lightning speed","itemedit",j):o.call(b,"_","selling in lightning speed","itemedit",j)))+'</div>\n						<div class="showcase__form__bottom-row__col2"><i class="is is-lock showcase__form__safe-icn"></i><span class="showcase__form__safe-desc">',j={hash:{},data:e},k+=m((h=c._||b._,h?h.call(b,"Safe payment","item",j):o.call(b,"_","Safe payment","item",j)))+'</span></div>\n					</div>\n					<div class="showcase__form__blocker"></div>\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>'}),this.qst.Templates.ptemplates["blocks/purchase"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return h+='\n		<h1 class="purchase__h">',f={hash:{},data:b},h+=m((d=c._||a._,d?d.call(a,"Choose a payment method","purchase",f):n.call(a,"_","Choose a payment method","purchase",f)))+'</h1>\n		<ul class="purchase__info-list">\n		',e=c.each.call(a,(d=a.invoice,null==d||d===!1?d:d.pay_methods),{hash:{},inverse:o.noop,fn:o.program(2,g,b),data:b}),(e||0===e)&&(h+=e),h+="\n		</ul>\n		"}function g(a,b){var d,e="";return e+='\n			<li class="purchase__info-item"><a  class="purchase__info-item-a" href="',(d=c.system_id)?d=d.call(a,{hash:{},data:b}):(d=a.system_id,d=typeof d===l?d.apply(a):d),e+=m(d)+'" rel="nofollow" data-methodid="',(d=c.method_id)?d=d.call(a,{hash:{},data:b}):(d=a.method_id,d=typeof d===l?d.apply(a):d),e+=m(d)+'" data-systemid="',(d=c.system_id)?d=d.call(a,{hash:{},data:b}):(d=a.system_id,d=typeof d===l?d.apply(a):d),e+=m(d)+'">',(d=c.method_name)?d=d.call(a,{hash:{},data:b}):(d=a.method_name,d=typeof d===l?d.apply(a):d),e+=m(d)+"</a></li>\n		"}function h(a,b){var d,e,f="";return f+='\n		<h2 class="purchase__h2">',e={hash:{},data:b},f+=m((d=c._||a._,d?d.call(a,"No payment methods for this item :(","purchase",e):n.call(a,"_","No payment methods for this item :(","purchase",e)))+"</h2>\n		"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j,k="",l="function",m=this.escapeExpression,n=c.helperMissing,o=this;return k+='<div class="purchase__cont">\n	<div class="purchase__row">\n		',j=c["if"].call(b,(i=b.invoice,i=null==i||i===!1?i:i.pay_methods,null==i||i===!1?i:i.length),{hash:{},inverse:o.program(4,h,e),fn:o.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+='\n	</div>\n</div>\n<div class="purchase__fader"></div>'}),this.qst.Templates.ptemplates["misc/request-form"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var c,d="";return d+='\n<input type="hidden" name="'+j((c=b,c=null==c||c===!1?c:c.key,typeof c===i?c.apply(a):c))+'" value="'+j(typeof a===i?a.apply(a):a)+'">\n'}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<form action="',(g=c.submit_url)?g=g.call(b,{hash:{},data:e}):(g=b.submit_url,g=typeof g===i?g.apply(b):g),h+=j(g)+'" method="',(g=c.method)?g=g.call(b,{hash:{},data:e}):(g=b.method,g=typeof g===i?g.apply(b):g),h+=j(g)+'" class="hidden-form">\n',g=c.each.call(b,b.parameters,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+='\n<input type="submit" value="buy">\n</form>'}),this.qst.Templates.ptemplates["pages/403-page"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i=c.helperMissing,j=this.escapeExpression;return h+='<p class="error-page__description">',g={hash:{},data:e},h+=j((f=c._||b._,f?f.call(b,'Sorry, can’t let you get any further than this.<br/>Please <a href="auth:show" type="event" class="lnk">log in</a> or <a  href="auth:show" type="event" class="lnk">sign up</a> to see this page.',"p403",g):i.call(b,"_",'Sorry, can’t let you get any further than this.<br/>Please <a href="auth:show" type="event" class="lnk">log in</a> or <a  href="auth:show" type="event" class="lnk">sign up</a> to see this page.',"p403",g)))+"</p>"}),this.qst.Templates.ptemplates["pages/404-page"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i=c.helperMissing,j=this.escapeExpression;return h+='<ul class="error-page__list">\n	<li class="error-page__list-item">',g={hash:{},data:e},h+=j((f=c._||b._,f?f.call(b,"Make sure that URL entered correctly;","p404",g):i.call(b,"_","Make sure that URL entered correctly;","p404",g)))+'</li>\n	<li class="error-page__list-item">',g={hash:{},data:e},h+=j((f=c._||b._,f?f.call(b,'or drop us a line to <a href="mailto:support@qstoq.me" class="lnk">support@qstoq.me.</a>',"p404",g):i.call(b,"_",'or drop us a line to <a href="mailto:support@qstoq.me" class="lnk">support@qstoq.me.</a>',"p404",g)))+"</li>\n</ul>"}),this.qst.Templates.ptemplates["pages/item-page"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="item__section-row"></div>'}),this.qst.Templates.ptemplates["pages/purchase-page"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="purchase-row"></div>'}),this.qst.Templates.ptemplates["popups/confirm"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<p class="confirm__p">',(f=c.content)?f=f.call(b,{hash:{},data:e}):(f=b.content,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n<ul class="confirm__line">\n	<li class="confirm__ok">',(f=c.ok_title)?f=f.call(b,{hash:{},data:e}):(f=b.ok_title,f=typeof f===h?f.apply(b):f),g+=i(f)+'</li>\n	<li class="confirm__close">',(f=c.close_title)?f=f.call(b,{hash:{},data:e}):(f=b.close_title,f=typeof f===h?f.apply(b):f),g+=i(f)+'</li>\n</ul>\n<p class="confirm__p_success">',(f=c.success_title)?f=f.call(b,{hash:{},data:e}):(f=b.success_title,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n<p class="confirm__p_error">',(f=c.error_title)?f=f.call(b,{hash:{},data:e}):(f=b.error_title,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>"}),this.qst.Templates.ptemplates["popups/popup"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<table class="popup__table ',(f=c["class"])?f=f.call(b,{hash:{},data:e}):(f=b["class"],f=typeof f===h?f.apply(b):f),g+=i(f)+'" tabindex="-1">\n	<tr>\n		<td class="popup__td">\n			<div class="popup__close">\n				<div class="popup__close-col">\n					<span class="close">&times;</span>\n				</div>\n			</div>\n			<div class="popup__previous">\n				<div class="popup__previous-col">\n					<i class="prev"></i>\n				</div>\n			</div>\n			<div class="popup__inner">\n				<div class="popup__content">\n					<i class="qi qi-popup-close popup__close-btn"></i>\n					',(f=c.content)?f=f.call(b,{hash:{},data:e}):(f=b.content,f=typeof f===h?f.apply(b):f),(f||0===f)&&(g+=f),g+="\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>"}),this.qst.Templates.ptemplates["popups/warning"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression,l="function";return i+='<h1 class="warning__h">',h={hash:{},data:e},i+=k((f=c._||b._,f?f.call(b,"Warning!","warning",h):j.call(b,"_","Warning!","warning",h)))+'</h1>\n<p class="warning__p">',(g=c.content)?g=g.call(b,{hash:{},data:e}):(g=b.content,g=typeof g===l?g.apply(b):g),(g||0===g)&&(i+=g),i+='</p>\n<span class="warning__close">',h={hash:{},data:e},i+=k((f=c._||b._,f?f.call(b,"Ok","warning",h):j.call(b,"_","Ok","warning",h)))+"</span>"});
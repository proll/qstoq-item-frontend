/**
 * Helper for i10n support for Handlebars 
 */
Handlebars.registerHelper('_', function(phrase, context){
	// if(arguments.length >= 2){
	// 	// var str = arguments[0],
	// 	// 	params = _.toArray(arguments).slice(1,-1),
	// 	// 	param;
	// 	// while(str.indexOf("%s") != -1){
	// 	// 	param = params.length==1 ? params[0] : params.shift();
	// 	// 	str = str.replace(/%s/, param);
	// 	// }
	// 	// text = str;
	// 	if()
	// }else{

	// 	//@TODO
	// 	//Get string from lang config (scripts/l10n/)
	// 	// or just resolve that we have to have pack of templates for each lang
	// }

	// console.log(arguments.callee.caller);
	var phr = phrase;
	if(!!qst.l10n[context] && !!qst.l10n[context][phrase]) {
		phr = qst.l10n[context][phrase][qst.language] || qst.l10n[context][phrase]['en'] || '(;_;)';
	}
	return new Handlebars.SafeString(phr);

});

Handlebars.registerHelper('_empty_img', function(){
	return new Handlebars.SafeString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGZJREFUeNrs0AEBAAAEAzD073w92CKsk9RnU88JECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgIALVgABBgBVtgN9LAL2xAAAAABJRU5ErkJggg==');
});

Handlebars.registerHelper('_plural', function(num, formsJSONStr) {
	var processor = qst.l10n.plural.processors[qst.language] || qst.l10n.plural.processors['en'],
		phr = processor(num, Handlebars.helpers._(formsJSONStr, 'plural'))

	return new Handlebars.SafeString(phr);
});


/**
 * Helper timegap Handlebars 
 * sample {{_timegap 12312312}}
 */
Handlebars.registerHelper('_timegap', function(timestamp) {
	timestamp*=1000;
	var incomingDate = new Date(timestamp);
	today = new Date();
	
	var delta = today-incomingDate;
	
	var yD = parseInt(delta / 1000 / 60 / 60/ 24 / 365 );
	var dD = parseInt(delta / 1000 / 60 / 60/ 24 );
	var hD = parseInt(delta / 1000 / 60/ 60 );
	var mD = parseInt(delta / 1000 / 60 );
	var sD = parseInt(delta / 1000 );
	
	
	if (sD<60) {
		return "< 1"+Handlebars.helpers._("m", 'time').toString();
	} else if (mD<60) {
		return mD+Handlebars.helpers._("m", 'time').toString();
	} else if (hD<24) {
		return hD+Handlebars.helpers._("h", 'time').toString();
	} else if (dD<365) {
		return dD+Handlebars.helpers._("d", 'time').toString();;
	} else {
		return yD+Handlebars.helpers._("y", 'time').toString();;
	}
	
	return Handlebars.helpers._("long time", 'time').toString();;
});



// equal if
Handlebars.registerHelper('ifEq', function(v1, v2, options) {
  if(v1 == v2) {
	return options.fn(this);
  }
  return options.inverse(this);
});

// 3 or if
Handlebars.registerHelper('ifOR', function(v1, v2, v3, options) {
  if(v1 || v2 || v3) {
	return options.fn(this);
  }
  return options.inverse(this);
});


/**
 * Helper <tag> wrap Handlebars 
 */
Handlebars.registerHelper('_tagWrap', function(str, sub_string, tag) {
	if(!str) return '';
	if(!sub_string) return str;

	var re = new RegExp(sub_string, 'gi'),
		str = str.replace(re, function(match){
				return '<'+tag+'>'+match+'</'+tag+'>';
		});

	return new Handlebars.SafeString(str);
});

/**
 * Helper for clear mentions for Handlebars 
 */
Handlebars.registerHelper('_uncache', function(url) {
	return new Handlebars.SafeString(url + '?r=' + Math.round(Math.random()*900000000));
});


/**
* 10 000 000
**/
Handlebars.registerHelper('_number_format', function(num) {
	if(!num) {
		num = 0;
	}
	num+='';
	var formated_num = '',
		l = num.length;
	for (var i = l - 1; i >= 0; i--) {
		if((l - 1 - i)%3 === 0) {
			formated_num = num.charAt(i) + '&nbsp;' + formated_num;
		} else {
			formated_num = num.charAt(i) + formated_num;
		}
	};
	return new Handlebars.SafeString(formated_num);
});
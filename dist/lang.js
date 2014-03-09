;(function($){

	var labels = {},
		currentLang = 'en';

	var langApi = {

		get: function(key, lang){

			if (!lang) { lang = currentLang; }
			return labels[key] ? (labels[key][lang] ? labels[key][lang] : key) : key;

		},

		setLabel: function(key, label, lang){

			if (!labels[key]) { labels[key] = {}; }
			if (!lang) { lang = currentLang; }
			labels[key][lang] = label;
			return langApi;

		},

		setLang: function(lang){

			currentLang = lang ? lang : 'en';
			return langApi;

		},

		getLang: function(){
			return currentLang;
		},

		importLabels: function(labelData){

			labels = $.extend(labels, labelData);
			return langApi;

		}

	};

	$.wk = $.wk || {};
	$.wk.lang = langApi;

})(jQuery || Zepto);
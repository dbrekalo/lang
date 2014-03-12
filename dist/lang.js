;(function(){

	var labels = {},
		currentLang = 'en';

	var langApi = {

		get: function(key, replaceParams, askedlang){

			var lang = askedlang || (typeof replaceParams === 'string' ? replaceParams : currentLang),
				replaceData = replaceParams && (replaceParams instanceof Array ? replaceParams : null),
				label = labels[key] ? (labels[key][lang] ? labels[key][lang] : key) : key;

			if (replaceData){
				for (var i = 0; i < replaceData.length; i++) {
					label = label.replace('{'+ (i+1) +'}', replaceData[i] );
				}
			}

			return label;

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

		importLabels: function(labelsToImport){

			if (!labelsToImport){ return; }

			for (var key in labelsToImport) {
				labels[key] = labelsToImport[key];
			}

			return langApi;

		}

	};

	window.wk = window.wk || {};
	window.wk.lang = langApi;

})(window);
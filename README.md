#Lang

Javascript module for easy language labels managment

##Usage
```javascript
app.langApi.importLabels({

	'confirm_label': {en: 'Confirm', hr: 'Potvrdi'},
	'cancel_label': {en: 'Cancel', hr: 'Odustani'}

}).setLang('en');

app.langApi.setLabel('foo', 'bar', 'en');
app.langApi.setLang('en');

console.log(app.lang('confirm_label'));
```

##Installation

After including library file it is recommend to alias and bring library (that is initialy in $.wk.lang namespace) to your desired namespace.
 ```javascript
 app.langApi = $.wk.lang;
 app.lang = app.langApi.get;
```


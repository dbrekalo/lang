#Lang

Javascript module for easy language labels managment

##Usage
```javascript
app.langApi.importLabels({

	'confirm_label': {en: 'Confirm', hr: 'Potvrdi'},
	'cancel_label': {en: 'Cancel', hr: 'Odustani'},
	'hello': {en: 'Say {1} to {2}', hr: 'Reci {1} {2}'}

}).setLang('en');

app.langApi.setLabel('foo', 'bar', 'en');
app.langApi.setLang('en');

console.log(app.lang('confirm_label')); // outputs "Confirm"
console.log(app.lang('confirm_label', 'hr')); // outputs 'Potvrdi'

console.log(app.lang('hello', ['hi', 'Johnny'])); // outputs 'Say hi to Johnny'
console.log(app.lang('hello', ['hi', 'Johnny'], 'hr')); // outputs 'Reci hi Johnny'
```

##Installation

After including library file it is recommend to alias and bring library (that is initialy in window.wk.lang namespace) to your desired namespace.
 ```javascript
 app.langApi = window.wk.lang;
 app.lang = app.langApi.get;
```


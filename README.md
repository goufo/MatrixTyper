MatrixTyper
===========
## DEMO
http://www.goufo.co.il/MatrixTyper/

##How to use MatrixTyper :

1. Include jQuery. (http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js)
2. Include matrix.js

##Java Script 
```javascript
$('h1').matrixtype({
  text: [
    'Lorem Ipsum is simply dummy text',
		'Dummy text ever since the 1500s',
		'Lorem Ipsum is not simply random text',
		'There are many variations of passages of Lorem Ipsum available'
	]
});
```
##With Options
```javascript
$('h1').matrixtype({
  text: [
    'Lorem Ipsum is simply dummy text',
		'Dummy text ever since the 1500s',
		'Lorem Ipsum is not simply random text',
		'There are many variations of passages of Lorem Ipsum available'
	],
  speed: 50, //Animation speed
  delay: 500, //Delay between matrix text to plain text
  pause: 5000 //Delay between plain text to matrix text
});
```

==License==

MatrixTyper is licensed under the WTFPL License

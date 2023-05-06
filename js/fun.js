function ecoin(a,b) {
return a + b

}

var x = ecoin(45,3);

console.log(x)
//console.log(ecoin(45,36))


var welcom =  function (a,b, op){
	switch (op) {
		case "+":
			return a+b
			break;
		case "-":
			return a-b
			break;
		case "*":
			return a*b
			break;
		case "/":
			return a/b
			break;
		default:
			return -1
			break;
	}
}

//console.log(typeof welcom)
console.log(welcom(25,6,"+"))
console.log(welcom(25,6,"-"))

var t = function (a) {
	return a*100;
}

console.log(t(5));

(function (a) {
	console.log(a*100)
})(3)
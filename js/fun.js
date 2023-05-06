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
/*console.log(welcom(25,6,"+"))
console.log(welcom(25,6,"-"))

var t = function (a) {
	return a*100;
}

console.log(t(5));

(function (a) {
	console.log(a*100)
})(3)

//b callback
function ecoin2(a,b){
    console.log( b())
}
var c = function () {
	return 100
}
ecoin2(14,c())
*/
function test(t,fn){
	return fn(t)
}

var tab = [5,3,6,12]


test(tab,function (tab) {
	var tab2 = new Array()
	for(var i = 0 ; i<tab.length;i++){
         tab2[i] = tab[i]*2
	}
	console.log(tab2)
})

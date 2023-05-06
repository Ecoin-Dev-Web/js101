/*function ecoin(a,b) {
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
*/
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
/*function test(t,fn){
	return fn(t)
}

var tab = [5,3,6,12]


test(tab,function (tab) {
	var tab2 = new Array()
	for(var i = 0 ; i<tab.length;i++){
         tab2[i] = tab[i]*2
	}
	console.log(tab2)
})*/


var student = new Object()

student = {
	rest:0,
	note:{},
	sum:0,
	moyen : function () {
		for (notes in this.note) {
			this.rest = this.rest + this.note[notes][0]*this.note[notes][1]
			this.sum = this.sum +this.note[notes][1]
		}
		return this.rest/this.sum
	}
}
var notes_modules = new Object()
var numModules  = parseInt(prompt("please enter num of modules :"))
var modules  = new Array()
var notes  = new Array()
var coefs  = new Array()
var i = 0
do{
    modules[i] = prompt("please enter module num :"+i)
    notes[i] = parseInt(prompt("please enter note  :"))
    coefs[i] = parseInt(prompt("please enter coef  :"))

   i++
}while(i<=numModules-1)

for(var i = 0 ; i < modules.length; i++){
	notes_modules[modules[i]] = [notes[i],coefs[i]]
}
 

console.log(notes_modules)

student.note = notes_modules
console.log(student.moyen())

//[5,3,6,12,45,36]



var ecoin = 25
var note = 16.66  // number  16 bit   32 bit 
var coef = 5   //  32bits

//alert(ecoin)
//document.write(note)

/*console.log(typeof coef)
console.log(typeof note)
var str = "Welcom to Ecoin"  // String
console.log(str)
console.log(typeof str)*/


/*var isAdmin = true  // bool  false
console.log(typeof isAdmin)
var listNotes1 = [15,19,12,20,14]
var listNotes4 = []
	listNotes4[0] = 15
	listNotes4[1] = 19
	listNotes4[2] = 12
	listNotes4[3] = 20
	listNotes4[4] = 14

var listNotes2 = new Array(15,19,12,20,14)
var listNotes3 = new Array()

listNotes3[0] = 15
listNotes3[1] = 19
listNotes3[2] = 12
listNotes3[3] = 20
listNotes3[4] = 14

console.log(typeof listNotes4)


var imagesList = ["img/001.png","img/002.png","img/003.png","img/004.png",]

console.log(imagesList[2])

var schoolInfo = [
					["021365485","02354864"],  //0
					["065482255","06563285"],  //1 
					["077595225","0754554545"] //2
				]

console.log(schoolInfo[1][1])
*/
var articles = [
				["my new title1","img/001.png","boduy of new article 1"],
				["my new title2","img/002.png","boduy of new article 2"],
				["my new title3","img/003.png","boduy of new article 3"]
	]

/*console.log(articles[1][1])

console.log(typeof articles)

var student  = new Object()
student.nom = "Khaled"
student.age = 25
console.log(student)

var student2 = {
	nom:"Ali",
	age:25,
	email:"ahmed@gmail.com",
	tel:{mobile:"06656656",fix:"0212154545"},
	isAdmin:true,
	notes:[12,15,18,12]
}

console.log(student2)

document.writeln("<h3>You Name is :"+ student2.nom+"</h3>")

*/

//operation
//+ - * / %  ++  --
var x = 25
y = 6 

console.log(x)
  x = x + 6
  x+=6
 x = x - 6 // x-=6
 x = x * 6 // x*=6
 x = x / 6 // x/=6


y = y + 1  // y++  incrimentation
y = y - 1  // y--  incrimentation
 /* console.log(y)

  var a = 12
  console.log(a--)  // 12 pre
  console.log(a) // 11
  console.log(--a) //10
 console.log("================")
  var c1 = 15
  res = ++c1 +9*/
  // console.log(c1) //16
  // console.log(res)  // 25 


//comparition

  // <     >   == <=   >=  !=  ! ===

   var a = 15,b = 12,c = 3

  //console.log(a!=b)  // false

   var isAdmin = true
  //console.log(!isAdmin)

   //relation
   //console.log(a > b  c<2)

 /*  and ==>  &&
   or ==>  ||

   true && true = true
   true && false = false
   false && true = false
   false && false = false

   true || true = true
   true || false = true
   false || true = true
   false || false = false*/
// condition
/*   var x = 100

 if(x>10){
   console.log("yes is true")
 }else{
 	 console.log("No is false")
 }

 var nom = prompt("please enter your name :")

console.log(nom)
*/
//cal  + - * /
/*
var num1 = prompt("Enter Num1")
num1 = parseInt(num1)
var num2 = prompt("Enter Num2")
num2 = parseInt(num2)
var op = prompt("Enter op + - * /")
if (op == "+") {
	console.log(num1 + num2)
}else if(op=="-"){
	console.log(num1 - num2)
 }else if(op=="*"){
	console.log(num1 * num2)
 }else if(op=="/"){
	console.log(num1 / num2)
 }else{
 	console.log('No operation')
 }


var x = 45

x = 25*/

/*const USER = "admin"
const PASSWORD = "123456"

var u = prompt("please enter UserName")
var p = prompt("please enter Password")

if (u==USER && p == PASSWORD) {
	document.write('<div class="ok">Welcom to My admin</div>')
}else{
	document.write('<div class="error">Error</div>')
}
*/

// shot if 
// switch
// loop while do while for for in 
// foreach  
//function
//var l = prompt("please first char  for var")
var lang 

/*   if(l == "$")
   	lang = "php"
   else lang = "javascript"

*/

/*var lang = (l=="$")? "php":"javascript"
   console.log(lang)
*/


/*var num1 = prompt("Enter Num1")
num1 = parseInt(num1)
var num2 = prompt("Enter Num2")
num2 = parseInt(num2)
var op = prompt("Enter op + - * /")

switch (op) {
	case "+":
		console.log(num1 + num2)
		break;
	case "-":
		console.log(num1 - num2)
		break;
	case "*":
		console.log(num1 * num2)
		break;
	case "/":
		console.log(num1 / num2)
		break;			
	default:
		console.log('No operation')
		break;
}*/

/*var color = prompt("choice your color ?")

switch (color) {
	case "green":
		document.write("<body class='green'></body>")
		break;
	case "red":
		document.write("<body class='red'></body>")
		break;
	default:
		document.write("<body></body>")
		break;
}
*/


/*var i = 100

while (i<=100) {
	console.log(i)
i++
}



var j = 100

while (j>=1) {
	console.log(j)
j--
}*/

/*var k = 21
do{
 console.log(k)
 k++
}while(k<=20)
*/

/*var str = "Ecoin"
console.log(str.length)

var i = 0
while (i<str.length) {
	console.log(str[i])
	i++
}

var t= ["php","kotlin","java","rust","go","python"]
console.log(t.length)
var j = 0
while (j<t.length) {
	console.log(t[j]+"====> "+t[j].length)
	j++
}
*/


/*for(var i = 0; i <= 10; i++){
	console.log(i)
}

var i = 0
for(; ;){
	if (i > 10) {
		break
	}
	console.log(i)
	 i++
}*/

var t= ["php","kotlin","java","rust","go","python"]

/*for (v in t) {
	console.log(t[v])
}*/


/*for (ecoin of t) {
	console.log(ecoin)
}*/

//[45,36,9,8,78,25,12]

//pair
//impair
/*var t = new Array()
var pair = new Array()
var impair = new Array()
var i = 0
var cpt = parseInt(prompt("please enter num of Array :"))
do{
   t[i] = parseInt(prompt("please enter num  :"))
   i++
}while(i<=cpt-1)

console.log(t)
var k = 0,m = 0
for(var j = 0; j < t.length; j++){
	   if (t[j]%2==0) {
	   	pair[k] = t[j]
	   	k++
	   }else {
	   impair[m] = t[j]
	   	m++
	   }
}

console.log(pair)
console.log(impair)*/

// number prime

//  5 2 3 4^prime
// 6 2

/*var num = parseInt(prompt("please enter num  :"))

var isPrime = true;*/

//15   2  -----> 14
// 2 3 4 5 6 7 8 9 10 11 12 13 14
// 7 5 3 3 2 1 1

/*for(i = 2 ;i<=(num/2);i++){
	if(num%i==0){
		isPrime = false
		break
	}
}
if(isPrime) 
	console.log(`${num} is Prime`)
*/


/*var t  = new Array()
var p  = new Array()
var np = new Array()
var i = 0

var cpt = parseInt(prompt("please enter num of Array :"))
do{
   t[i] = parseInt(prompt("please enter num  :"))
   i++
}while(i<=cpt-1)

// 15 13 36 5 9 7
var k = 0,m = 0
for (var j = 0; j < t.length; j++) {
var isPrime = true;
	for(i = 2 ;i<=(t[j]/2);i++){
	if(t[j]%i==0){
		isPrime = false
		break
	} //end if
	
	} //end for
if (isPrime) {
		p[k] = t[j]
		k++
	}else {
		np[m] = t[j]
		m++
	}
	
}

console.log(p)
console.log(np)*/

 var numbers ,x
 numbers = [1, 1, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 1]
 x = 1

/*  var count = 0;
	  for (var i = 0; i < numbers.length; i++) {
	    if (numbers[i] == x){
	      count++
	    }
	  }
console.log(count)*/
  numbers = [1, 1, 3, 1, 4, 5, 6, 1, 3, 8, 9, 10, 11, 1, 12, 1];
  //dup       0  1 2 3
 //            1  3

             //  tour array T
             //  dup if ti == ti+1    ti in array dup  1 3

/* var dup = new Array()
 var count = 0;
 var k = 0,d= 0
for(var i = 0; i < numbers.length; i++){
	if(t[i]==t[k+1]){
      dup[d] = t[i]
      k++;d++
	}
      for(var j = 0; j < ; j++){
      	   
      }
        if (t[i]==t[j]) {
        	// statement
        }
    if(conter>1){
    	console.log("duplicated")
    }
	
}*/



function ecoin(a,b) {
console.log(a + b);

}

ecoin(45,3);

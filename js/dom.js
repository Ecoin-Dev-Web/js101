var bx = document.getElementById("box")

console.log(bx)

var mycl = document.getElementsByClassName("cl")
console.log(mycl[0])

var mylist = document.getElementsByTagName("li")
console.log(mylist)
/*bx.innerText = "Welcom to Ecoin"
bx.innerHTML = "<i>Welcom to WEB</i>"*/
var mytitle = document.getElementById("t")
console.log(mytitle)
var parent  = mytitle.parentNode
console.log(parent)
parent.removeChild(mytitle)
var myNode = document.createElement("h4")
myNode.innerText = "This My new Node"
bx.appendChild(myNode)

// attribute
var mylink = document.getElementById("gl")
mylink.setAttribute("ecoin", "Web")
mylink.setAttribute("href", "https://www.google.com")
mylink.removeAttribute("ecoin")
console.log(mylink.getAttribute("href"))
bx.style.backgroundColor="blue"
bx.style.color = "#fff"

mycl[0].style.backgroundColor = 'red'


mycl[0].onclick = function () {
	alert("fdsmlkqjfmlksjfmlk")
}


var btn = document.getElementsByTagName('button')
var nom = document.getElementById("name")
var spanTx = document.getElementById("tx")
btn[0].onclick = function () {
	
	console.log(nom.value)
}

//num1 = parseInt(nom.value)
nom.onkeyup = function () {
	
	console.log(nom.value)
	console.log(nom.value.length)
	spanTx.innerText = nom.value.length
}





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
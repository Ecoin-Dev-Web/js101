var btnmb = document.getElementById("mb")
var btnmc = document.getElementById("mc")
var btnha = document.getElementById("ha")
var boxA = document.getElementsByClassName("a")
var boxB = document.getElementsByClassName("b")
var boxC = document.getElementsByClassName("c")

btnmb.onclick = function () {
	boxA[0].style.top = "100px"
	boxA[0].style.left = "200px"
	boxA[0].style.zIndex = "100"
}

btnmc.onclick = function () {
	boxB[0].style.top = "100px"
	boxB[0].style.left = "300px"
	boxB[0].style.zIndex = "100"
}

btnha.onclick = function () {
	boxA[0].style.display = "none"
	boxB[0].style.display = "none"
	boxC[0].style.display = "none"
}
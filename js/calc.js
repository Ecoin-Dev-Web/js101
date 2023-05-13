var num = document.getElementsByTagName("input")
var btn = document.getElementsByTagName("button")
var result = document.getElementById("result")

btn[0].onclick = function () {
	 result.innerText = parseInt(num[0].value) + parseInt(num[1].value) 
}

btn[1].onclick = function () {
	 result.innerText = parseInt(num[0].value) - parseInt(num[1].value) 
}

btn[2].onclick = function () {
	 result.innerText = parseInt(num[0].value) * parseInt(num[1].value)
}



btn[3].onclick = function () {
	if(num[1].value !=0)
	 result.innerText = parseInt(num[0].value) / parseInt(num[1].value) 
	else alert("Div by Zero")
}
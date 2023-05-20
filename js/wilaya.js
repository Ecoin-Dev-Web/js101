var w = document.getElementById("wilaya")
var list = {'16':'Alger','31':'Oran','9':'Blida','10':'Buira'}

var com = {
	'16':['alger center','kouba','hidra'],
	'31':['	Gdyel','Bir El Djir','Arzew'],
	'9':['Chebli','El Affroun','Benkhelil'],
	'10':['Aïn Bessem','Ahl El Ksar','Aïn El Turc']
}

w.onchange = function () {
	//alert(list[w.value])
	//document.getElementById("box2").innerText = list[w.value]
	document.getElementById("box2").innerText = ""
	for (var i = 0 ;i<com[w.value].length;i++) {
		var el = document.createElement('li')
	el.innerText = com[w.value][i]
	
	document.getElementById("box2").appendChild(el)
	}

	


	//var c =  com[w.value]
	//document.getElementById("box2").innerText =

}
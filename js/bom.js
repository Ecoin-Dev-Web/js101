/*setTimeout(function () {
   location.href = 'https://www.google.com'
},5000)*/

var btn = document.querySelector("button")
btn.onclick = function () {
	var ip = document.querySelector('input[type=text]')
	//console.log(ip.value.length)
	var cpt = ip.value.length
	//var sec= cpt 15

var handler = 	setInterval(function () {
  // location.href = 'https://www.google.com'
		cpt--
		if (cpt==0) {
			clearInterval(handler)
			location.href = "https://www.google.com"
		}
	    	 
        document.querySelector('.counter').innerText = cpt
},1000)
	 
	



//

}
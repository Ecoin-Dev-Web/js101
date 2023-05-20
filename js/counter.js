var pl = document.getElementById("plus")

pl.onclick = function () {
    cpt = 0
    ch = true

    var h = setInterval(function () {
    	var bx = document.querySelector(".box")
    	bx.innerText = cpt
    	cpt++
    	if (ch) {
    		bx.style.backgroundColor = 'red'
    		ch= !ch
    	}else{
    		bx.style.backgroundColor = 'green'
    		ch= !ch
    	}
    	if (cpt>20) {
    		clearInterval(h)
    	}
    }, 500)

	
}
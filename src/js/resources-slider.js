let leftBtn = document.getElementById('resources-slider_left')
let rightBtn = document.getElementById('resources-slider_right')
let resourcesCount = 0
let resourcesWigth = 0


leftBtn.addEventListener('click', function() {
	moveLeft();
})

rightBtn.addEventListener('click', function() {
	moveRight();
})

function resourcesWgh() {
	if (document.body.clientWidth < 576) {
	    resourcesWigth = 337
    }
	else if (document.body.clientWidth < 992) {
	    resourcesWigth = 476
    }
    else {
    	resourcesWigth = 958
    }
}

function moveLeft() {
	resourcesWgh()
	resourcesCount -= 1
	document.querySelectorAll('.resources-slider').forEach(el => {
		el.style.transform = 'translate(' + - resourcesWigth * resourcesCount + 'px)'
	})
	document.querySelectorAll('.resources-point').forEach(element => {
		element.style.backgroundColor = '#D1D6E3'
	})
	
	if (resourcesCount < 0) {
		leftBtn.style.display = 'none'
		document.getElementById('resources-point_1').style.backgroundColor = '#5283FF'
	}
	else {
		rightBtn.style.display = 'block'
		document.getElementById('resources-point_2').style.backgroundColor = '#5283FF'
	}
}

function moveRight() {
	resourcesWgh()
	resourcesCount += 1
	document.querySelectorAll('.resources-slider').forEach(el => {
		el.style.transform = 'translate(' + - resourcesWigth * resourcesCount + 'px)'
	})
		document.querySelectorAll('.resources-point').forEach(element => {
		element.style.backgroundColor = '#D1D6E3'
	})
	

	if (resourcesCount > 0) {
		rightBtn.style.display = 'none'
		document.getElementById('resources-point_3').style.backgroundColor = '#5283FF'
	}
	else {
		leftBtn.style.display = 'block'
		document.getElementById('resources-point_2').style.backgroundColor = '#5283FF'
	}
}
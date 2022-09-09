let chat = document.getElementsByClassName('comments-chat')
let count = 1
let points = document.getElementsByClassName('comments-point')

timer()

function timer() {
	setInterval(move, 3000)
}

function move() {
	let countPx = 'translate(' + count * -488 + 'px)'
	document.getElementById('comments-chats').style.transform = countPx
	if (count > 0) {
		chat[count - 1].style.opacity = '.4'
	    points[count - 1].style.backgroundColor = '#D1D6E3'
	}
	else {
		points[7].style.backgroundColor = '#D1D6E3'
		chat[7].style.opacity = '.4'
	}

	points[count].style.backgroundColor = '#5283FF'
	chat[count].style.opacity = '1'
	if (count < 7) {
		count +=1
	}
	else
		count = 0
}
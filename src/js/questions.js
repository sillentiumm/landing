
document.querySelectorAll('.questions-item_arrow_line').forEach(el => {
	el.addEventListener('click', function(){
		openItem(el);
	})
})
document.querySelectorAll('.questions-item_arrow_reverse').forEach(el => {
	el.addEventListener('click', function() {
	})
})

function openItem(el) {
	if (!(el.children[0].classList.contains('questions-item_arrow_reverse'))) {
		closeItem()
	}
	el.children[0].classList.toggle('questions-item_arrow_reverse')
    el.parentElement.children[1].classList.toggle('questions-item_title_hide')
    el.parentElement.children[2].classList.toggle('questions-item_descr_hide')
}

function closeItem(el) {
	document.querySelectorAll('.questions-item_arrow_line').forEach(el => {
		el.children[0].classList.remove('questions-item_arrow_reverse')
		el.parentElement.children[1].classList.remove('questions-item_title_hide')
		el.parentElement.children[2].classList.remove('questions-item_descr_hide')
	})	
}
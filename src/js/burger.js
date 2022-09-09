const popup = document.getElementById('popup')
const line = document.querySelectorAll('.header-burger_line')
const burger = document.querySelectorAll('.header-burger')
const nav = document.getElementById('header-nav')
const body = document.body

burger.forEach(el => {
    el.addEventListener('click', function() {
        burg()
    })
})
nav.addEventListener('click', function() {
    burg()
})

function burg() {
    popup.classList.toggle('popup-on')
    body.classList.toggle('noscrol')
}
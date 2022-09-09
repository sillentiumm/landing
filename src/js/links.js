document.querySelectorAll(".header-contact").forEach( el => {
	el.addEventListener('click', function() {
		if(el.id == "link-facebook" || el.id == "link-facebook2")  {
			document.location.href = "https://ru-ru.facebook.com/"
		}
		else if (el.id == "link-twitter" || el.id == "link-twitter2") {
			document.location.href = "https://twitter.com/?lang=ru"
		}
		else if(el.id == "link-telegram" || el.id == "link-telegram2") {
			document.location.href = "https://web.telegram.org/k/"
		}
		else if(el.id == "link-messenger" || el.id == "link-messenger2") {
			document.location.href = "https://www.messenger.com/"
		}  
	})
})



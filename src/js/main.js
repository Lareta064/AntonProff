$(document).ready(function(){
	/*===== HEADER GAMBURGER===========*/
	const menuToggle = document.querySelectorAll('.menu-toggle');
	const mobMenu = document.querySelector('.header-menu ');
	const mobMenuItem = document.querySelectorAll('.header-menu li');
	const bodyEl = document.body;

	if (menuToggle) {
		for(let item of menuToggle){
			item.addEventListener('click', function () {
				if (this.classList.contains('active')) {
					this.classList.remove('active');
					mobMenu.classList.remove('active');
					bodyEl.classList.remove('noscroll');
					
					for (let item of mobMenuItem) {		
						item.classList.remove('animate');
					}

				} else {
					this.classList.add('active');
					mobMenu.classList.add('active');
					bodyEl.classList.add('noscroll');
					let delay = 0;
					for (let item of mobMenuItem) {
						setTimeout(function () {
							item.classList.add('animate');
						}, 50 + delay)
						delay += 150;
					}

				}
			});
			window.addEventListener('resize', function () {
				item.classList.remove('active');
				mobMenu.classList.remove('active');
				bodyEl.classList.remove('noscroll');
				let delay = 0;
					for (let item of mobMenuItem) {
						setTimeout(function () {
							item.classList.remove('animate');
						}, 50 + delay)
						delay += 150;
					}
				
			});
		}
	}


})
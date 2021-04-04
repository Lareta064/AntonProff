$(document).ready(function(){
	/*===== HEADER GAMBURGER===========*/
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('.header-menu ');
	const mobMenuItem = document.querySelectorAll('.header-menu li');
	const bodyEl = document.body;

	if (menuToggle) {
		//click for gamburger
		menuToggle.addEventListener('click', function () {
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
					delay += 100;
				}

			}
		});
		//resize window
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
		//click for menu
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			// mobMenu.classList.remove('active');
			bodyEl.classList.remove('noscroll');
			menuToggle.classList.remove('active');	
			for (let item of mobMenuItem) {						
				item.classList.remove('animate');
			}
		});
	}
	//fix header
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 60){
			$('.header-menu ').addClass('fixed');

		}
		else{
			$('.header-menu ').removeClass('fixed');
		}
	})
	// slider
	var docLeftArrow = $('#doc-left');
	var docRightArrow = $('#doc-right');
	$('.docs-slider ').slick({
		slidesToShow:1,
		centerMode: true,
		variableWidth: true,
		infinite: true,
		speed:1000,
		nextArrow: docLeftArrow,
		prevArrow: docRightArrow,
		// centerPadding: '60px'

	})
	var slider = $('.docs-slider');
	$('.sl-count__total').text( slider.slick("getSlick").slideCount);
	$(".docs-slider").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current").text(currentSlide + 1);
	});

	// fancybox
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

})
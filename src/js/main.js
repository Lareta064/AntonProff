$(document).ready(function(){
	/*===== HEADER GAMBURGER===========*/
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('.header-menu ');
	const overlayEl = document.querySelector('#overlay');
	const mobMenuItem = document.querySelectorAll('.header-menu li');
	const bodyEl = document.body;

	if (menuToggle) {
		//click for gamburger
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				mobMenu.classList.remove('active');
				overlayEl.classList.remove('active');
				bodyEl.classList.remove('noscroll');
				
				for (let item of mobMenuItem) {						
					item.classList.remove('animate');
				}

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				bodyEl.classList.add('noscroll');
				overlayEl.classList.add('active');
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
			menuToggle.classList.remove('active');
			mobMenu.classList.remove('active');
			overlayEl.classList.remove('active');
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
			overlayEl.classList.remove('active');	
			for (let item of mobMenuItem) {						
				item.classList.remove('animate');
			}
		});
		//click for overlay
		overlayEl.addEventListener('click', function () {
			this.classList.remove('active');
			// mobMenu.classList.remove('active');
			bodyEl.classList.remove('noscroll');
			menuToggle.classList.remove('active');
			mobMenu.classList.remove('active');	
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
	//modal
	const modalTarget = document.querySelectorAll('[data-target="modal"]');
	const modalWrapper = document.querySelectorAll('.modal-wrapper');
	
	if(modalTarget){
		const modalWrapper = document.querySelectorAll('.modal-wrapper');
		for(let item of modalTarget){
			
			item.addEventListener('click', function(){
				const itemTarget = item.getAttribute('data-modal');

				for(let modal of modalWrapper){
					const modalData = modal.getAttribute('data-modal');
					if( modalData == itemTarget){
						modal.classList.add('show-modal');
					}
				}
				
			})
		}
	}
	
	if(modalWrapper){
		
		for(let item of modalWrapper){
			const closeModalBtn = item.querySelector('.modal-close');
			const modalOverlay = item.querySelector('.modal-overlay');
			closeModalBtn.addEventListener('click', function(){
				item.classList.remove('show-modal');
			});
			modalOverlay.addEventListener('click', function(){
				item.classList.remove('show-modal');
			})
		}
	}
	// phone mask
	// маска для телефона
	$(".phone").mask("+7(999)999-99-99");
	$.fn.setCursorPosition = function (pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input.phone').click(function () {
		$(this).setCursorPosition(3); // set position number
	});

	
})
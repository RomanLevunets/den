$(document).ready(function () {

	//sliders
	$('.clients').owlCarousel({
		items: 4,
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},
			450:{
				items: 2
			},

			800: {
				items: 3
			},

			1100: {
				items: 4
			}
		}
	});

	$('.des-people').owlCarousel({
		items: 4,
		dots: true,
		loop: true,
		nav: false,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},
			450:{
				items: 2
			},

			800: {
				items: 3
			},

			1100: {
				items: 4
			}
		}
	});


	$('.people-content, .reviews').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		smartSpeed: 700
	
	});


	$('.block-slider-item').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		smartSpeed: 700
	
	});


	//jquery-validation

	$('#form-send').validate({
	rules:{
         	name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,
            },
      	},
         messages:{
            name:{
            	minlength: "Имя должно состоять минимум из 4-х символов",
                required: "Это поле обязательно для заполнения",
            },
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Ведите правильный Email адресс",
            },
       },
	});

		//anchours
	$(".menu-item-meth").click(function() {
		    var elementClick = $(this).attr("href");
		    var destination = $(elementClick).offset().top;
		    jQuery("html:not(:animated),body:not(:animated)").animate({
		      scrollTop: destination
		    }, 1300);
		    return false;
  		});


		//preloader
	var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};


		//select desinger
		$('.des-people-item').click(function(){
			event.preventDefault();
			if (!$(this).hasClass('active')) {
	    		$('.des-people-item').removeClass('active');
	    		$(this).addClass('active');
	    		$('.des-order').css('background', '#C18E32');
	    	}
		});

		//head bg-slider
		$('.dots-item').click(function(){
			event.preventDefault();
			if (!$(this).hasClass('active')) {
	    		$('.dots-item').removeClass('active');
	    		$(this).addClass('active');
	    	}
		});

		//tabs
		$('.tabs-item-meth').click(function(){
			event.preventDefault();
			if (!$(this).hasClass('active')) {
	    		$('.tabs-item-meth').removeClass('active');
	    		$(this).addClass('active');
	    	}
		});

		//top slide img

		$('.dots-item:nth-child(1)').click(function(){
			$('.section-header').css({
				'background-image' : 'url(img/home.jpg)',
				'background-repeat' : 'no-repeat',
				'background-size' : 'cover',
			});
		});

		$('.dots-item:nth-child(2)').click(function(){
			$('.section-header').css({
				'background' : '#636363',
				'background-repeat' : 'no-repeat',
				'background-size' : 'cover',
			});
		});

		$('.dots-item:nth-child(3)').click(function(){
			$('.section-header').css({
				'background' : '#A57216',
				'background-repeat' : 'no-repeat',
				'background-size' : 'cover',
			});

		});


});

$(document).ready(function() {


    //fixed arrow go to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.goTop').css({ 'display': 'block' });
        } else {
            $('.goTop').css({ 'display': 'none' });
        }
    });
    //feedback
    $('.over-header-tell').magnificPopup();


    //search
    $('.icon-item:last-child').click(function () {
        event.preventDefault();
        $('.form-search-item').toggleClass('active');
    });

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
            450: {
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
            450: {
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
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                minlength: "Имя должно состоять минимум из 4-х символов",
                required: "Это поле обязательно для заполнения",
            },
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Ведите правильный Email адресс",
            },
        },
    });

    //anchours
    $('.menu-item-meth, .goTop').click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1300);
        return false;
    });


    //preloader


    //select desinger
    $('.des-people-item').click(function() {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.des-people-item').removeClass('active');
            $(this).addClass('active');
            $('.des-order').css('background', '#C18E32');
        }
    });

    //head bg-slider
    $('.dots-item').click(function() {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.dots-item').removeClass('active');
            $(this).addClass('active');
        }
    });

    //tabs
    $('.tabs-item-meth').click(function() {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.tabs-item-meth').removeClass('active');
            $(this).addClass('active');
        }
    });

    //top slide img

    $('.dots-item:nth-child(1)').click(function() {
        $('.section-header').css({
            'background-image': 'url(img/home.jpg)',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
        });
    });

    $('.dots-item:nth-child(2)').click(function() {
        $('.section-header').css({
            'background': '#636363',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
        });
    });

    $('.dots-item:nth-child(3)').click(function() {
        $('.section-header').css({
            'background': '#A57216',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
        });

    });


    $('.project-hover-icon').click(function() {
        $(this).toggleClass('active');

    });

    //parallax
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);


    //animation
    (function($) {
        $.fn.animated = function(inEffect) {
            $(this).each(function() {
                var ths = $(this);
                ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        ths.addClass(inEffect).css("opacity", "1");
                    }
                }, {
                    offset: "90%"
                });

            });
        };
    })(jQuery);


    //deleted animation for mobile
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };

    if (!isMobile.any()) {
        $(".about").animated("slideInDown");
        $(".benone-right").animated("slideInRight");
        $(".benone-left").animated("slideInLeft");
        $(".stock-content").animated("bounceInUp");
        $(".des-people").animated("pulse");
        $(".services-item:nth-child(1)").animated("fadeInLeft");
        $(".services-item:nth-child(3)").animated("fadeInRight");
        $(".order-item:nth-child(1)").animated("fadeInRight");
        $(".order-item:nth-child(3)").animated("fadeInLeft");
        $(".price-table").animated("fadeInRight");
        $(".price-left").animated("fadeInLeft");
        $(".people-item").animated("rotateInUpLeft");
        $(".reviews-item").animated("rotateInUpRight");
        $(".curtains").animated("slideInDown");
        $(".block-slider-txt").animated("slideInUp");
        $(".projects").animated("zoomIn");
        $(".interior-item:odd").animated("fadeInRight");
        $(".interior-item:even").animated("fadeInLeft");
        $(".social-item:even").animated("slideInUp");
        $(".social-item:odd").animated("slideInDown");
        $(".clients").animated("slideInLeft");
        $(".form-send").animated("zoomIn");
        $(".footer-content-txt").animated("slideInRight");

    }





});

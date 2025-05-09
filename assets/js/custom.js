/*text rotate*/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('color-font');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    // css.innerHTML = ".color-font > .wrap { border-right: 3px solid;font-size:78px;line-height:70px;display:inline-block;}";
    document.body.appendChild(css);
};
/*text rotate*/

// Navigation Menu
$(function(){
    $(window).on('hashchange', function(e){
        $('.navbar-nav .nav-item .nav-link').on('click', function(e) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $(this).toggleClass('active');
        });
    });
   
   

	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $('.dropdown-submenu.active').removeClass('active');
          $(this).parents('.dropdown-menu > .dropdown-submenu').addClass('active');
          $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        $(this).next('.dropdown-menu').toggleClass('show');
        
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu.active').removeClass('active');
          $('.dropdown-submenu .show').removeClass('show');
        });

        if ($(this).next().hasClass('show') && $(window).width() > 1199) {
            $('.dropdown-menu.sub-menu.show')?.offset({ top: $('.dropdown-menu.show')?.offset()?.top });
            $('.dropdown-menu.sub-menu.level-3.show')?.offset({ top: $('.dropdown-menu.show')?.offset()?.top });

            var $level_1 =  $(this).parents('.dropdown-submenu').outerHeight() * $(this).parents('.dropdown-submenu').parents('.dropdown-menu').children().length + ($(this).parents('.dropdown-submenu').parents('.dropdown-menu').children().length > 0 ? 32: 0);
            var $level_2 = $(this).next().children().outerHeight() * $(this).next().children().length + ($(this).next().children().length > 0 ? 32 : 0) ;
            
            if($level_1 > $level_2){
                $(this).next().animate({height:$level_1}, 500);
                $(this).parents('.dropdown-submenu').parents('.dropdown-menu').animate({height:$level_1}, 0);
            }else if($level_1 < $level_2){
                $(this).parents('.dropdown-submenu').parents('.dropdown-menu').animate({height:$level_2}, 0);
            }
        }
        return false;
      });
});
//
/*slider effect*/
$(function () {

    var $status = $('.pagingInfo');
    var $slickElement = $('.testimonial-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)

        if (window.matchMedia('(max-width: 991px)').matches) {
            var i = (currentSlide ? currentSlide : 0) + 1;
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
        }
        $status.text(i + '/' + slick.slideCount);
    });


    $('.testimonial-slider').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        Infinity: true,
        autoplay: false,
        autoplayspeed: 4000,
        controls: true,
        prevArrow: '<span class="slick-prev"><img src="assets/images/prev-arrow.svg" width="48px" height="48px"></span>',
        nextArrow: '<span class="slick-next"><img src="assets/images/next-arrow.svg" width="48px" height="48px"></span>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
});
/*slider effect*/

$(function () {
    $('.logo-slider').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        Infinity: true,
        autoplay: true,
        autoplaySpeed: 1500,
        controls: false,
        prevArrow:  false,
        nextArrow:  false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]

    });
});

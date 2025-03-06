jQuery(document).ready(function ($) {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '">' + '0' + (index + 1) + "</div>";
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 5000,
        },
        effect: "fade",
        on: {
            init: function () {
                let activeSlide = $(".swiper-slide-active");
                animateSlideElements(activeSlide);
            },
            slideChangeTransitionStart: function () {
                $(".swiper-slide .slider-title, .swiper-slide .slider-subtitle, .swiper-slide .slider-cta")
                    .removeClass("opacity-100 translate-x-0")
                    .addClass("opacity-0 translate-x-10");
            },
            slideChangeTransitionEnd: function () {
                let activeSlide = $(".swiper-slide-active");
                animateSlideElements(activeSlide);
            },
        },
    });

    function animateSlideElements(slide) {
        if (!slide.length) return;

        setTimeout(() => {
            slide.find("h1").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
        }, 200);

        setTimeout(() => {
            slide.find("h2").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
        }, 400);

        setTimeout(() => {
            slide.find("a").removeClass("opacity-0 translate-x-10").addClass("opacity-100 translate-x-0");
        }, 600);
    }
    setTimeout(() => {
        let activeSlide = $(".swiper-slide-active");
        animateSlideElements(activeSlide);
    }, 500);

    function startCounter(counter) {
        let $counter = $(counter);
        let target = parseInt($counter.attr("data-target"));
        let count = 0;
        let increment = Math.ceil(target / 100);

        let interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                $counter.text(target.toLocaleString() + '+');
                clearInterval(interval);
            } else {
                $counter.text(count.toLocaleString() + '+');
            }
        }, 25);
    }

    function checkVisibility() {
        $(".counter").each(function () {
            let $this = $(this);
            let offsetTop = $this.offset().top;
            let windowHeight = $(window).height();
            let scrollTop = $(window).scrollTop();

            if (scrollTop + windowHeight > offsetTop && !$this.hasClass("counting")) {
                $this.addClass("counting");
                startCounter(this);
            }
        });
    }

    $(window).on("scroll", function () {
        checkVisibility();
    });

    checkVisibility();

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 3, // Desktop e tablets
            },
            0: {
                slidesPerView: 1, // Mobile
            }
        },
        on: {
            init: function () {
                updateSlideContent();
            },
            slideChangeTransitionEnd: function () {
                updateSlideContent();
            }
        }
    });

    function updateSlideContent() {
        $(".swiper-slide").removeClass("opacity-100").addClass("opacity-50");
        $(".swiper-slide-active").removeClass("opacity-50").addClass("opacity-100"); // Slide centralizado

        var activeSlide = $(".swiper-slide-active"); // Slide do meio

        var title = '';
        var link = '';
        var description = '';

        activeSlide.each(function () {
            title = $(this).data('title');
            link = $(this).data('link');
            description = $(this).data('description');
        });

        // Aplicando fade suave na troca do título, descrição e botão
        $("#model-title, #model-description, #model-link").fadeOut(200, function () {
            $("#model-title").text(title).fadeIn(200);
            $("#model-description").text(description).fadeIn(200);
            $("#model-link").attr("href", link).fadeIn(200);
        });
    }
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });
    $('.open-menu').on('click', function () {
        $('#mobileMenu').removeClass('-right-100').addClass('right-0')
    })
    $('#closeMenu').on('click', function () {
        $('#mobileMenu').removeClass('right-0').addClass('-right-100')
    })
    $('.menu-item a').on('click', function (e) {
        $('#mobileMenu').removeClass('right-0').addClass('-right-100')
    })
});  
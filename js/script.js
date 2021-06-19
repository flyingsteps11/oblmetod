$(document).ready(function () {
    document.addEventListener('scroll', () => {
        if (scrollY > 60) {
            const header = document.querySelector('header');
            header.style.background = "#7DC6EF";
            const border = document.querySelector('.header__wrapper');
            border.style.paddingBottom = "0";
            border.style.borderBottom = "none";
        } else {
            const header = document.querySelector('header');
            header.style.background = "transparent";
            const border = document.querySelector('.header__wrapper');
            border.style.paddingBottom = "20px";
            border.style.borderBottom = "1px solid rgba(180, 193, 208, 0.5)";
        }
    });
    const countDownDate = new Date("Sep 24, 2021 15:37:25").getTime();
    const x = setInterval(function () {

        const now = new Date().getTime();

        const distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
    $('.drop1').mouseenter((e) => {
        $('header').addClass('header-change');
        $('header').addClass('drop-change1');
        $('.modal__box1').addClass('menu__box-visible');
    });
    $('ul>li>a').mouseenter((e) => {
        $('header').removeClass('header-change');
        $('header').removeClass('drop-change1');
        $('header').removeClass('drop-change2');
        $('.modal__box2').removeClass('menu__box-visible');
        $('.modal__box1').removeClass('menu__box-visible');
    });
    $('.modal__box1').mouseleave((e) => {
        $('header').removeClass('header-change');
        $('header').removeClass('drop-change1');
        $('header').removeClass('drop-change2');
        $('.modal__box1').removeClass('menu__box-visible');
    });
    $('.modal__box2').mouseleave((e) => {
        $('header').removeClass('header-change');
        $('header').removeClass('drop-change2');
        $('.modal__box2').removeClass('menu__box-visible');
    });
    $('.drop2').mouseenter((e) => {
        $('header').addClass('header-change');
        $('header').addClass('drop-change2');
        $('.modal__box2').addClass('menu__box-visible');
    });
    //$('.ring')
    $(".phone_mask").mask("+7(999)999-99-99");
    $('.ring, .btn-call').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal-ring').addClass('overlay-visible');
    });
    $('.account').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal-registration').addClass('overlay-visible');
    });
    $('#modal-registration .close').click(() => {
        document.body.style.overflowY = 'auto';
        document.querySelector('html').style.overflowY = 'auto';
        $('#modal-registration').removeClass('overlay-visible');
    });
    $('#modal-ring .close').click(() => {
        document.body.style.overflowY = 'auto';
        document.querySelector('html').style.overflowY = 'auto';
        $('#modal-ring').removeClass('overlay-visible');
    });
    $(document).mouseup(function (e) {
        var container = $("#modal-ring");
        if (container.has(e.target).length === 0) {
            $('#modal-ring').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    $(document).mouseup(function (e) {
        var container = $("#modal-registration");
        if (container.has(e.target).length === 0) {
            $('#modal-registration').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    const actualBtn = document.getElementById('actual-btn1');
    actualBtn.addEventListener('change', function () {
        $(".label-file").toggleClass('file-active');
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
    });
    $('.menu__btn').on('click', () => {
        $('header').toggleClass('header-change');
        $('.hamburger-menu').toggleClass('menu__btn-black');
        $('body').toggleClass('body-hidden');
        $('html').toggleClass('html-hidden');
    });

    if (window.innerWidth < 441) {
        $('.menu__item1').click(function () {
            $('.menu__block--main').addClass('display-none');
            const block = document.querySelector('.menu__block');
            block.style.padding = '0';
            block.style.marginTop = '49px';
            setTimeout(() => {
                $('.menu-block__item1').addClass('menu-block__item-display');
            }, 300);
        });

        $('.item__title').click(function () {
            $('.menu-block__item1').removeClass('menu-block__item-display');
            const block = document.querySelector('.menu__block');
            block.style.paddingTop = '17px';
            block.style.paddingLeft = '20px';
            block.style.paddingRight = '20px';
            block.style.marginTop = '50px';
            setTimeout(() => {
                $('.menu__block--main').removeClass('display-none');
            }, 300);
        });
    } else {
        $('.menu__item1').click(function () {
            $('.menu__block--main').addClass('display-none');
            const block = document.querySelector('.menu__block');
            block.style.padding = '0';
            block.style.marginTop = '59px';
            setTimeout(() => {
                $('.menu-block__item1').addClass('menu-block__item-display');
            }, 300);
        });

        $('.item__title').click(function () {
            $('.menu-block__item1').removeClass('menu-block__item-display');
            const block = document.querySelector('.menu__block');
            block.style.paddingTop = '17px';
            block.style.paddingLeft = '20px';
            block.style.paddingRight = '20px';
            block.style.marginTop = '60px';
            setTimeout(() => {
                $('.menu__block--main').removeClass('display-none');
            }, 300);
        });
    }
    $(".load-btn").click(function () {
        setTimeout(() => {
            $('.course__wrapper-demo').addClass('course__wrapper-demo-display');
        }, 300);
    });
    const owl1 = $(".course__wrapper").owlCarousel({
        dots: false,
        nav: false,

        responsive: {
            0: {
                items: 2,
                autoWidth: true,
                margin: 20,
            },
            600: {
                items: 3,
                autoWidth: true,
                margin: 20,
                draggable: true,
                mouseDrag: true,
            },
            1134: {
                items: 3,
                autoWidth: true,
                margin: 20,
                draggable: false,
                mouseDrag: false,
            }
        }
    });
    const owl2 = $(".news__wrapper").owlCarousel({
        dots: false,
        nav: false,

        responsive: {
            0: {
                items: 2,
                autoWidth: true,
                margin: 15,
            },
            600: {
                items: 4,
                autoWidth: true,
                margin: 15,
                draggable: true,
                mouseDrag: true,
            },
            1134: {
                items: 4,
                autoWidth: true,
                margin: 15,
                draggable: false,
                mouseDrag: false,
            }
        }
    });
    const owl3 = $(".contest__wrapper").owlCarousel({
        dots: false,
        nav: false,

        responsive: {
            0: {
                items: 2,
                autoWidth: true,
                margin: 10,
            },
            600: {
                items: 3,
                autoWidth: true,
                margin: 20,
                draggable: true,
                mouseDrag: true,
            },
            1134: {
                items: 3,
                autoWidth: true,
                margin: 30,
                draggable: false,
                mouseDrag: false,
            }
        }
    });
    const owl4 = $(".partners__wrapper").owlCarousel({
        dots: false,
        nav: false,

        responsive: {
            0: {
                items: 2,
                autoWidth: true,
                margin: 18,
            },
            600: {
                items: 4,
                autoWidth: true,
                margin: 20,
                draggable: true,
                mouseDrag: true,
            },
            1134: {
                items: 4,
                autoWidth: true,
                margin: 60,
                draggable: false,
                mouseDrag: false,
            }
        }
    });
    const acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
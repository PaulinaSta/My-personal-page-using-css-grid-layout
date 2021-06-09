const menuShow = () => {
    const burger = document.querySelector('.burger');
    const menuContainer = document.querySelector('.menu-container');

    burger.addEventListener('click', () => {
        menuContainer.classList.toggle('menu-container--show');
        burger.classList.toggle('burger--active');
    });
}

const scrollToBottom = () => {
    $('.to-bottom').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.main').offset().top
        }, 1000);
    });
}

const scrollToTop = () => {
    $('.to-top').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.header').offset().top
        }, 1000);
    });
}














const scrollPage = () => {
    $(window).on('scroll', function () {
        const scrollValue = $(window).scrollTop();
        const distanceAbout = $('.section--about').offset().top - 250;
        const distancePortfolio = $('.section--portfolio').offset().top - 250;
        const distanceOffer = $('.section--offer').offset().top - 250;
        const distanceContact = $('.section--contact').offset().top - 250;

        // navLinkActive
        if (scrollValue < distanceAbout) {
            $('.menu__underscore').not('.menu__underscore--1').removeClass('menu__underscore--active');
            $('.menu__underscore--1').addClass('menu__underscore--active');
        } else if (scrollValue < distancePortfolio) {
            $('.menu__underscore').not('.menu__underscore--2').removeClass('menu__underscore--active');
            $('.menu__underscore--2').addClass('menu__underscore--active');
        } else if (scrollValue < distanceOffer) {
            $('.menu__underscore').not('.menu__underscore--3').removeClass('menu__underscore--active');
            $('.menu__underscore--3').addClass('menu__underscore--active');
        } else if (scrollValue < distanceContact) {
            $('.menu__underscore').not('.menu__underscore--4').removeClass('menu__underscore--active');
            $('.menu__underscore--4').addClass('menu__underscore--active');
        } else {
            $('.menu__underscore').not('.menu__underscore--5').removeClass('menu__underscore--active');
            $('.menu__underscore--5').addClass('menu__underscore--active');
        }

        // toTopShow
        if (scrollValue > distanceAbout / 2) {
            $('.to-top').addClass('to-top--show');
        }
        if (scrollValue < distanceAbout / 2) {
            $('.to-top').removeClass('to-top--show');
        }
    })
}

const app = () => {
    menuShow();
    scrollToBottom();
    scrollToTop();
    scrollPage();
}

app();
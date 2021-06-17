const menuShow = () => {
    const burger = document.querySelector('.burger');
    const menuContainer = document.querySelector('.menu-container');
    const burgerLine1 = document.querySelector('.burger__line--line1');
    const burgerLine2 = document.querySelector('.burger__line--line2');
    const burgerLine3 = document.querySelector('.burger__line--line3');

    burger.addEventListener('click', () => {
        menuContainer.classList.toggle('js-menu-container--show');
        burgerLine1.classList.toggle('js-burger__line1--active');
        burgerLine2.classList.toggle('js-burger__line2--active');
        burgerLine3.classList.toggle('js-burger__line3--active');
    });
}






const menuLinkClick = () => {
$('.menu__link').on('click', function () {

$('body, html').animate({
    scrollTop: $('[data-section=' + $(this).attr('id') + ']').offset().top
}, 1000);

$('.menu-container').toggleClass('js-menu-container--show');

$('.burger__line--line1').toggleClass('js-burger__line1--active');
$('.burger__line--line2').toggleClass('js-burger__line2--active');
$('.burger__line--line3').toggleClass('js-burger__line3--active');

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
        const distanceAbout = $('.section--about').offset().top - 1;

        // toBottomHide / toTopShow
        if (scrollValue > distanceAbout) {
            $('.to-bottom').addClass('js-to-bottom--hide');
            $('.to-top').addClass('js-to-top--show');
        }
        if (scrollValue < distanceAbout) {
            $('.to-bottom').removeClass('js-to-bottom--hide');
            $('.to-top').removeClass('js-to-top--show');
        }

    })
}

const app = () => {
    menuShow();
    menuLinkClick();
    scrollToBottom();
    scrollToTop();
    scrollPage();
}

app();
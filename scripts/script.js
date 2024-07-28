$(document).ready(function () {

    // анимация
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    // поп-ап для фото в галерее
    $('.open-popup-link').magnificPopup({
        type: 'image',
    });

    // переключение между разделами товаров
    let florariums = $('#florariums');
    let orchidariums = $('#orchidariums');

    orchidariums.click(function () {
        $('.orchidariums').css('display', 'grid');
        $('.florariums').css('display', 'none');
    })

    florariums.click(function () {
        $('.florariums').css('display', 'grid');
        $('.orchidariums').css('display', 'none');
    })

    // карусель
    let prevArrow = $('.arrow-prev');
    let nextArrow = $('.arrow-next');

    $('.responses-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 430,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // открытие меню на адаптиве
    let burger = $('#burger');
    let menu = $('#menu');

    burger.click(function () {
        menu.css('display', 'flex');
    })

    // закрытие меню на адаптиве
    let close =  $('#close');
    let menuAll = $('#menu *');

    close.click(function () {
        menu.css('display', 'none');
    })

    menuAll.click(function () {
        menu.css('display', 'none');
    })

})

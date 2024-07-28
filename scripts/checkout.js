'use strict';
(() => {

    let input = $('input');
    let textarea = $('textarea');

    // очистка инпутов в формах
    function inputClearing () {
        input.css('border-color','#101907');
        input.val('');
        input.next().hide();
    }

    // очистка текстареа в форме
    function textareaClearing () {
        textarea.css('border-color','#101907');
        textarea.val('');
        textarea.next().hide();
    }

    // открывание формы звонка
    $('.ring-button').click(function openRingForm () {
        $('#ring-popup').css('display', 'block');
    })

    // закрывание формы звонка
    $('.ring-popup-closing-cross').click(function closeRingForm () {
        inputClearing();
        $('#ring-popup').css('display', 'none');

    })

    // открывание формы заказа
    $('#forming-order').click(function openOrderForm () {
        $('#order-popup').css('display', 'block');
    })

    // закрывание формы заказа
    $('.order-popup-closing-cross').click(function closeOrderForm () {
        inputClearing();
        textareaClearing();
        $('#order-popup').css('display', 'none');
    })

    // закрывание поп-апа "спасибо за заказ"
    $('.thanks-for-order-popup-closing-cross').click(function closeThanksForOrder () {
        inputClearing();
        textareaClearing();
        $('#thanks-for-order-popup').css('display', 'none');
    })

    $('.thanks-for-order-popup-button').click(function closeThanksForOrder2 () {
        inputClearing();
        textareaClearing();
        $('#thanks-for-order-popup').css('display', 'none');
    })

    // валидация формы звонка
    $('#ring-popup-button').click(function validationRingForm () {
        let ringPhone = $('#ring-popup-phone-input');
        let ringForm = $('.ring-popup-form');
        let ringThanks = $('.ring-popup-thanks');
        let hasError = false;

        $('.ring-popup-notice').hide();
        ringPhone.css('border-color', 'green');

        if (!ringPhone.val()) {
            ringPhone.css('border-color', 'red');
            ringPhone.next().show();
            // return;
            hasError = true;
            }

            if (!hasError) {
                        $.ajax({
                            method: "POST",
                            url: "http://testologia.site/checkout",
                            data: { name: ringPhone.val() }
                        })
                            .done(function( msg ) {
                                if (msg.success) {
                                    ringForm.css('display', 'none');
                                    ringThanks.css('display', 'block');
                                } else {
                                    alert("Возникла ошибка при заказе звонка.");
                                }
                            });
        }
    })

    // валидация формы заказа
    $('#order-popup-button').click(function validationOrderForm () {
        let orderName = $('#order-popup-name');
        let orderPhone = $('#order-popup-phone');
        let orderDetails = $('#order-popup-details');
        let orderForm = $('#order-popup');
        let orderThanks = $('#thanks-for-order-popup');
        let hasError = false;

        $('.order-popup-notice').hide();
        $('.order-popup-input').css('border-color', 'green');
        orderDetails.css('border-color', 'green');

        if (!orderName.val()) {
            orderName.css('border-color', 'red');
            orderName.next().show();
            // return;
            hasError = true;
        }

        if (!orderPhone.val()) {
            orderPhone.css('border-color', 'red');
            orderPhone.next().show();
            // return;
            hasError = true;
        }

        if (!orderDetails.val()) {
            orderDetails.css('border-color', 'red');
            orderDetails.next().show();
            // return;
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "http://testologia.site/checkout",
                data: {name: orderName.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        orderForm.css('display', 'none');
                        orderThanks.css('display', 'block');
                    } else {
                        alert("Возникла ошибка при оформлении заказа.");
                    }
                });
        }
    })

    })()
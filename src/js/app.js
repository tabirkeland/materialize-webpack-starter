require('./bootstrap');

$(function () {
	$('.button-collapse').sideNav();
	$('.parallax').parallax();

    $(".sub-title-typed").typed({
        strings: ["A modern responsive front-end framework based on Material Design."],
        typeSpeed: 50,
        startDelay: 1000,
        loop: true,
        preStringTyped: function() {
            $('.sub-title-typed + .typed-cursor').css({'display' : 'inline'});
        },
        callback: function() {
            $('.sub-title-typed + .typed-cursor').css({'visibility' : 'hidden'});
        }
    });
});
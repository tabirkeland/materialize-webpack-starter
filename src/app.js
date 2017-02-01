require('./bootstrap');

$(function () {
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();

    $("#header-sub-title").typed({
        strings: ["Full.", "Stack.", "Developer."],
        typeSpeed: 50,
        startDelay: 1000,
        loop: true,
        preStringTyped: function() {
        	$('#header-sub-title + .typed-cursor').css({'display' : 'inline'});
        },
        callback: function() {
        	$('#header-sub-title + .typed-cursor').css({'visibility' : 'hidden'});
        }
    });

    $("#section-two-title").typed({
        strings: ["A modern responsive front-end framework based on Material Design."],
        typeSpeed: 50,
        startDelay: 1000,
        loop: true,
        preStringTyped: function() {
            $('#section-two-title + .typed-cursor').css({'display' : 'inline'});
        },
        callback: function() {
            $('#section-two-title + .typed-cursor').css({'visibility' : 'hidden'});
        }
    });

    $("#section-three-title").typed({
        strings: ["A modern responsive front-end framework based on Material Design."],
        typeSpeed: 50,
        startDelay: 1000,
        loop: true,
        preStringTyped: function() {
            $('#section-three-title + .typed-cursor').css({'display' : 'inline'});
        },
        callback: function() {
            $('#section-three-title + .typed-cursor').css({'visibility' : 'hidden'});
        }
    });

});
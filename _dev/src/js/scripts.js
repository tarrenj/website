// // Set Headroom classes and offset
// $(document).ready(function() {
// 	$(".site-header").headroom({
// 	  "tolerance": 5,
// 	  "offset": 205,
// 	  "classes": {
// 	    "initial": "animated",
// 	    "pinned": "slideDown",
// 	    "unpinned": "slideUp",
// 	    "top": "headroom--top",
// 	    "notTop": "headroom--not-top"
// 	  }
// 	});
// });

var header = $('.site-header');

$(function() {
    header.headroom({
        "tolerance": 5,
        "offset": 40,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp",
            "top": "headroom--top",
            "notTop": "headroom--not-top"
        }
    });
});

// Smooth page scroll to an anchor on the same page
$(function() {
    $('a[href*="#"]:not([href="#"]):not([data-toggle="collapse"]):not(.quote-link)').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// $(function() {
//     $('#contactForm').submit(function(event) {
//         event.preventDefault();
//
//         var subscribeForm = $(this);
//         var subscribeButton = $('button[type=submit]', subscribeForm);
//
//         if ($("input[name='email']").val() === '') {
//             alert('Please enter an email address')
//             return
//         }
//
//         $.ajax({
//                 url: subscribeForm.prop('action'),
//                 type: 'POST',
//                 crossDomain: true,
//                 headers: {
//                     'accept': 'application/javascript',
//                 },
//                 data: $('#contactForm').serialize(),
//                 beforeSend: function() {
//                     subscribeButton.prop('disabled', 'disabled');
//                 }
//             })
//             .done(function(response) {
//                 // You will do something WAY BETTER than alert
//                 // because you are an awesome designer.
//                 alert('Thanks for contacting me!');
//                 subscribeButton.prop('disabled', false);
//             })
//             .fail(function(response) {
//                 alert('Dang, something went wrong!');
//                 subscribeButton.prop('disabled', false);
//             })
//
//     });
// });

$(function() {
    var bLazy = new Blazy({
        success: function(element) {
            setTimeout(function() {
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
        }
    });

    // Add plus and minus symbols to accordion tabs
    $('#accordion .card-header a').append('<i class="fa fa-plus" aria-hidden="true"></i><i class="fa fa-minus" aria-hidden="true"></i>');
});

// $(function() {
//   $(".animsition").animsition({
//     inClass: 'fade-in',
//     outClass: 'fade-out',
//     inDuration: 300,
//     outDuration: 300,
//     linkElement: 'a:not([target="_blank"]):not([href^="#"])',
//     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//     loading: false,
//     loadingParentElement: 'body', //animsition wrapper element
//     loadingClass: 'animsition-loading',
//     loadingInner: '', // e.g '<img src="loading.svg" />'
//     timeout: false,
//     timeoutCountdown: 5000,
//     onLoadEvent: true,
//     browser: [ 'animation-duration', '-webkit-animation-duration'],
//     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//     overlay : false,
//     overlayClass : 'animsition-overlay-slide',
//     overlayParentElement : 'body',
//     transition: function(url){ window.location.href = url; }
//   });
// });

// Toggle active class for hamburgers
$('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('#mobile-nav').toggleClass('visible');
});

// Move navbar contents to different container on mobile
var navbarContents = $('#navContents');
enquire.register("screen and (max-width:991px)", {
    match: function() {
        $(navbarContents).appendTo('#mobile-nav');
    },
    unmatch: function() {
        $(navbarContents).appendTo('#navContainer');
    }
});

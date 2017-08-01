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
    $('a[href*="#"]:not([href="#"]):not([data-toggle="collapse"]):not([data-toggle="reveal"]):not(.quote-link)').click(function() {
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
/*
$("#getting-started")
.countdown("2017/05/23", function(event) {
  $(this).text(
    event.strftime('%D days %H:%M:%S')
  );
});

$(window).on('load', function() {
  var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
    nextYear = '2017/05/23',
    template = _.template($('#main-example-template').html()),
    currDate = '00:00:00:00:00',
    nextDate = '00:00:00:00:00',
    parser = /([0-9]{2})/gi,
    $example = $('#main-example');
  // Parse countdown string to an object
  function strfobj(str) {
    var parsed = str.match(parser),
      obj = {};
    labels.forEach(function(label, i) {
      obj[label] = parsed[i]
    });
    return obj;
  }
  // Return the time components that diffs
  function diff(obj1, obj2) {
    var diff = [];
    labels.forEach(function(key) {
      if (obj1[key] !== obj2[key]) {
        diff.push(key);
      }
    });
    return diff;
  }
  // Build the layout
  var initData = strfobj(currDate);
  labels.forEach(function(label, i) {
    $example.append(template({
      curr: initData[label],
      next: initData[label],
      label: label
    }));
  });
  // Starts the countdown
  $example.countdown(nextYear, function(event) {
    var newDate = event.strftime('%w:%d:%H:%M:%S'),
      data;
    if (newDate !== nextDate) {
      currDate = nextDate;
      nextDate = newDate;
      // Setup the data
      data = {
        'curr': strfobj(currDate),
        'next': strfobj(nextDate)
      };
      // Apply the new values to each node that changed
      diff(data.curr, data.next).forEach(function(label) {
        var selector = '.%s'.replace(/%s/, label),
            $node = $example.find(selector);
        // Update the node
        $node.removeClass('flip');
        $node.find('.curr').text(data.curr[label]);
        $node.find('.next').text(data.next[label]);
        // Wait for a repaint to then flip
        _.delay(function($node) {
          $node.addClass('flip');
        }, 50, $node);
      });
    }
  });
});
*/
var $mcForm = $('#email-form');

$mcForm.ajaxChimp({
  url: $mcForm.attr('action'),
  callback: callbackFunction
});

function callbackFunction (resp) {
    if (resp.result === 'success') {
      // console.log('success');
      $mcForm.fadeOut();
      $('#email-success').fadeIn();
    } else if (resp.result === 'error') {
      $('#email-form .form-group').addClass('has-warning');
      if (resp.msg.indexOf("is already subscribed") >= 0) {
        // console.log('already subscribed');
        $('#email-form .form-control-feedback').text("Looks like you're already subscribed.");
      } else if (resp.msg.indexOf("Please enter a value") >= 0) {
        // console.log('no email address');
        $('#email-form .form-control-feedback').text('Please enter an email address.');
      } else if (resp.msg.indexOf("Too many subscribe attempts") >= 0) {
        // console.log('too many attempts');
        $('#email-form .form-control-feedback').text('Please wait 5 mintutes and try again.');
      } else if (resp.msg.indexOf("must contain a single @") >= 0 || resp.msg.indexOf("domain portion of the email address is invalid") >= 0) {
        // console.log('invalid email address');
        $('#email-form .form-control-feedback').text('Please enter a valid email address.');
      } else {
        console.log(resp);
        $('#email-form .form-control-feedback').text('Oops. Not sure what went wrong. Please try again soon.');
      }
    }
}

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

$('[data-toggle="reveal"]').click(function(event) {
  var container = $('#quickLinks');
  var card = $('#quickLinks .card');
  var target = $(this).attr('href');
  event.preventDefault();
  if ( !card.hasClass('show') ) {
    card.addClass('show').fadeIn();
  }
  $('.reveal').removeClass('show');
  $(target).addClass('show');

  var height = $(target).outerHeight();
  card.css('height', height);

  console.log(height);
});

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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/*
$.ajax({
  url: 'https://aayanl.tech/insight-api/status',
  dataType: 'json',
  success: function(data) {
    $('#currentBlock').text(numberWithCommas(data.info.blocks));
    $('#blockLine').fadeIn();
  }
})
*/

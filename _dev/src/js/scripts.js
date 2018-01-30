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
    $('a[href*="#"]:not([href="#"]):not([data-toggle="collapse"]):not([data-toggle="dropdown"]):not([data-toggle="reveal"]):not(.quote-link)').click(function() {
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

$('.dropdown-toggle').dropdown();
$('#about-dropdown .dropdown-item').click(function() {
  $(this).parent().dropdown('toggle');
});

new WOW().init();

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
      // set cookie to subscribed
      Cookies.set('newsletterOptin', 'subscribed', { expires: 365 });
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

$(function() {
    var bLazy = new Blazy({
        success: function(element) {
            setTimeout(function() {
                if ($('#bgvid')) {
                  videoControl();
                }
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
        }
    });

    // Add plus and minus symbols to accordion tabs
    $('#accordion .card-header a').append('<i class="fa fa-plus" aria-hidden="true"></i><i class="fa fa-minus" aria-hidden="true"></i>');
});

// Video background optimization
function videoControl() {
  var $videoContainer = $('#bgvid');
  var $video = $('#bgvid video');
  var videoHeight = $videoContainer.outerHeight();

  $(window).scroll(function(){
    var x = $(document).scrollTop();
    if ($(document).scrollTop() > videoHeight) {
      $video.get(0).pause();
    } else if ($(document).scrollTop() < videoHeight ) {
      $video.get(0).play();
    }
  });
}
// END Video background optimization

$('.toggle-languages').click(function(event) {
  event.preventDefault();
  $('.language-sidebar').toggleClass('show');
});

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

if ( document.getElementById("nodeCount") ) {
  $.ajax({
    url: 'https://securenodes.na.zensystem.io/api/grid/nodes',
    dataType: 'json',
    success: function(data) {
      var nodeValue = data.userdata.global.total;
      if ( $.isNumeric(nodeValue) ) {
        $('#nodeCount').text(nodeValue);
      }
    }
  })
}

if ( document.getElementById("blogPosts") && document.getElementById("template-blog-post") ) {
  var listTemplate = document.getElementById("template-blog-post");
  var templateHtml = listTemplate.innerHTML;
  var categoryObject;
  var dataObject;

  // get the categories and posts
  $.ajax({
    type: "GET",
    url: "https://blog.zensystem.io/wp-json/wp/v2/categories",
    dataType: "json",
    data: {
      per_page: 50
    },
    success: function(dataJSON) {
      categoryObject = dataJSON;
      var cleanCategories = {};
      $.each(categoryObject, function( index, value ) {
        cleanCategories[value.id] = value.name;
      });
      categoryObject = cleanCategories;
      // get the posts
      $.ajax({
        type: "GET",
        url: "https://blog.zensystem.io/wp-json/wp/v2/posts",
        dataType: "json",
        data: {
          categories_exclude: [67, 52, 95, 89, 66],
          _embed: true
        },
        success: function(dataJSON) {
          dataObject = dataJSON;
          // update categories with the name instead of id
          $.each(dataObject, function( index, value ) {
            var categories = value.categories;
            var cleanCategories = [];
            $.each(categories, function( index, value ) {
              cleanCategories.push( categoryObject[value] );
            })
            dataObject[index].categories = cleanCategories
          });
          // build out the posts
          document.getElementById("blogPosts").innerHTML = listCreateHtml(dataJSON);
        }
      });

    }
  });


}

// Function to generate and returns the HTML.
// Accepts an object as a parameter
function listCreateHtml(dataObject) {
  var listHtml = "";

  for (key in dataObject) {
    var numberOfPosts = 3;
    if (key < numberOfPosts) {
      var visibilityClass = '';
      var date = moment(dataObject[key].date).format('LL');
      var category = '';
      var categoryVisibility = '';
      if ( dataObject[key].categories[0] ) {
        category = dataObject[key].categories[0];
        categoryVisibility = 'visible';
      } else {
        categoryVisibility = 'hidden';
      }
      var featured_image = dataObject[key]['_embedded']['wp:featuredmedia'];
      // test for featured image and hide if there isn't one or is undefined because of forbidden characters used in image file name
      if ( featured_image ) {
        featured_image = dataObject[key]['_embedded']['wp:featuredmedia'][0]['source_url'];
        if ( featured_image ) {
          visibilityClass = 'visible';
        } else {
          featured_image = '';
          visibilityClass = 'hidden';
        }
      } else {
        featured_image = '';
        visibilityClass = 'hidden';
      }
      listHtml += templateHtml.replace(/{{visibility_class}}/g, visibilityClass)
                              .replace(/{{featured_image}}/g, featured_image)
                              .replace(/{{link}}/g, dataObject[key].link)
                              .replace(/{{title}}/g, dataObject[key].title.rendered)
                              .replace(/{{date}}/g, date)
                              .replace(/{{category_visibility}}/g, categoryVisibility)
                              .replace(/{{category}}/g, category)
                              .replace(/{{excerpt}}/g, dataObject[key].excerpt.rendered);

    } else {

    }
  }

  return listHtml;
}


// Show newsletter optin if user hasn't subscribed or dismissed it in the last week

// Cookies.remove('newsletterOptin');
var newsletterCookie = Cookies.get('newsletterOptin');
// var host = window.location.host;
//
// if ( newsletterCookie != 'disabled' && newsletterCookie != 'subscribed' || host === 'localhost:4000' ) {
if ( newsletterCookie != 'disabled' && newsletterCookie != 'subscribed' ) {
  $('#home-header').delay(2800).slideDown( 200, function() {
    // Animation complete.
  });
}

$('#home-header-close').click(function() {
  $('#home-header').slideUp( 200, function() {
    // console.log('set cookie');
    Cookies.set('newsletterOptin', 'disabled', { expires: 7 });
  });
});



// Connection speed test (approx)
var imageAddr = "/assets/img/blog-placeholder.jpg";
var downloadSize = 11548; //bytes

function ShowProgressMessage(msg) {
  if (console) {
    if (typeof msg == "string") {
      console.log(msg);
    } else {
      for (var i = 0; i < msg.length; i++) {
        console.log(msg[i]);
      }
    }
  }

  var oProgress = document.getElementById("progress");
  if (oProgress) {
    var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
    oProgress.innerHTML = actualHTML;
  }
}

function InitiateSpeedDetection() {
  // ShowProgressMessage("Loading the image, please wait...");
  window.setTimeout(MeasureConnectionSpeed, 1);
};

if (window.addEventListener) {
  window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
  }

  download.onerror = function (err, msg) {
    ShowProgressMessage("Invalid image, or error downloading");
  }

  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    // ShowProgressMessage([
    //     "Your connection speed is:",
    //     speedBps + " bps",
    //     speedKbps + " kbps",
    //     speedMbps + " Mbps"
    // ]);

    if (speedMbps >= 1) {
      // console.log('should be fast enough');
      $('#bgvid video').css('display', 'inline-block');
    } else {
      // console.log('not sure');
      $('#bgvid video').css('display', 'none');
    }
  }
}

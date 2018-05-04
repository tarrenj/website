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

$(function() {
    var bLazy = new Blazy({
        success: function(element) {
            setTimeout(function() {
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
        }
    });
});

$('.toggle-languages').click(function(event) {
  event.preventDefault();
  // $('.language-sidebar').toggleClass('show');
  $('.language-select').toggleClass('show');
});

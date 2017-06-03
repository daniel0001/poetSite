$(document).ready(function() {
	$( ".fade-one" ).hide(0).fadeIn(2000);
	$( "#fade-two" ).hide(0).delay(1000).fadeIn(2000);
	$( "#fade-three" ).hide(0).delay(1500).fadeIn(3000);
	$( "#fade-four" ).hide(0).delay(2000).fadeIn(2000);

	$('a[href^="#"]').on('click', function(event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing')
        window.location.hash = target;
      });

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $(document).on('click', 'a.page-scroll', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });


// nav-bar change colour on scroll
var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.nav').css({"background":"rgba(75,75,75,0.9)"});
    } else {
       $('.nav').css({"background":"transparent"});
    }
});



// book cover tilter effect
	(function() {
			var tiltSettings = [
			{},
			{
				movement: {
					imgWrapper : {
						translation : {x: 10, y: 10, z: 30},
						rotation : {x: 0, y: -10, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					lines : {
						translation : {x: 10, y: 10, z: [0,70]},
						rotation : {x: 0, y: 0, z: -2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					caption : {
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					overlay : {
						translation : {x: 10, y: -10, z: 0},
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					}
				}
			}, 
			];

			function init() {
				var idx = 0;
				[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
					idx = pos%2 === 0 ? idx+1 : idx;
					new TiltFx(el, tiltSettings[idx-1]);
				});
			}

			// Preload all images.
			imagesLoaded(document.querySelector('main'), function() {
				document.body.classList.remove('loading');
				init();
			});

		})();

});

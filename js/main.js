
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	
  	// Portfolio isotope filter
    $(window).load(function() {
      $("#header").css("display","block");
      $("#main-content").css("display","block");
      $("#loading").hide();
      $("body").css("background","black");
    background: black;

        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	

    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

    $('.simulate-text').t({

  // typing speed in milliseconds
  speed:55, 

  // enable 'human-like'
  speed_vary:false, 

  // delays start
  delay:false, 

  // mistyping
  mistype:false,

  // en or de
  locale:'en',

  // enable caret
  caret:true, 

  // enable blink
  blink:false,  

  // permanent caret blinking
  blink_perm:true,

  // wrapper tag
  tag:'span',

  // pauses/continues typing on click/tap
  pause_on_click:true, 

  // infinite or N times
  repeat:false, 
  fin:function(elem){
    
  }


});
 

}());


}
main();
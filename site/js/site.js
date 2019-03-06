$(function() { 
   new universalParallax().init({
      speed: 8.0
  });   
  
  new FgSlider('slider-1', {
    autoplay: true, // autoplay on / off
    effect: 'slide', // fade, scale, slide, slide-top
    duration: 5000, // duration till the next slide
    bullets: true, // show / hide bullets
  });

  $('#hero-vid').on('loadeddata',function(e)
  {
    setTimeout(function(){
      $('.loader').fadeOut('slow');
    },2000);
  });
}); 


// $('#hero-vid').on('loadeddata',function(e)
//         {
//             setTimeout(function(){
//                 $('.loader').fadeOut('slow');
//                 $('#hero-vid').fadeIn('slow'); 
//                 },2000);
//                 $('.splash').removeClass('hide');
//         });

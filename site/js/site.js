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

window.onscroll = function (e) {  
  if( $(window).scrollTop()> 500)
  {
    $('.navbar').removeClass('bg-trans');    
    $('.navbar').addClass('bg-no-trans');
  }else{
    $('.navbar').removeClass('bg-no-trans');    
    $('.navbar').addClass('bg-trans');
  }

  if( $(window).scrollTop()> 680)
  {
    $('.video-section').hide();
  }else{
    $('.video-section').show();
  }
}


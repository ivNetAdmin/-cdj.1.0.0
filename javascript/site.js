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
}); 
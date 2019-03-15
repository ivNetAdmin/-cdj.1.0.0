$(function() { 
    new universalParallax().init({
       speed: 8.0
   });   
   
//    new FgSlider('slider-1', {
//      autoplay: true, // autoplay on / off
//      effect: 'slide', // fade, scale, slide, slide-top
//      duration: 5000, // duration till the next slide
//      bullets: true, // show / hide bullets
//    });
 
   $('#hero-vid').on('loadeddata',function(e)
   {
     setTimeout(function(){
       $('.loader').fadeOut('slow');

       $('.splash').removeClass('hide');
    $('.btn-holder').removeClass('hide');

     },1000);
   });

   $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else
    {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
        
    }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

   var $imageSrc;  
$('.gallery img').click(function() {
    $imageSrc = $(this).data('bigimage');
});


$('#modalImg').on('shown.bs.modal', function (e) {
    
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  
  $("#image").attr('src', $imageSrc  ); 
  })
    
    
  // reset the modal image
  $('#modalImg').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#image").attr('src',''); 
  }) 


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
 

   

  //  $('.gallery_item img').bind('click',function(event){
  //     //alert(event.target.src);
  //     $(".modal-body #modalImage")[0].src=event.target.src;
  //    // $('#addBookDialog').modal('show');
  //  });

   // if( $(window).scrollTop()> 680)
   // {
   //   $('.video-section').hide();
   // }else{
   //   $('.video-section').show();
   // }
 }

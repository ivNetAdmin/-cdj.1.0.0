$(function() {
  
  new FgSlider('slider-1', {
      autoplay: true, // autoplay on / off
      effect: 'slide', // fade, scale, slide, slide-top
      duration: 5000, // duration till the next slide
      bullets: true, // show / hide bullets
  });

  $('#email-button').click(function() {

      const html = "<div>" +
          "<p>Name: " + $('.txt[name="name"]').val() + "</p>" +
          "<p>Tel: " + $('.txt[name="tel"]').val() + "</p>" +
          "<p>Email: " + $('.txt[name="email"]').val() + "</p>" +
          "<p>Event Date: " + $('.txt[name="date"]').val() + "</p>" +
          "<p>Event Type: " + $('.txt[name="type"]').val() + "</p>" +
          "<p>Venue: " + $('.txt[name="venue"]').val() + "</p>" +
          "<p>Guests: " + $('.txt[name="guests"]').val() + "</p>" +
          "<p>Start: " + $('.txt[name="start"]').val() + " End: " + $('.txt[name="end"]').val() + "</p>" +
          "<p>Notes: " + $('.txt_3').val() + "</p>" +
          "</div>"

      Email.send({      
          SecureToken : "080eef13-07c8-4f65-92dc-083189461630",
          To : 'bp@ivnet.co.uk',
          From : "website@contagiousdjs.com",
          Subject : "Website Contact",
          Body : html
      }).then(
        message => alert(message)
      );

      $(".txt").each(function() {
          $(this).val('');
      });

      $(".txt_3").val('');
  });

  $("#eventDate").datepicker({
      autoclose: true,
      todayHighlight: true,
      orientation: "top auto"
  }).on("change", function() {

  });

  $('#hero-vid').on('loadeddata', function(e) {
      setTimeout(function() {
          //$('.loader').fadeOut('slow');

          $('.splash').removeClass('hide');
          $('.btn-holder').removeClass('hide');

      }, 1000);
  });

  $(".filter-button").click(function() {
      var value = $(this).attr('data-filter');

      if (value == "all") {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      } else {
          //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
          //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.' + value).hide('3000');
          $('.filter').filter('.' + value).show('3000');

      }

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
  
   
  });

  var $imageSrc;
  $('.gallery img').click(function() {
      $imageSrc = $(this).data('bigimage');
  });

  $('#modalImg').on('shown.bs.modal', function(e) {
    $("#image").attr('src', $imageSrc);
  })

  // reset the modal image
  $('#modalImg').on('hide.bs.modal', function(e) {
      $("#image").attr('src', '');
  })
});

$(window).scroll(function () {

  if ($(document).scrollTop() > 500) {
      $('.navbar').removeClass('bg-trans');
      $('.navbar').addClass('bg-no-trans');
  } else {
      $('.navbar').removeClass('bg-no-trans');
      $('.navbar').addClass('bg-trans');
  }
});


new universalParallax().init({
  speed: 100.0
});


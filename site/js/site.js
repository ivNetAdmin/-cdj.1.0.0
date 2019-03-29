$(function() {
  
  new FgSlider('slider-1', {
      autoplay: true, // autoplay on / off
      effect: 'slide', // fade, scale, slide, slide-top
      duration: 5000, // duration till the next slide
      bullets: true, // show / hide bullets
  });
  
  validate();
  $('#contactFrm input').on('keyup', validate);

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
          To : ['info@contagiousdjs.com','bp@ivnet.co.uk'],
          From : "website@contagiousdjs.com",
          Subject : "Website Contact",
          Body : html
      }).then(
        message => addEmailMessage(message)
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

// $(window).scroll(function () {

//   if ($(document).scrollTop() > 500) {
//       $('.navbar').removeClass('bg-trans');
//       $('.navbar').addClass('bg-no-trans');
//   } else {
//       $('.navbar').removeClass('bg-no-trans');
//       $('.navbar').addClass('bg-trans');
//   }
// });

function addEmailMessage(msg)
{
  $('#emailok').text('Thank you for the enquiry, the team will get back to you shortly');
}

new universalParallax().init({
  speed: 100.0
});

function validate() {
  
    var inputsWithValues = 0;
    var inputsReqValues = 0;
    
    // get all input fields except for type='submit'
    var myInputs = $("#contactFrm input:not([type='submit'])");       

    myInputs.each(function(e) {
    // if it has a value, increment the counter
    //alert($(this).attr('name'));
        if($(this).attr('required'))
        {
            inputsReqValues += 1;
            if ($(this).val()) {         
                inputsWithValues += 1;
            }
        }
    });

    if (inputsWithValues == inputsReqValues) {
        $("#email-button").removeClass('email-button-disabled');
        $("#email-button").prop('disabled', false);       
    } else {
        $("#email-button").prop('disabled', true);
        $("#email-button").addClass('email-button-disabled');
    }
  }
 // document.addEventListener('contextmenu', event => event.preventDefault());


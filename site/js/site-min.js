$(function(){var t;(new universalParallax).init({speed:8}),$("#email-button").click(function(){const t="<div><p>Name: "+$('.txt[name="name"]').val()+"</p><p>Tel: "+$('.txt[name="tel"]').val()+"</p><p>Email: "+$('.txt[name="email"]').val()+"</p><p>Event Date: "+$('.txt[name="date"]').val()+"</p><p>Event Type: "+$('.txt[name="type"]').val()+"</p><p>Venue: "+$('.txt[name="venue"]').val()+"</p><p>Guests: "+$('.txt[name="guests"]').val()+"</p><p>Start: "+$('.txt[name="start"]').val()+" End: "+$('.txt[name="end"]').val()+"</p><p>Guests: "+$('.txt[name="mess"]').val()+"</p></div>";Email.send({Host:"smtp.ionos.co.uk",Username:"sanj@contagiousdjs.com",Password:"sanjay01",To:"bp@ivnet.co.uk",From:"sanj@contagiousdjs.com",Subject:"Website Contact",Body:t}).then(t=>alert(t))}),$("#eventDate").datepicker({autoclose:!0,todayHighlight:!0,orientation:"top auto"}).on("change",function(){}),$("#hero-vid").on("loadeddata",function(t){setTimeout(function(){$(".loader").fadeOut("slow"),$(".splash").removeClass("hide"),$(".btn-holder").removeClass("hide")},1e3)}),$(".filter-button").click(function(){var t=$(this).attr("data-filter");"all"==t?$(".filter").show("1000"):($(".filter").not("."+t).hide("3000"),$(".filter").filter("."+t).show("3000"))}),$(".filter-button").removeClass("active")&&$(this).removeClass("active"),$(this).addClass("active"),$(".gallery img").click(function(){t=$(this).data("bigimage")}),$("#modalImg").on("shown.bs.modal",function(a){$("#image").attr("src",t)}),$("#modalImg").on("hide.bs.modal",function(t){$("#image").attr("src","")})}),window.onscroll=function(t){$(window).scrollTop()>500?($(".navbar").removeClass("bg-trans"),$(".navbar").addClass("bg-no-trans")):($(".navbar").removeClass("bg-no-trans"),$(".navbar").addClass("bg-trans"))};
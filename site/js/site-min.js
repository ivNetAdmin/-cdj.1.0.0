function addEmailMessage(t){$("#emailok").text("The message was set, "+t)}$(function(){var t;new FgSlider("slider-1",{autoplay:!0,effect:"slide",duration:5e3,bullets:!0}),$("#email-button").click(function(){const t="<div><p>Name: "+$('.txt[name="name"]').val()+"</p><p>Tel: "+$('.txt[name="tel"]').val()+"</p><p>Email: "+$('.txt[name="email"]').val()+"</p><p>Event Date: "+$('.txt[name="date"]').val()+"</p><p>Event Type: "+$('.txt[name="type"]').val()+"</p><p>Venue: "+$('.txt[name="venue"]').val()+"</p><p>Guests: "+$('.txt[name="guests"]').val()+"</p><p>Start: "+$('.txt[name="start"]').val()+" End: "+$('.txt[name="end"]').val()+"</p><p>Notes: "+$(".txt_3").val()+"</p></div>";Email.send({SecureToken:"080eef13-07c8-4f65-92dc-083189461630",To:["info@contagiousdjs.com","bp@ivnet.co.uk"],From:"website@contagiousdjs.com",Subject:"Website Contact",Body:t}).then(t=>addEmailMessage(t)),$(".txt").each(function(){$(this).val("")}),$(".txt_3").val("")}),$("#eventDate").datepicker({autoclose:!0,todayHighlight:!0,orientation:"top auto"}).on("change",function(){}),$("#hero-vid").on("loadeddata",function(t){setTimeout(function(){$(".splash").removeClass("hide"),$(".btn-holder").removeClass("hide")},1e3)}),$(".filter-button").click(function(){var t=$(this).attr("data-filter");"all"==t?$(".filter").show("1000"):($(".filter").not("."+t).hide("3000"),$(".filter").filter("."+t).show("3000")),$(".filter-button").removeClass("active")&&$(this).removeClass("active"),$(this).addClass("active")}),$(".gallery img").click(function(){t=$(this).data("bigimage")}),$("#modalImg").on("shown.bs.modal",function(e){$("#image").attr("src",t)}),$("#modalImg").on("hide.bs.modal",function(t){$("#image").attr("src","")})}),(new universalParallax).init({speed:100});
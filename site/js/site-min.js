$(function(){var a;(new universalParallax).init({speed:8}),$("#email-button").click(function(){$('.txt[name="name"]').val(),$('.txt[name="tel"]').val(),$('.txt[name="email"]').val(),$('.txt[name="date"]').val(),$('.txt[name="type"]').val(),$('.txt[name="venue"]').val(),$('.txt[name="guests"]').val(),$('.txt[name="start"]').val(),$('.txt[name="end"]').val(),$(".txt_3").val()}),$("#eventDate").datepicker({autoclose:!0,todayHighlight:!0,orientation:"top auto"}).on("change",function(){}),$("#hero-vid").on("loadeddata",function(a){setTimeout(function(){$(".loader").fadeOut("slow"),$(".splash").removeClass("hide"),$(".btn-holder").removeClass("hide")},1e3)}),$(".filter-button").click(function(){var a=$(this).attr("data-filter");"all"==a?$(".filter").show("1000"):($(".filter").not("."+a).hide("3000"),$(".filter").filter("."+a).show("3000"))}),$(".filter-button").removeClass("active")&&$(this).removeClass("active"),$(this).addClass("active"),$(".gallery img").click(function(){a=$(this).data("bigimage")}),$("#modalImg").on("shown.bs.modal",function(t){$("#image").attr("src",a)}),$("#modalImg").on("hide.bs.modal",function(a){$("#image").attr("src","")})}),window.onscroll=function(a){$(window).scrollTop()>500?($(".navbar").removeClass("bg-trans"),$(".navbar").addClass("bg-no-trans")):($(".navbar").removeClass("bg-no-trans"),$(".navbar").addClass("bg-trans"))};
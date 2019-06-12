new WOW().init();
    
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
}) // owl carousel



$('[class^=is]').hide();

$("#theSelect").change(function(){          
   var value = $("#theSelect option:selected").val();
   var theDiv = $(".is" + value);

   theDiv.slideDown();
   theDiv.siblings('[class^=is]').slideUp();
});


$(`.burger-menu`).on(`click`, function(){
    $(`.right`).toggleClass(`right-active`)
});

$(`.right p`).on(`click`, function(){
    $(`.right`).toggleClass(`right-active`)
});

$(".home").click(function(){                           
    $(`html,body`).animate({
        scrollTop: $(`.header-content`).offset().top}, 
                           `slow`)
});

$(".destinatioN").click(function(){                           
    $(`html,body`).animate({
        scrollTop: $(`.destination-content`).offset().top}, 
                           `slow`)
});

$(".itinerary").click(function(){                           
    $(`html,body`).animate({
        scrollTop: $(`.ittinery-content`).offset().top}, 
                           `slow`)
});

$(".contact").click(function(){                           
    $(`html,body`).animate({
        scrollTop: $(`.contact-content`).offset().top}, 
                           `slow`)
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa-duotone fa-arrow-left'></i>","<i class='fa-duotone fa-arrow-right'></i>" ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.owl-3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa-duotone fa-arrow-left'></i>","<i class='fa-duotone fa-arrow-right'></i>" ],
    responsive:{
        0:{
            items:1
        }
    }
})

$('#ham-menu').click(() => {
   $('#ham-x').removeClass('hidden')
   $('#ham-menu').addClass('hidden');
    $('nav').removeClass('absolute');
   $('#mbl-menu').removeClass('hidden')
})

$('.x-mark').click( () => {
    $('#ham-menu').removeClass('hidden')
   $('#ham-x').addClass('hidden');
   $('#mbl-menu').addClass('hidden')

})


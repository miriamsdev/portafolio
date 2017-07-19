//Function: Interaction Scroll
const offsetTop = $('.header').offset().top;
$(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > offsetTop){
        $('.header').css({ 'position': 'fixed', 'top':0 }).addClass('fxd');
    } else {
        $('.header').css({ 'position': 'absolute', 'top':offsetTop }).removeClass('fxd');
    }
});

const state = {
    project: null
};


$( _ => {
//Event: hamburguer menu
    $('#icon-menu').on('click', ()=>{
        $('#menu-collapse').toggleClass("active");
        $('#icon-menu').toggleClass("fa fa-bars");
        $('#icon-menu').toggleClass("fa fa-times")
    });
    $('#menu-collapse ul li').on('click', ()=>{
        $('#menu-collapse').toggleClass("active");
    });

//Animate
    $('.header__menu a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -70}, 800, 'linear');
    });

//Evento: Acordeon
    $(".accordion__title").click(function(e){
        e.preventDefault();
        $(this).toggleClass("open");
        const content = $(this).next(".accordion__content");
        if(content.css("display")=="none"){ //open
            content.slideDown(250);
        }
        else{ //close
            content.slideUp(250);
        }
    });
    Contact();
});

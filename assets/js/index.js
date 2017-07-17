//Function: Interaction Scroll
$(window).scroll(() => {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 500) {
        $('.header').css('background', 'rgba(62, 214, 187,0.9)');
        $('.header__menu a').css('color', '#fff');
        $('.header__logo img').css('width','70px');
        $('.header__logo img').attr('src','assets/images/logo-blanco.png');
    } else {
        $('.header__logo img').attr('src','assets/images/logo-miriam.png');
        $('.header').css('background', 'rgba(62, 70, 101, 0.78)');
        $('.header__logo img').css('width','70px');
    }
});

const state = {
    project: null
};


$( _ => {
//Event: hamburguer menu
    $('#icon-menu').on('click', ()=>{
        $('#menu-collapse').toggleClass("active");
    });
    $('#menu-collapse li').on('click', ()=>{
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

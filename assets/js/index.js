//Function: Interaction Scroll
$(window).scroll(() => {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 500) {
        $('.header').css('background', '#3ed6bb');
        $('.header__menu a').css('color', '#fff');
        $('.header__logo img').css('width','70px');
        // $('.header').attr
        $('.header__logo img').attr('src','assets/images/logo-blanco.png');
        $('.header__menu>li').mouseover(() => {
            $(this).css('border-bottom','4px solid #fff');
        });
    } else {
        $('.header__logo img').attr('src','assets/images/logo-miriam.png');
        $('.header').css('background', 'rgba(62, 70, 101, 0.78)');
        $('.header__logo img').css('width','70px');
    }
});
//Function: Acordeon
$( _ => {
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
});

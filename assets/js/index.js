$(window).scroll(() => {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 500) {
        $('.header').css('background', '#3ed6bb');
        $('.header__menu a').css('color', '#fff');
        $('.header__logo img').css('width','70px');
        // $('.header').attr
        $('.header__logo img').attr('src','assets/images/logo-blanco.png');
        $('.header__menu li').mouseover(() => {
            $('.header__menu li').css('border-bottom','4px solid #fff');
        });
    } else {
        $('.header').css('background', '#2c3e50');
        $('.header__logo img').css('width','70px');
    }
});
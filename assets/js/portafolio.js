$.getJSON('assets/api/data.json',(json)=>{
    if(!json){
        alert('error');
    }
    state.project=json;
    console.log(json);
    carouselPortfolio(state.project);
});

const carouselPortfolio = (data)=> {
    const divCarousel = $('<div class="owl-carousel owl-theme"></div>');
    data.forEach((elem)=>{
        const  item=$(`<div class="portfolio__item">
                <div class="col-xs-12 col-md-6"><img src="assets/images/projects/${elem.img}" alt=""></div>
                <div class="col-xs-12 col-md-6">
                    <h4>${elem.title} : ${elem.type}</h4>
                    <p class="hide-xs">${elem.description}</p>
                    <p><strong>Desarrollado con:</strong></p>
                </div>
            </div>`);
        const utils = $(`<div></div>`);
        elem.utils.forEach( e =>{
            utils.append(`<span>${e} | </span>`);
        });

        const links = $(`<br><br><div class="col-xs-12">
                            <a href="${elem.linkCode}" target="_blank"><i class="fa fa-code"></i>VER CÓDIGO</a>
                            <a href="${elem.linkPage}" target="_blank"><i class="fa fa-laptop"></i>VER APP</a>
                         </div>`);

        item.append(utils);
        item.append(links);
        divCarousel.append(item);
    });

    divCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('#portfolio').append(divCarousel);
    // return divCarousel;
 };
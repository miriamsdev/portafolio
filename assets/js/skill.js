const dataSkill=[
    {icon:"fa fa-laptop",
     tittle:"Development",
     subt:"Lo que me empodera",
     skill:[{name:"HTML5", clase:"icon-html5"},
            {name:"Javascript", clase:"icon-javascript"},
            {name:"CSS3", clase:"icon-css3"},
            {name:"Bootstrap", clase:"icon-bootstrap"},
            {name:"Sass", clase:"icon-sass"},
            {name:"Git", clase:"icon-git"},
            {name:"Gulp", clase:"icon-gulp"},
            {name:"", clase:"icon-jquery"},
            {name:"", clase:"icon-ajax"},
            {name:"", clase:"icon-nodejs"},
            {name:"", clase:"icon-materialize"},
            {name:"", clase:"icon-foundation"}
     ],
     bgcolor:"bg-b1"
    },
    {icon:"fa fa-github",
     tittle:"Project Management",
     subt:"Lo que me permite compartir en comunidad",
     skill:[{name:"Git Hub", clase:"icon-github"},
            {name:"Heroku", clase:"icon-heroku"},
            {name:"Trello", clase:"icon-trello"}
     ],
     bgcolor:"bg-b2"
    },
    {icon:"fa fa-smile-o",
     tittle:"Personal",
     subt:"Lo que puedo contribuir",
     skill:[ {name:"Buen manejo de las metodologías ágiles", clase:""},
             {name:"Me apasiona codear, sobre todo optimizar procesos.", clase:""},
             {name:"Me adapto con facilidad a nuevas tecnologías y marco de trabajo.", clase:""},
             {name:"Actualmente estoy enfocada en aprender React y poder aplicar en mis proyectos.", clase:""},
     ],
     bgcolor:"bg-b3"
    }];


$(_=>{
    dataSkill.forEach(element =>{
        const col=$('<div class="col xs-12 md-4"></div>');
        const skillBox=$(`<div class="box ${element.bgcolor}"></div>`);
        const span=$(`<span class="${element.icon} size-icon"></span>`);
        const h4=$(`<h4>${element.tittle}</h4>`);
        const h5=$(`<h5>${element.subt}</h5>`);
        const divSkills=$(`<div></div>`);

        element.skill.forEach(e =>{
            divSkills.append(`<div class="${e.clase}"><span>${e.name}</span></div>`);
        });

        skillBox.append(span);
        skillBox.append(h4);
        skillBox.append(h5);
        skillBox.append(divSkills);
        col.append(skillBox);
        $('.skills__row').append(col);
    });
});

const dataSkill=[
    {icon:"fa fa-laptop",
     tittle:"Development",
     subt:"Lo que me empodera",
     skill:[{name:"HTML5", clase:"icon-html5"},
            {name:"Javascript", clase:"icon-javascript"},
            {name:"CSS3", clase:"icon-css3"},
            {name:"Bootstrap", clase:"icon-bootstrap"},
            {name:"Sass", clase:"icon-sass"},
            {name:"GitHub", clase:"icon-git"},
            {name:"Gulp", clase:"icon-gulp"},
            {name:"", clase:"icon-jquery"},
            {name:"", clase:"icon-ajax"},
            {name:"Node.js", clase:"icon-nodejs"},
            {name:"Materalize", clase:"icon-materialize"},
            {name:"Foundation", clase:"icon-foundation"}
     ],
     bgcolor:"bg-box"
    },
    {icon:"fa fa-github",
     tittle:"Project Management",
     subt:"Lo que me permite compartir en comunidad",
     skill:[{name:"GitHub", clase:"icon-github"},
            {name:"Heroku", clase:"icon-heroku"},
            {name:"Trello", clase:"icon-trello"}
     ],
     bgcolor:"bg-box"
    },
    {icon:"fa fa-smile-o",
     tittle:"Soft Skills",
     subt:"Lo que puedo contribuir",
     skill:[ {name:"Iniciativa en el desarrollo de productos y trabajo en equipo.", clase:""},
             {name:"Enfoque en la optimización de procesos y buenas prácticas de desarrollo.", clase:""},
             {name:"Adaptabilidad a nuevas tecnologías y marcos de trabajo.", clase:""}
             // {name:"Actualmente estoy enfocada en aprender React y poder aplicarlo en mis proyectos.", clase:""}
     ],
     bgcolor:"bg-box"
    }];


$( _ =>{
    dataSkill.forEach(element =>{
        const col = $('<div class="col md-4"></div>');
        const skillBox = $(`<div class="box ${element.bgcolor}"></div>`);
        const span = $(`<span class="${element.icon} size-icon"></span>`);
        const h4 = $(`<h4>${element.tittle}</h4>`);
        const h5 = $(`<h5>${element.subt}</h5>`);
        const divSkills = $(`<div></div>`);

        element.skill.forEach(e =>{
            divSkills.append(`<div><div class="${e.clase}"></div><br><span>${e.name}</span></div>`);
        });

        skillBox.append(span);
        skillBox.append(h4);
        skillBox.append(h5);
        skillBox.append(divSkills);
        col.append(skillBox);
        $('.skills__row').append(col);
    });
});

const dataSkill=[
    {icon:"fa fa-laptop",
     tittle:"Development Skill",
     subt:"Lo que me da poder",
     skill:['HTML5', 'CSS3', 'Java Script', 'JQuery', 'Bootstrap', 'Foundation', 'Materialize', 'Sass']
    },
    {icon:"fa fa-github",
     tittle:"Project Managing Skill",
     subt:"Herramientas que uso",
     skill:['GIT', 'Github', 'Heroku', 'Trello']
    },
    {icon:"fa fa-smile-o",
     tittle:"Personal Skill",
     subt:"Lo que mejor hago",
     skill:['Trabajo en equipo', 'Responsabilidad']
    }];
function skillList(arrSkill){
    let list='';
    arrSkill.forEach(e =>{
        list+=`<p>- ${e}</p>`;
    });
    return list;
}
$(_=>{
    dataSkill.forEach(element =>{

        const skillBox=$('<div class="box col-md-4"></div>');
        const span=$(`<span class="${element.icon} size-icon"></span>`);
        const h2=$(`<h2>${element.tittle}</h2>`);
        const h3=$(`<h5>${element.subt}</h5>`);
        const div=$(`<div>${skillList(element.skill)}</div>`);

        skillBox.append(span);
        skillBox.append(h2);
        skillBox.append(h3);
        skillBox.append(div);
        $('.skills__row').append(skillBox);
    });
});

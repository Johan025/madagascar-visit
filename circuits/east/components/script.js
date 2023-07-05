const head_east=document.querySelector('.header');
const button_menu=document.querySelector('.logoBurger');
const ul_east=document.querySelector("ul");

button_menu.addEventListener('click',() =>{
    head_east.classList.toggle('hideshow_east');
    ul_east.classList.toggle('hideshow2');
  })
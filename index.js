// evenement bouton afficher version
const fenetreAng=document.querySelector('.fenetreFrancais');
const button=document.getElementById('ang');
const form=document.querySelector('form');

button.addEventListener ('click' , () =>{
   fenetreAng.classList.toggle('show');
})

//evenement responsive version telephone
const button_menu=document.querySelector('.logoBurger');
const head=document.querySelector('.header');
const tour=document.querySelector('.t');
const contact=document.querySelector('.c');
const about=document.querySelector('.a');
const ul=document.getElementById("ul");


button_menu.addEventListener('click',() =>{
    head.classList.toggle('hideshow');
    ul.classList.toggle('hideshow2');
})

about.addEventListener('click',() =>{
    head.classList.remove('hideshow');
    ul.classList.toggle('hideshow2');
})

tour.addEventListener('click',() =>{
    head.classList.remove('hideshow');
    ul.classList.toggle('hideshow2');
})

contact.addEventListener('click',() =>{
    head.classList.remove('hideshow');
    ul.classList.toggle('hideshow2');
})



document.querySelector('form').addEventListener("submit", (e)=>{
    e.preventDefault();

    // if ()
})


function ratio1(){

    const ratio= .58;
  
    const options={
      root:null,
      rootMargin:'0px',
      threshold:ratio,
    }
  
    const handleIntersect= function (entries,observer) {
      entries.forEach(function (entry){
        console.log(entry.intersectionRatio );
        if (entry.intersectionRatio > ratio){ 
          entry.target.classList.add('show_')
      
        }
  
        else   if (entry.intersectionRatio < ratio){ 
          entry.target.classList.remove('show_')
      
        }
  
        
      })
    }
    const observer= new IntersectionObserver(handleIntersect,options)
   document.querySelectorAll('.hide_').forEach(function(h){
  observer.observe(h);
    })
  }
  ratio1();





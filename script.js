let link = document.querySelectorAll(".main .main__link a");
let link_index = document.querySelectorAll(".main .main__link a");
let counter = 0;


link_index.forEach(el => {
  el.addEventListener("click", () => { 
       link_index.forEach(e => {
         console.log(e)
         e.classList.remove("active")
       })
     el.classList.add("active")
     
      
    
  })
})


let modal = document.querySelector('.header__modal');
let burger = document.querySelector('.wrapper .header .header__left .header-burger__left img')
let exit = document.querySelector('.header__modal .header-head__modal .exit')
let CPS = document.querySelector('.main .main__description img')
let text = document.querySelector('.main .text');
let body = document.body;
let main = document.querySelector('.main');
let header = document.querySelector('.header');

console.log(text)


burger.addEventListener('click', () => {
   counter++;
   if(counter %2 == 1) {
    modal.style.display = "block";
    CPS.style.position = "static";
    main.style.opacity = "0.2";
    header.style.opacity = "0.2";
    body.style.overflowY = "hidden";
   } 

   exit.addEventListener('click', () => {
    counter++;
    if(counter %2 == 0) {
    modal.style.display = "none";
    CPS.style.position = "absolute";
    main.style.opacity = "1";
    header.style.opacity = "1";
     }
   
   })
   
})

console.log(CPS)
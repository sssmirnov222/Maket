import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

let link = document.querySelectorAll(".main .main__link a");
let link_index = document.querySelectorAll(".main .main__link a");
let modal = document.querySelector('.header__modal');
let burger = document.querySelector('.wrapper .header .header__left .header-burger__left img')
let exit = document.querySelector('.header__modal .header-head__modal .exit')
let CPS = document.querySelector('.wrapper .main .main__description img')
let text = document.querySelector('.wrapper .main .text');
let body = document.body;
let main = document.querySelector('.main');
let header = document.querySelector('.header');
let down = document.querySelector('.main__servicbrands .down');
let up = document.querySelector('.main__servicbrands .up');
let lenovo = document.querySelector('.main__servicbrands .main-devices .lenovo_two');
let samsung = document.querySelector('.main__servicbrands .main-devices .Samsung_two');
let apple = document.querySelector('.main__servicbrands .main-devices .Apple_two');
let call = document.querySelector(".aside__modal .footer .aside-foot__modal .call")
let feedback = document.querySelector(".header__feedback")
let back = document.querySelector(".header-back__feedback")
let callMod = document.querySelector('.header__modal .footer .header-foot__modal .callMod')


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



// модалка
burger.addEventListener('click', () => {
   counter+=1;
   if(counter === 1) {
    modal.style.display = "block";
    main.style.opacity = "0.2";
    header.style.opacity = "0.2";
    body.style.overflowY = "hidden";
   } 


   exit.addEventListener('click', () => {
    counter = 0;
    if(counter === 0) {
    modal.style.display = "none";
    main.style.opacity = "1";
    header.style.opacity = "1";
    body.style.overflowY = "auto";
     }
   }
   )
   
})




// скрыть и показать элементы
down.addEventListener("click", () => {
  counter+=1;
  if(counter === 1) {
   lenovo.style.display = "inline-block";
    samsung.style.display = "inline-block";
    apple.style.display = "inline-block";
    up.style.display = "flex"
    down.style.display = "none";
   }   
})

up.addEventListener("click", () => {
  counter = 0;
  if(counter === 0) {

 lenovo.style.display = "none";
    samsung.style.display = "none";
    apple.style.display = "none";
    up.style.display = "none"
    down.style.display = "flex";
   } 
})




//слайдер
let swiper = new Swiper('.swiper-container', {
  //  slidesPerView: 2,
  //  slideClass: "slide",
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {

    0: {
      slidesPerView:2,
      spaceBetween: 10
    },

    320: {
      slidesPerView:1.3,
      spaceBetween: 16
    },

    420: {
      slidesPerView:1.8,
      spaceBetween: 16
    },

    650: {
      slidesPerView:2.7,
      spaceBetween: 16
    },
  }
});






//feedback
call.addEventListener("click", () =>  {
  counter+=1;
  if(counter === 1) {
   feedback.style.display = "block" 
   feedback.style.opacity = "1";
   main.style.opacity = "0.1";
   modal.style.opacity = "0.1";
  }
  
  back.addEventListener("click", () => {
  counter = 0;
  if(counter === 0)  {
   feedback.style.display = "none";
   main.style.opacity = "1";
   modal.style.opacity = "1";
    }
  })

 }
)






// call
let chat = document.querySelector(".aside__modal .footer .aside-foot__modal .Chat")
let headerCall = document.querySelector(".header__call")
let headerBack = document.querySelector(".header-back__call")
console.log(back)


chat.addEventListener("click", () =>  {
  counter+=1;
  if(counter === 1) {
   headerCall.style.display = "block" 
   headerCall.style.opacity = "1";
   main.style.opacity = "0.1";
   modal.style.opacity = "0.1";
  }
  
  headerBack.addEventListener("click", () => {
  counter = 0;
  if(counter === 0)  {
   headerCall.style.display = "none";
   main.style.opacity = "1";
   modal.style.opacity = "1";
    }
  })

 }
)





// переключение для aside
let listAside = document.querySelectorAll(".aside__modal ul li a span");

listAside.forEach(el => {
  el.addEventListener("click",() => {

     listAside.forEach(e => {
      e.classList.remove("grey")
     })
   el.classList.add("grey")

  })
 
})

let imgAside = document.querySelector(".aside__modal ul img");


let listAs = document.querySelectorAll(".aside__modal ul li a");
listAs.forEach(el => {
  el.addEventListener("click",() => {
    
    
   el.before(imgAside)
  })
})







//переключение на модалке
let listModal = document.querySelectorAll(".header__modal ul li a span");
console.log(listModal)

listModal.forEach(el => {
  el.addEventListener("click",() => {

     listModal.forEach(e => {
      e.classList.remove("grey")
     })
   el.classList.add("grey")

  })
 
})

let img = document.querySelector(".header__modal ul img");


let list = document.querySelectorAll(".header__modal ul li a");
list.forEach(el => {
  el.addEventListener("click",() => {
    
    
   el.before(img)
  })
})





// показать feedback и call на 320
callMod.addEventListener("click", () =>  {
  counter+=1;
  console.log(counter)
  if(counter) {
   feedback.style.display = "block" 
   feedback.style.opacity = "1";
   main.style.opacity = "0.1";
   modal.style.opacity = "0.1";
  }
  
  back.addEventListener("click", () => {
  counter = 0;
  if(counter === 0)  {
   feedback.style.display = "none";
   main.style.opacity = "0.1";
   modal.style.opacity = "1";
    }
  })

 }
)



let ChatMod = document.querySelector('.header__modal .footer .header-foot__modal .ChatMod')
ChatMod.addEventListener("click", () =>  {
  counter+=1;
  if(counter) {
   headerCall.style.display = "block" 
   headerCall.style.opacity = "1";
   main.style.opacity = "0.1";
   modal.style.opacity = "0.1";
  }
  
  headerBack.addEventListener("click", () => {
  counter = 0;
  if(counter === 0)  {
   headerCall.style.display = "none";
   main.style.opacity = "0.1";
   modal.style.opacity = "1";
    }
  })

 }
)


// отимизация

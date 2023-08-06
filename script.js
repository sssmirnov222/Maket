let link = document.querySelectorAll(".main .main__link a");
let link_index = document.querySelectorAll(".main .main__link a");
let first__link = document.querySelectorAll(".main .main__link .main-first__link ");
let counter = 0;

link.forEach((elem) => {
  
  elem.addEventListener("click", () => {
   
   counter++;
    link_index.forEach((el) => {
       
      if (elem.innerHTML == el.innerHTML) {

        if(counter %2 == 1) {
            elem.classList.add("active");
            elem.classList.remove("noactive");
        }
        if(counter %2 == 0) {
          elem.classList.remove("active");
          elem.classList.add("noactive");
      }
        
      }
  

    });
  });
});

// first__link.addEventListener("click", () => {
//   counter++;
//   if(counter %2 == 0) {
              
//     first__link.classList.remove(".main-first__link");
// }

// if(counter %2 == 1) {
//   first__link.classList.add(".main-first__link");
// }
// })
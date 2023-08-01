let link = document.querySelectorAll(".main .main__link a");
let link_index = document.querySelectorAll(".main .main__link a");
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

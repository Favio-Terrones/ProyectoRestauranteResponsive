

const imagenes = document.querySelectorAll(".gallery__img");
const modal = document.querySelector("#modal");
const imagenModal = document.querySelector("#modal__img");
const btnModal = document.querySelector("#modal__boton");


for(let i=0;i<imagenes.length;i++){
      imagenes[i].addEventListener('click',(event)=>{
          modal.classList.add("modal--open");
          let src = event.target.src;
          imagenModal.setAttribute("src",src);
      });
}

btnModal.addEventListener('click',()=>{
    modal.classList.remove("modal--open");
})








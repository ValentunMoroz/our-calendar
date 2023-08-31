
import flatpickr from 'flatpickr';
  import { tarmer } from './helpers/calendar';             
import { hadlerClickText } from './helpers/question';





document.addEventListener('mousemove',e=>{
    Object.assign(document.documentElement,{
        style:`
        --move-x : ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y :${(e.clientY - window.innerHeight / 2) * -.01}deg
        `
    })
})





















 

const textTwoYears = document.querySelector(".js-timer")




 
const firstText = document.querySelector("h2")
const buttonYes = document.querySelector(".js-yes")



const select = document.querySelector("select")


const buttonText = document.querySelector(".js-button-text")
const text = document.querySelector(".js-text")
const inputAnswer = document.querySelector(".js-text-input")

// const textTwo = `<h1> РАЗОМ:</h1>`

// textTwoYears.innerHTML = textTwo




buttonText.addEventListener("click", hadlerClick)


function hadlerClick(){
    hadlerClickText()
}





// ========================== перший текст ====================

buttonYes.addEventListener("click", handlerClickYes)

function handlerClickYes(evt){

    if(option == +18){
        firstText.textContent ="Скоро..."
        return
    }
   inputAnswer.removeAttribute("hidden")
   buttonText.removeAttribute("hidden")
    firstText.textContent ="Почнемо з легкого:"
    text.textContent = "Дата нашого знайомства?"
    
}


//  ============================= питання ======================


// =========================== РАНДОМНЕ ФОТО =====================








select.addEventListener("blur",hadlerSelect)
let option
function hadlerSelect(evt){
   
option=evt.target.value
console.dir(option);
}
//===============================  TARMER ==========================

tarmer()

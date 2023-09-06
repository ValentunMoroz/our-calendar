
import flatpickr from 'flatpickr';
  import { tarmer } from './helpers/calendar';             
import { hadlerClickText } from './helpers/question';

import throttle from "lodash.throttle"

const guard = document.querySelector('.guard')





// document.addEventListener('mousemove',hadlerMouse)

function hadlerMouse(e){
    // console.log(e);???????????????
    
    Object.assign(document.documentElement,{
        style:`
        --move-x : ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y :${(e.clientY - window.innerHeight / 2) * -.01}deg
        `
    })
}


document.addEventListener('keydown',hanglerKey)

function hanglerKey(e){
    e.preventDefault()
    document.removeEventListener('keydown',hanglerKey)
}






const options = {
   
    threshold: 1.0,
  };
const observer = new IntersectionObserver(hanglerload, options)
observer.observe(guard)
function hanglerload(entries){
    entries.forEach(({isIntersecting}) => {
        if(isIntersecting){
    
            document.removeEventListener('mousemove',hadlerMouse)
        }else{
            document.addEventListener('mousemove',hadlerMouse)
        }
        
    });
}











 

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

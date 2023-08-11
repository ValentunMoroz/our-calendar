
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css"

const daysDifference = document.querySelector('span[data-days]');
const hoursDifference = document.querySelector('span[data-hours]');
const minutesDifference = document.querySelector('span[data-minutes]');
const secondsDifference = document.querySelector('span[data-seconds]');

const button = document.querySelector(".js-button")
const input = document.querySelector("input")
 
const firstText = document.querySelector("h2")
const buttonYes = document.querySelector(".js-yes")

const div = document.querySelector(".js-container")




const buttonText = document.querySelector(".js-button-text")
const text = document.querySelector(".js-text")
const inputAnswer = document.querySelector(".js-text-input")

 const img = document.querySelector(".img")
 const imgSrc = img.src.slice(21)
 const img1 = document.querySelector(".img1")
//  const img = document.querySelector(".img")
//  const img = document.querySelector(".img")
//  const img = document.querySelector(".img")
//  const img = document.querySelector(".img")
console.log(imgSrc)


// let timeUser = new Date();
// inputAnswer.setAttribute("hidden",true)
// buttonText.setAttribute("hidden",true)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] >= options.defaultDate) {
        console.log("f");
        // Notify.failure('Please choose a date in the future');
        return;
      }
  
      if (selectedDates[0] > options.defaultDate) {
        startButton.disabled = false;
      }
    },
  
};
// flatpickr();



// function handlerClick() {
    const interval = setInterval(() => {
        let timeUser = new Date();
        const firstDay = new Date("08.13.2023")
        const { days, hours, minutes, seconds } = convertMs(Number(firstDay) - Number(timeUser));
       
        daysDifference.textContent = addLeadingZero(days);
        hoursDifference.textContent = addLeadingZero(hours);
        minutesDifference.textContent = addLeadingZero(minutes);
        secondsDifference.textContent = addLeadingZero(seconds);
        
        //   input.disabled = true
        //   startButton.disabled = true;
        //   if (timeUser - currentDate < 1000){
            //      clearInterval(interval)
            //      input.disabled = false
            
            //     };
        }, 
    1000);
    
  
    function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  
  function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
}


// const firstDay = new Date("05.13.2021")

input.addEventListener("input", hadlerInpup)
button.addEventListener("click", handlerClick)

let num
function hadlerInpup(evt){
    // console.log(evt.target.value);
    num = evt.target.value
}


function handlerClick(evt){
    console.log(num);
    // console.log(Number(num) === 2);
    if(num === "13.05.2021"){
        console.log("перше привіт");
    }else if(num ){
console.log("object");
    }
}

// ========================== перший текст ====================

buttonYes.addEventListener("click", handlerClickYes)

function handlerClickYes(evt){
   buttonYes.setAttribute("hidden",true)
   inputAnswer.removeAttribute("hidden")
   buttonText.removeAttribute("hidden")
    firstText.textContent ="Почнемо з легкого:"
    text.textContent = "Дата нашого знайомства?"
    buttonYes.remove()
}


//  ============================= питання ======================

buttonText.addEventListener("click", hadlerClickText)
inputAnswer.addEventListener("input",hadlerAnswer)

let answer
function hadlerAnswer(evt) {
    answer = evt.target.value
}





function hadlerClickText(evt) {
if(answer == "13.05.2021"){
    firstText.textContent ="Молодець:"
    text.textContent = "А час пам'ятаєш?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${imgSrc} alt="">

`)
instance.show()
    return
}
if(answer == "23:54"){
    firstText.textContent = " Да, я знаю що на скрині був час, просто спочатку придумувалися питання, і взагалі це тест на уважність, продовжимо:"
    text.textContent = "В який день ми вперше погуляли?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${'/date.af42eefe.png'} alt="">

`)
instance.show()
    return
}
if(answer == "23:56"){
    firstText.textContent = " Да, я знаю що на скрині був тчас, просто спочатку придумувалися питання, і взагалі це тест на уважність, продовжимо:"
    text.textContent = "В який день ми вперше погуляли?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${'/hello.160a79e1.png'} alt="">

`)
instance.show()
    return
}
}





// var img = new Image(); // Создаёт новый элемент изображения
// img.src = "/hello.png"; // Устанавливает путь
// div.appendChild(img)

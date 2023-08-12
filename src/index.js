
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css"
                   




const r = {
    src : "./images/pho1.jpg"  
}




const body = document.querySelector("body")


 const divTimer = document.querySelector(".field")
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
 const imgSrc = img.src.slice(-18)
 const img1 = document.querySelector(".img1")
 const img1Src = img1.src.slice(-17)
 const img2 = document.querySelector(".img2")
 const img2Src = img2.src.slice(-17)
 const img3 = document.querySelector(".img3")
 const img3Src = img3.src.slice(-17)
 const img4 = document.querySelector(".img4")
 const img4Src = img4.src.slice(-17)



const imgLove =document.querySelector(".love")
const loveSrc  = imgLove.src.slice(-17)












 //  const img = document.querySelector(".img")
 //  const img = document.querySelector(".img")
 //  const img = document.querySelector(".img")
 console.dir(img);
 console.log(img1Src)
 console.log(img2Src);





 const img5 = document.querySelector(".img5")
 const img5Src = img5.src.slice(-16)
 const img6 = document.querySelector(".img6")
 const img6Src = img6.src.slice(-16)
 const img7 = document.querySelector(".img7")
 const img7Src = img7.src.slice(-16)
 const img8 = document.querySelector(".img8")
 const img8Src = img8.src.slice(-16)
 const img9 = document.querySelector(".img9")
 const img9Src = img9.src.slice(-16)
 const img10 = document.querySelector(".img10")
 const img10Src = img10.src.slice(-17)
 const img11 = document.querySelector(".img11")
 const img11Src = img11.src.slice(-17)
 const img12 = document.querySelector(".img12")
 const img12Src = img12.src.slice(-17)
 const img13 = document.querySelector(".img13")
 const img13Src = img13.src.slice(-16)
 const img14 = document.querySelector(".img14")
 const img14Src = img14.src.slice(-16)
 const img15 = document.querySelector(".img15")
 const img15Src = img15.src.slice(-17)
 const img16 = document.querySelector(".img16")
 const img16Src = img16.src.slice(-17)
 const img17 = document.querySelector(".img17")
 const img17Src = img17.src.slice(-17)
 const img18 = document.querySelector(".img18")
 const img18Src = img18.src.slice(-17)
 const img19 = document.querySelector(".img19")
 const img19Src = img19.src.slice(-17)
 const img21 = document.querySelector(".img21")
 const img21Src = img21.src.slice(-17)
 const img22 = document.querySelector(".img21")
 const img22Src = img22.src.slice(-17)
 const img23 = document.querySelector(".img22")
 const img23Src = img23.src.slice(-17)





// console.log(img16Src);

 

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



// function () { 
    const textTwo = `<h1> РАЗОМ ДВА РОКИ</h1>`
    const interval = setInterval(() => {
        let timeUser = new Date();
        let firstDay = new Date("08.13.2023 ")
        if (Number(firstDay) - Number(timeUser) < 0){
            clearInterval(interval)
            //  input.disabled = false
            body.style.backgroundImage = 'url("https://bogatyr.club/uploads/posts/2021-11/1636945275_1-bogatyr-club-p-krasivii-fon-s-serdechkami-1.jpg")'
divTimer.innerHTML = textTwo

          return 
        };
        const { days, hours, minutes, seconds } = convertMs(Number(firstDay) - Number(timeUser));
       
        daysDifference.textContent = addLeadingZero(days);
        hoursDifference.textContent = addLeadingZero(hours);
        minutesDifference.textContent = addLeadingZero(minutes);
        secondsDifference.textContent = addLeadingZero(seconds);
        
        //   input.disabled = true
        //   startButton.disabled = true;
         
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
<img src=${img1Src} alt="">

`)
instance.show()
    return
}
if(answer == "неділя"){
    firstText.textContent = "Умнічка "
    text.textContent = "і як тобі наша прогулянка, сподобалася?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img2Src} alt="">

`)
instance.show()
    return
}
if(answer == "так"){
    firstText.textContent = "Мені теж сподобалося "
    text.textContent = "яке слово з нашої другої зустрічі я тобі згадую?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${'img4Src'} alt="aoto">

`)
instance.show()
    return
}
if(answer == "одолженіє"){
    firstText.textContent = "Да,да, я тобі це завжди згадувати буду "
    text.textContent = "за який смайлік ти зі мною дуже багато сперечалася?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img4Src} alt="aoto" width="500">
<p class =" text">Бачиш що з одолженія вийшло</p>

`)
instance.show()
    return
}
// if(answer == "сердечко"){
//     firstText.textContent = "Да,да, я тобі це завжди згадувати буду "
//     text.textContent = "за який смайлік ти зі мною дуже багато сперечалася?"
//     input.value = ""
//     const instance = basicLightbox.create(`
// <img src=${img3Src} alt="aoto" >

// `)
// instance.show()
//     return
// }
if(answer == "сердечко"){
    firstText.textContent = "Правильно, але ти й сперечалася тоді, Тут мало бути питання про кількість сердечок, але телеграм їх не рахує😅, тому: "
    text.textContent = "На твою думку скільки разів в переписці зустрічається слово люблю?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img3Src} alt="aoto" >

`)
instance.show()
    return
}
if(answer > 5700){
    firstText.textContent = "А ще більше сказано в житті "
    text.textContent = "Якого слова в переписці більше: кохана чи коханий?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${loveSrc} alt="" >

`)
instance.show()
    return
}

if(answer== "коханий"){
    firstText.textContent = "Практично в два рази, айайай "
    text.textContent = "А пам'ятаєш чому ти мене вперше назвала котиком?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img23Src} alt="" >

`)
instance.show()
    return
}
if(answer== "з жалості"){
    firstText.textContent = "Тоже мені😒 "
    text.textContent = "А в якому місяці я вперше тобі сказав що люблю тебе?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img13Src} alt="" >

`)
instance.show()
    return
}
if(answer== "лютий"){
    firstText.textContent = "Умнічка "
    text.textContent = "далі буде..."
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img15Src} alt="" >

`)
instance.show()
    return
}
}





// var img9 = new Image(img); // Создаёт новый элемент изображения
// img9.src = r.src // Устанавливает путь
// div.appendChild(img9)
// console.dir(img9);
// console.dir(new Image(img));
console.log(img13Src);
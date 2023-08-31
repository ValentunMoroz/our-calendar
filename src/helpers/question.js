
import "basiclightbox/dist/basicLightbox.min.css"
import * as basicLightbox from 'basiclightbox'
import { arrImg } from './img'



const firstText = document.querySelector("h2")
const text = document.querySelector(".js-text")
const body = document.querySelector("body")


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
const img13 = document.querySelector(".img13")
const img13Src = img13.src.slice(-16)
const img15 = document.querySelector(".img15")
const img15Src = img15.src.slice(-17)

const img23 = document.querySelector(".img22")
const img23Src = img23.src.slice(-12)












const inputAnswer = document.querySelector(".js-text-input")
const buttonText = document.querySelector(".js-button-text")




inputAnswer.addEventListener("input",hadlerAnswer)
let answer



function hadlerAnswer(evt) {
    answer = evt.target.value
}





function hadlerClickText() {

switch (answer) {
    case "13.05.2021":
        firstText.textContent ="Молодець:"
        text.textContent = "А час пам'ятаєш?"
        inputAnswer.value = ""
        basicLightbox.create(`
    <img src=${imgSrc} alt="">
    `).show()
        return
        case "23:54":

        firstText.textContent = " Да, я знаю що на скрині був час, просто спочатку придумувалися питання, і взагалі це тест на уважність, продовжимо:"
        text.textContent = "В який день ми вперше погуляли?"
        inputAnswer.value = ""
        basicLightbox.create(`
    <img src=${img1Src} alt="">
    
    `).show();
   return;
    case  "неділя":
        firstText.textContent = "Умнічка "
        text.textContent = "і як тобі наша прогулянка, сподобалася?"
        inputAnswer.value = ""
basicLightbox.create(`
    <img src=${img2Src} alt="">
    
    `).show()
    return;
    case "так":
        firstText.textContent = "Мені теж сподобалося "
        text.textContent = "яке слово з нашої другої зустрічі я тобі згадую?"
        inputAnswer.value = ""
       basicLightbox.create(`
    <img src=${'img4Src'} alt="aoto">
    `).show()
    return;
    case "одолженіє":
    firstText.textContent = "Да,да, я тобі це завжди згадувати буду "
    text.textContent = "за який смайлік ти зі мною дуже багато сперечалася?"
    inputAnswer.value = ""
    basicLightbox.create(`
<img src=${img4Src} alt="aoto" width="500">
<p class =" text">Бачиш що з одолженія вийшло</p>

`).show()
return;
case "сердечко":
firstText.textContent = "Правильно, але ти й сперечалася тоді, Тут мало бути питання про кількість сердечок, але телеграм їх не рахує😅, тому: "
text.textContent = "На твою думку скільки разів в переписці зустрічається слово люблю?"
inputAnswer.value = ""
 basicLightbox.create(`
<img src=${img3Src} alt="aoto" >
`).show()
return;
case "кохана":
    firstText.textContent = "Практично в два рази, айайай "
    text.textContent = "А пам'ятаєш чому ти мене вперше назвала котиком?"
    inputAnswer.value = ""
  basicLightbox.create(`
<img src=${img23Src} alt="" >

`).show()
return;
case "з жалості":
firstText.textContent = "Тоже мені😒 "
text.textContent = "А в якому місяці я вперше тобі сказав що люблю тебе?"
inputAnswer.value = ""
 basicLightbox.create(`
<img src=${img13Src} alt="" >

`).show()
return;
case "січень":
firstText.textContent = "Умнічка "
text.textContent = "хочеш побачити невеличкий сюрприз?"
inputAnswer.value = ""
 basicLightbox.create(`
<img src=${img15Src} alt="" >

`).show()
buttonText.textContent = "дивитись сюрприз"
return;
case "хочу":
    randomPhoto()
   return;
}











if(answer > 5700){
    firstText.textContent = "А ще більше сказано в житті "
    text.textContent = "Якого слова в переписці більше: кохана чи коханий?"
    inputAnswer.value = ""
 basicLightbox.create(`
<img src=${loveSrc} alt="" >

`).show()
    return
}
inputAnswer.value = ""
console.log('Золотце відповідь не правильна');
}

// =========================== РАНДОМНЕ ФОТО =====================

function randomPhoto(){
    body.innerHTML = ""
    setInterval(()=>{
        const random = getNumber()
        
        body.style.backgroundImage = `url(${arrImg[random].src}),url(${"https://klike.net/uploads/posts/2022-09/1664008578_g-8.jpg"})`
        body.style.backgroundSize = " 480px, 1700px"
        body.style.backgroundRepeat = "repeat-x"
        body.style.backgroundPosition = "50% 0"
    }, 1000)
    
}

function getNumber(){
    // Math.random()
 return Math.floor( Math.random()* (28-0) + 0);
}


export {hadlerClickText}
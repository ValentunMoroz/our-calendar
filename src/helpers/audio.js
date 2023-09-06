

const audioLoveYou = document.querySelector('.loveyou')
const audioMeBaby = document.querySelector('.mebaby')
const audioAdoreYou = document.querySelector('.adoreyou')
const audioThankYou = document.querySelector('.thankyou')
const audioTheBest = document.querySelector('.thebest')
const audioYouDoMeHappy = document.querySelector('.youdomehappy')

const audioContainer = document.querySelector('.js-cube__container')

console.log(audioLoveYou);
function onPlayAudio(e){
    if(e.target.nodeName !=="SPAN"){
        return
    }
    const text = e.target.innerHTML
    console.dir(e.target);
    if(text ===   "Кохаю тебе❤️"){
       audioLoveYou.play()
       return
    }else if(text===  "Моя маленька🤗"){
audioMeBaby.play()
    }else if(text === "Дякую що ти в мене є😘"){
            audioThankYou.play()
   }else if(text ===  "Обожнюю тебе💞"){
     audioAdoreYou.play()
  }else if(text ===  "Ти найкраща💕"){
  audioTheBest.play()
   }else if(text === "Ти робиш мене щасливим💖"){
        audioYouDoMeHappy.play()
    }

}








function handlerAudio(x,y){
    const positionCubeY = (x===0 && y===0 )||(x===0&&y ===90 )||(x===0&&y===270 )||(x===0&&y===180 )
    const positionCubeX = (y===0 && x === 270)||(y===0 &&x===90)
if(positionCubeY || positionCubeX ){
    console.log('if');
    audioContainer.addEventListener('click', onPlayAudio)
    return
}
audioContainer.removeEventListener('click', onPlayAudio)

}
handlerAudio(0,0)

export {handlerAudio}
 
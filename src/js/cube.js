// const body = document.querySelector('.cube')
// console.dir(body);
// if(body.scrollHeight == 739){
//     console.log('object');
// }
import { handlerAudio } from "../helpers/audio"
const cube = document.querySelector('.cube')
const cubeAll = document.querySelectorAll('.cube__item')
const cubeContainer = document.querySelector(".cube__container")
const cubeItem = document.querySelector(".cube__item")
const guard = document.querySelector('.guard')
let rotateX=0
let rotateY=0
setInterval(()=>{
    rotateY +=8
    document.querySelector('.cube__container').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
},100);
 function hanglerKey (e){
    e.preventDefault()
if(e.keyCode === 37){
    rotateY +=6
}else if(e.keyCode === 38){
    rotateX -=6
}else if(e.keyCode === 39){
    rotateY -=6
}else if(e.keyCode === 40){
    rotateX +=6
}
console.log('x',rotateX);
console.log('y',rotateY);
if(rotateY === 360){
    rotateY = 0
}else if(rotateY===-6){
    rotateY = 354
}
if(rotateX === 360){
    rotateX = 0
}else if(rotateX===-6){
    rotateX = 354
    
}
// setInterval(()=>{
//     rotateY +=6
  
// },300);
handlerAudio(rotateX,rotateY)
document.querySelector('.cube__container').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}
const options = {
    rootMargin: "-100px",
   
  };
const observer = new IntersectionObserver(hanglerload, options)
observer.observe(guard)



function hanglerload(entries){
    entries.forEach(({isIntersecting}) => {
        if(isIntersecting){
document.addEventListener('keydown',hanglerKey)

        }
        
    });
}
let x = 360
let z = 180


const s = setInterval(() => {
    if(x===40){
    
        clearInterval(s)
        cube.classList.replace("cube","cube-n")
        cubeContainer.classList.replace("cube__container","cube__container-n")
           cubeAll[0].classList.add("cube__item","cube__item-n")
         cubeAll[1].classList.add("cube__item","cube__item-n")
         cubeAll[2].classList.add("cube__item","cube__item-n")
         cubeAll[3].classList.add("cube__item","cube__item-n")
          cubeAll[4].classList.add("cube__item","cube__item-n")
      cubeAll[5].classList.add("cube__item","cube__item-n")
      cubeAll[0].style.transform =` none`
    cubeAll[1].style.transform =` none`
    cubeAll[2].style.transform =` none`
    cubeAll[3].style.transform =` none`
    cubeAll[4].style.transform =` none`
    cubeAll[5].style.transform =` none`
    cube.style.width= "100%"
      return
        
    }
    cube.style.width = `${x}px`
    cube.style.height = `${x}px`
    cubeAll[0].style.transform =` rotateX(90deg) translateZ(${z}px)`
    cubeAll[1].style.transform =` rotateY(90deg) translateZ(${z}px)`
    cubeAll[2].style.transform =` rotateY(-90deg) translateZ(${z}px)`
    cubeAll[3].style.transform =` rotateX(-90deg) translateZ(${z}px)`
    cubeAll[4].style.transform =` translateZ(${z}px)`
    cubeAll[5].style.transform =` rotateY(180deg) translateZ(${z}px)`
    x-=10
    z -=5
// if(x==50){
//     cubeAll[0].textContent=""
//     cubeAll[1].textContent=""
//     cubeAll[2].textContent=""
//     cubeAll[3].textContent=""
//     cubeAll[4].textContent=""
//     cubeAll[5].textContent=""
// }

}, 1000);
const e=document.querySelector(".loveyou"),o=document.querySelector(".mebaby"),t=document.querySelector(".adoreyou"),n=document.querySelector(".thankyou"),r=document.querySelector(".thebest"),c=document.querySelector(".youdomehappy"),u=document.querySelector(".js-cube__container");function l(u){if("SPAN"!==u.target.nodeName)return;const l=u.target.innerHTML;console.dir(u.target),"Кохаю тебе❤️"!==l?"Моя маленька🤗"===l?o.play():"Дякую що ти в мене є😘"===l?n.play():"Обожнюю тебе💞"===l?t.play():"Ти найкраща💕"===l?r.play():"Ти робиш мене щасливим💖"===l&&c.play():e.play()}function y(e,o){if(0===e&&0===o||0===e&&90===o||0===e&&270===o||0===e&&180===o||(0===o&&270===e||0===o&&90===e))return console.log("if"),void u.addEventListener("click",l);u.removeEventListener("click",l)}console.log(e),y(0,0);document.querySelector(".cube"),document.querySelectorAll(".cube__item"),document.querySelector(".cube__container"),document.querySelector(".cube__item");const d=document.querySelector(".guard");let a=0,i=0;function m(e){e.preventDefault(),37===e.keyCode?i+=6:38===e.keyCode?a-=6:39===e.keyCode?i-=6:40===e.keyCode&&(a+=6),console.log("x",a),console.log("y",i),360===i?i=0:-6===i&&(i=354),360===a?a=0:-6===a&&(a=354),y(a,i),document.querySelector(".cube__container").style.transform=`rotateX(${a}deg) rotateY(${i}deg)`}new IntersectionObserver((function(e){e.forEach((({isIntersecting:e})=>{e&&document.addEventListener("keydown",m)}))}),{rootMargin:"-100px"}).observe(d);
//# sourceMappingURL=index.d9f87918.js.map
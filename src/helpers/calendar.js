

const daysDifference = document.querySelector('span[data-days]');
const hoursDifference = document.querySelector('span[data-hours]');
const minutesDifference = document.querySelector('span[data-minutes]');
const secondsDifference = document.querySelector('span[data-seconds]');

// const input = document.querySelector("input")











let timeUser = new Date();
// inputAnswer.setAttribute("hidden",true)
// buttonText.setAttribute("hidden",true)

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] >= options.defaultDate) {
//         console.log("f");
//         // Notify.failure('Please choose a date in the future');
//         return;
//       }
  
//       if (selectedDates[0] > options.defaultDate) {
//         startButton.disabled = false;
//       }
//     },
  
// };
// flatpickr();




  
function tarmer(){
    const interval = setInterval(() => {
        let timeUser = new Date();
        let firstDay = new Date("05.13.2021 ")
      
        const { days, hours, minutes, seconds } = convertMs(Number(timeUser) - Number(firstDay));
       
        daysDifference.textContent = addLeadingZero(days);
        hoursDifference.textContent = addLeadingZero(hours);
        minutesDifference.textContent = addLeadingZero(minutes);
        secondsDifference.textContent = addLeadingZero(seconds);
        
        //   input.disabled = true
         
            }, 
            1000);}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  
  function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      
      const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
}




let num
function hadlerInpup(evt){
    num = evt.target.value
}



export {tarmer}
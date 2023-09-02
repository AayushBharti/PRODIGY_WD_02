let hours = 00;
let minutes = 00;
let seconds = 00;
let tens = 00;

let gethours = document.querySelector(".hours");
let getminutes = document.querySelector(".minutes");
let getseconds = document.querySelector(".seconds");
let gettens = document.querySelector(".tens");
let getlappy = document.getElementById("laprecord")

// btn
let getstart = document.querySelector(".btn-start");
let getstop = document.querySelector(".btn-stop");
let getreset = document.querySelector(".btn-reset");
let getlapse = document.querySelector(".btn-lapse");
let interval;

let lapNow =null;

getstart.addEventListener('click', () => {
  interval = setInterval(starttimer,10)
})
getstop.addEventListener('click', () => {
  clearInterval(interval)
})
getreset.addEventListener('click', () => {
  clearInterval(interval)
  tens="00"
  seconds="00"
  minutes="00"
  hours="00"
  gettens.innerHTML=tens;
  getseconds.innerHTML=seconds;
  getminutes.innerHTML=minutes;
  gethours.innerHTML=hours;
})

getlapse.addEventListener('click', () => {
    lapNow = `<div>${hours} : ${minutes} : ${seconds} : ${tens}</div>`;
    laprecord.innerHTML += lapNow;
  })

function starttimer() {
    tens++;
    if (tens <= 9) {
        gettens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        gettens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getseconds.innerHTML = '0' + seconds;
        tens = 0;
        gettens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getseconds.innerHTML = seconds;
    }
    if(seconds>59){
        minutes++;
        getminutes.innerHTML='0'+ minutes;
        seconds=0;
        getseconds.innerHTML='0'+0;
    }
    if(minutes>59){
        hours++;
        gethours.innerHTML='0'+ hours;
        minutes=0;
        getminutes.innerHTML='0'+ 0;
    }
}
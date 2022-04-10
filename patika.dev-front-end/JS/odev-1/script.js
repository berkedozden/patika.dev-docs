let name = prompt("Adınız nedir???");
let myName = document.querySelector('#myName');
myName.innerHTML = name;

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const d = new Date();
let day = weekday[d.getDay()];

let time = document.querySelector('#myClock');
window.onload = displayClock();
function displayClock(){
  let display = new Date().toLocaleTimeString();
  time.innerHTML = display + day;
  setTimeout(displayClock, 1000); 
}
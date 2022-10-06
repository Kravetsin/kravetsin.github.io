"use strict";

const MY_BIRTHDAY = "26.04.1999";
// alert(`my birthday is ${MY_BIRTHDAY}`);
// let age = prompt('How old are you?', 18);


const time = new Date().getHours();

let greeting;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("dataInfo") = greeting;

function scrollTopTop(){
  window.scrollTo({ 
      top:0,  
      behavior: 'smooth' 
  }) 
}


let scroll_ch;
function changeScroll(){
  document.getElementById('scroll_btn') = scroll_ch;

  scroll_ch = getComputedStyle(document.getElementById('scroll_btn'))
}
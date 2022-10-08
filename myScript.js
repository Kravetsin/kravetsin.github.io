"use strict";

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
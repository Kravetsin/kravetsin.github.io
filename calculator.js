"use strict";

let op; 
let result_g;

function accept_g() {

  switch (op) {
    case '300':
      result_g = 'Выбрано 300g';
      break;
    case '400':
      result_g = 'Выбрано 400g';
      break;
    case '180':
      result_g = 'Выбрано 180g';
      break;
  }

  switch (op) {
    case '300':
      arr = 0;
      break;
    case '400':
      arr = 1;
      break;
    case '180':
      arr = 2;
      break;
  }
  document.getElementById("result_g").innerHTML = result_g;
}
     
let arr;

let rrow = [104, 97, 180];
let nrow = [13, 7, 12];
let mrow = [8, 8, 15];

function accept_ks(){

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let num4 = Number(document.getElementById("num4").value);

  let result_all = ((num1 * rrow[arr]) + (num2 * nrow[arr]) + (num3 * mrow[arr]) + num4) + ' KS(штук)';

  document.getElementById('result_all').innerHTML = result_all;
}

let score = 0;
let updating = 1;

function level_up(){

  score = score + updating;

  document.getElementById('score').innerHTML = score
}

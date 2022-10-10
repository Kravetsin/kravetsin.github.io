"use strict";

// Функция для слайдера
function changeValue(event) {
    let value = event.target.value;
    let output = document.getElementById('output');
    output.value = value;
}


"use strict";

window.onload = init;

function init() {
 const greetBtn = document.getElementById("greetBtn");
 greetBtn.onclick = onGreetUserBtnClicked; 
}

function onGreetUserBtnClicked() {

    const nameField = document.getElementById("nameField");
    alert("Hi " + nameField.value);
}       

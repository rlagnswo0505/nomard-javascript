'use strict';

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetiongs");

const USER_LS = "currenUser",
    SHOWING_CN = "showing";

function paintGreetiong(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem();
    if (currentUser === null) {
        // he is not
    } else {
        // he is
        paintGreetiong(currentUser);
    }
}
function init() {
    loadName();
}
init();
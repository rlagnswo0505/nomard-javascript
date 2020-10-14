'use strict';

// 배경사진을 랜덤으로 추가하기
// math.random 을 이용해 랜덤 넘버를 가져올 수 있다.
const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
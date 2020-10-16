"use strict";

const COOREDS = "coords";

function handleGeoSucces(position) {
    console.log(position);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function handleGeoError() {
    console.log("Cant access geo location");
}

function loadCords() {
    const loadedCoords = localStorage.getItem(COOREDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
    }
}

function init() {}
init();

"use strict";
function changeColor() {
    var input = document.getElementById("rgbInput");
    document.body.style.background = input.value;
    input.value = "";
}
// MY SUPERIOR HEX CODE
function randomColor() {
    var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    var color = [];
    var i;
    for (i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 15);
        color.push(hex[randomNumber]);
    }
    document.body.style.background = "#" + color.join("");
}
//GABS VIRGIN INFERIOR RGB CODE *BARFS*
function gabsBadCode() {
    var gabsArray = [];
    var i;
    for (i = 0; i < 3; i++) {
        gabsArray.push(Math.floor(Math.random() * 255));
    }
    document.body.style.background = "rgb(" + gabsArray + ")";
}

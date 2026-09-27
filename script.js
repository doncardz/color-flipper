const colorDisplay = document.querySelector("#color-container");
const redButton = document.querySelector("#red-btn");
const blueButton = document.querySelector("#blue-btn");
const yellowButton = document.querySelector("#yellow-btn");
const hexCode = document.querySelector("#hexcode");

redButton.addEventListener("click", function() {
    colorDisplay.style.backgroundColor = "#FF0000";
    hexCode.style.color = "white";
    hexCode.textContent = "Hex code = #FF0000";
});

blueButton.addEventListener("click", function() {
    colorDisplay.style.backgroundColor = "#0000FF";
    hexCode.style.color = "white";
    hexCode.textContent = "Hex code = #0000FF";
});

yellowButton.addEventListener("click", function() {
    colorDisplay.style.backgroundColor = "#FFFF00";
    hexCode.style.color = "black";
    hexCode.textContent = "Hex code = #FFFF00";
});




document.addEventListener('DOMContentLoaded', function() {
let colorBox = document.getElementById("color-box");
let colorBtn = document.getElementById("change-color-btn");

colorBtn.addEventListener("click", function() {
    colorBox.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random integer between 0 and 255 for Red
    const g = Math.floor(Math.random() * 256); // Random integer between 0 and 255 for Green
    const b = Math.floor(Math.random() * 256); // Random integer between 0 and 255 for Blue
    return `rgb(${r}, ${g}, ${b})`; // Returns the RGB color string
}


});



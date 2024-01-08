const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const textRed = document.getElementById("red-text");
const textGreen = document.getElementById("green-text");
const textBlue = document.getElementById("blue-text");

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;

function updateColor(red, green, blue) {
  const colorRGB = `rgb(${red}, ${green}, ${blue})`; 
  document.body.style.backgroundColor = colorRGB;
}


inputRed.addEventListener('change', (e) => {

  red = e.target.value;
  textRed.innerText = red;
  updateColor(red, green, blue);
} );

inputGreen.addEventListener('change', (e) => {

  green = e.target.value;
  textGreen.innerText = green;
  updateColor(red, green, blue);
} );

inputBlue.addEventListener('change', (e) => {

  red = e.target.value;
  textBlue.innerText = red;
  updateColor(red, green, blue);
} );
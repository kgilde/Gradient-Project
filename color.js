var css = document.querySelector("h3"); //select the h3 title
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradient() {
  body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")"

  css.textContent = body.style.background + ";"; //adds text to h3
}

//color 1 needs an event listener - it's an input
color1.addEventListener("input", setGradient);

//color2 needs an event listener - it's an input
color2.addEventListener("input", setGradient);
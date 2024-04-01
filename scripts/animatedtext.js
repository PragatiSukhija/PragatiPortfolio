var i = 0;
var txt = "Hello! I am currently seeking new job opportunities as I am set to graduate in December 2024."
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
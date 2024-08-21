let number2 = 0;
function number() {
  number2++;
  document.getElementById("counter").innerText = number2;
}


function restart() {
  document.getElementById("counter").innerText = 0;
  number2 = 0
}

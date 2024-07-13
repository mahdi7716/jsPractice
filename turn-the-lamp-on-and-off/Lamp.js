let lampimg = document.getElementById("bulb");
let btn = document.getElementById("btn");

lampflag = false
function lamponoff(){
    


if (lampflag) {
  lampimg.setAttribute("src", "pic/bulboff.gif");
  btn.innerHTML = "TurnOn";
  lampflag = false;
} else {
  lampimg.setAttribute("src", "pic/bulbon.gif");
  btn.innerHTML = "TurnOff";
  lampflag = true;
}
}
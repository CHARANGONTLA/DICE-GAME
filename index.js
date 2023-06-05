var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var img1 = "images/dice" + randomNumber1 + ".png";

var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", img1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img2 = "images/dice" + randomNumber2 + ".png";

var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", img2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🥳Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins🥳 ";
} else {
  document.querySelector("h1").innerHTML = " 🥳Draw🥳 "
}

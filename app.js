document.querySelector(".animals").innerHTML += AnimalsUI();
document.querySelector(".animals").innerHTML += AnimalsUI("./Imgs/seals.png", "No More Seals");
document.querySelector(".animals").innerHTML += AnimalsUI("./Imgs/penguin.png", "No More Penguins");

document.querySelector(".self").innerHTML += SelfUI();
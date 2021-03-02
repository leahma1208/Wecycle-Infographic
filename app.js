document.querySelector(".animals").innerHTML += AnimalsUI();
document.querySelector(".animals").innerHTML += AnimalsUI("./Imgs/seals.png", "No More Seals");
document.querySelector(".animals").innerHTML += AnimalsUI("./Imgs/penguin.png", "No More Penguins");

document.querySelector(".self").innerHTML += SelfUI();
document.querySelector(".self").innerHTML += SelfUI("./Imgs/mug.png", "./Imgs/mug_DIY.png", "Use an old mug as a container for stationery", "mug",
"90", "400","300","300", "15", "250");
document.querySelector(".self").innerHTML += SelfUI("./Imgs/magazine.png", "./Imgs/paper_DIY.png", "Using magazines and extra paper for arts and crafts", "mag",
"85", "400","300","300","15", "250");

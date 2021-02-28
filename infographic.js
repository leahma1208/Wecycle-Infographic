//Magnifying Glass 
document.querySelector("#magnify").innerHTML += MagnifyingGlass();

//Phone
document.querySelector("#phone").innerHTML += PhoneUI();

//Flag quiz
document.querySelector("#flag-1").innerHTML += FlagUI();
document.querySelector("#flag-2").innerHTML += FlagUI(image = "public/images/italy.svg" , country = "Italy");
document.querySelector("#flag-3").innerHTML += FlagUI(image = "public/images/monaco.svg" , country = "Monaco");

document.querySelector("#flag-answer1").innerHTML += CountryTrue()
document.querySelector("#flag-answer2").innerHTML += CountryFalse()

//Recycle Quiz 
document.querySelector("#bin-1").innerHTML += RecycleBinUI('./public/images/gray_bin.png','Garbage');
document.querySelector("#bin-2").innerHTML += RecycleBinUI('./public/images/blue_bin.png','Recycle');
document.querySelector("#bin-3").innerHTML += RecycleBinUI('./public/images/green_bin.png','Compost');

document.querySelector("#recycleBin-answer1").innerHTML += RecycleTrue()
document.querySelector("#recycleBin-answer2").innerHTML += RecycleFalse()





//hyerin backup just in case
// document.querySelector(".country").innerHTML += QuizUI('./public/images/newzealand.png','New Zealand','red','flag1');
// document.querySelector(".country").innerHTML += QuizUI('./public/images/italy.png','Italy','red','flag2');
// document.querySelector(".country").innerHTML += QuizUI('./public/images/monaco.png','Monaco','green','flag3','Correct!','Canada’s landfill is roughly around the same size as Monacco');
// document.querySelector(".recyclebin").innerHTML += RecycleBinUI('./public/images/gray_bin.png','Garbage', 'bin');
// document.querySelector(".recyclebin").innerHTML += RecycleBinUI('./public/images/blue_bin.png','Recycle', 'bin');
// document.querySelector(".recyclebin").innerHTML += RecycleBinUI('./public/images/green_bin.png','Compost', 'bin');



// additional js

//flag part
function FlagAnswerTrue(){
    document.querySelector("#flag-answer1").style.display = "block"
    document.querySelector("#flag-answer1").style.opacity = "1"
    document.querySelector("#flag-answer2").style.display = "none"
}

function FlagAnswerFalse(){
    document.querySelector("#flag-answer1").style.display = "none"
    document.querySelector("#flag-answer2").style.display = "block"
    document.querySelector("#flag-answer2").style.transition = "opacity 1s"

}

//recycle part
function RecycleBinTrue(){
    document.querySelector("#recycleBin-answer1").style.display = "block"
    document.querySelector("#recycleBin-answer1").style.opacity = "1"
    document.querySelector("#recycleBin-answer2").style.display = "none"
}

function RecycleBinFalse(){
    document.querySelector("#recycleBin-answer1").style.display = "none"
    document.querySelector("#recycleBin-answer2").style.opacity = "1"
    document.querySelector("#recycleBin-answer2").style.display = "block"
}



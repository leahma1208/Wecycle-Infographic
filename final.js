//Introduction header
document.querySelector(".introheader").innerHTML += IntroUI();
document.querySelector(".introrecycle").innerHTML += RecycleUI();

//Phone question
document.querySelector(".questionhead").innerHTML += IntroUI("BEFORE WE BEGIN...<br>CAN YOU GUESS...");
document.querySelector(".questionbody").innerHTML += BodyTextUI("What percent of plastic is recycled <br> each year in Canada?");
document.querySelector(".phone").innerHTML += PhoneUI();
document.querySelector(".oceans-affect").innerHTML += SubCatUI("HOW ARE OCEANS <br> AFFECTED?");

//Fish Trapped
document.querySelector(".fish1").innerHTML += fishUI()
document.querySelector("#fish-par-1").innerHTML += BodyTextUI("<strong>Help!</strong>I'm stuck in this <br> plastic bag")
document.querySelector("#fish-par-2").innerHTML += BodyTextUI("<strong>Click on the right bin</strong> <br> to get me out!")
document.querySelector("#fish-par-3").innerHTML += BodyTextUI("<strong>Thank-you!</strong> You did it!")
document.querySelector("#hover").innerHTML += BodyTextUI("Hover Over the Bag!")
document.querySelector(".bag1").innerHTML += PlasticBagUI()


//recycle part 1
document.querySelector("#bin-1").innerHTML += RecycleBinUI('./public/images/gray_bin.png','Garbage');
document.querySelector("#bin-2").innerHTML += RecycleBinUI('./public/images/blue_bin.png','Recycle');
document.querySelector("#bin-3").innerHTML += RecycleBinUI('./public/images/green_bin.png','Compost');

document.querySelector("#recycleBin-answer1").innerHTML += RecycleTrue()
document.querySelector("#recycleBin-answer2").innerHTML += RecycleFalse()

//WENDY THE WHALE
document.querySelector("#wendy-debris").innerHTML += DebrisUI()
document.querySelector("#wendy-whale").innerHTML += WendyWhale()
document.querySelector("#wendy-par-1").innerHTML += BodyTextUI("<strong>Wendy the Whale</strong> might <br> <strong>mistakenly</strong> eat the plastic debris")
document.querySelector("#wendy-par-2").innerHTML += BodyTextUI("<strong>Click on the right waste bin</strong> <br> to help Wendy!")

//recycle part 2
document.querySelector("#bin-4").innerHTML += RecycleBinUI('./public/images/gray_bin.png','Garbage');
document.querySelector("#bin-5").innerHTML += RecycleBinUI('./public/images/blue_bin.png','Recycle');
document.querySelector("#bin-6").innerHTML += RecycleBinUI('./public/images/green_bin.png','Compost');

document.querySelector("#recycleBin-answer3").innerHTML += RecycleTrue()
document.querySelector("#recycleBin-answer4").innerHTML += RecycleFalse()

//magnifying part
document.querySelector(".what_microplastic").innerHTML += SubCatUI("FIRST OFF... WHAT IS <br> MICROPLASTIC?");
// document.querySelector("#magnify").innerHTML += MagnifyingGlass();


//additional js

//recycle part
function RecycleBinTrue(){
    document.querySelector("#recycleBin-answer1").style.display = "block"
    document.querySelector("#recycleBin-answer1").style.opacity = "1"
    document.querySelector("#recycleBin-answer2").style.display = "none"
    document.querySelector(".bag1").style.opacity = "0"
    document.querySelector("#fish-par-1").style.display = "none"
    document.querySelector("#fish-par-2").style.display = "none"
    document.querySelector("#fish-par-3").style.display = "block"
    document.querySelector("#hover").style.opacity = "0"
    
}

function RecycleBinTrue_2(){
    document.querySelector("#recycleBin-answer3").style.display = "block"
    document.querySelector("#recycleBin-answer3").style.opacity = "1"
    document.querySelector("#recycleBin-answer4").style.display = "none"
}

function RecycleBinFalse(){
    document.querySelector("#recycleBin-answer1").style.display = "none"
    document.querySelector("#recycleBin-answer2").style.opacity = "1"
    document.querySelector("#recycleBin-answer2").style.display = "block"
    document.querySelector("#fish-par-1").style.display = "block"
    document.querySelector("#fish-par-2").style.display = "block"
    document.querySelector("#fish-par-3").style.display = "none"
    document.querySelector(".bag1").style.opacity = "1"
    document.querySelector("#hover").style.opacity = "1"
    
}

function RecycleBinFalse_2(){
    document.querySelector("#recycleBin-answer3").style.display = "none"
    document.querySelector("#recycleBin-answer3").style.opacity = "1"
    document.querySelector("#recycleBin-answer4").style.display = "block"
}

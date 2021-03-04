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


//recycle part
document.querySelector("#bin-11").innerHTML += RecycleBinUI('./public/images/gray_bin.png','Garbage');
document.querySelector("#bin-22").innerHTML += RecycleBinUI('./public/images/blue_bin.png','Recycle');
document.querySelector("#bin-33").innerHTML += RecycleBinUI('./public/images/green_bin.png','Compost');

document.querySelector("#recycleBin-answer11").innerHTML += RecycleTrue("<strong>Incorrect!</strong><br>just like Wendy, sperm whales are the most<br>common species to die from ingesting<br>plastic")
document.querySelector("#recycleBin-answer22").innerHTML += RecycleFalse("That is <strong>correct!</strong><br>all items shown above <strong>NEED</strong> to be <br> recycled")

// microplastic part
document.querySelector("#microplastichead").innerHTML += SubCatUI("FIRST OFF... WHAT IS <br> MICROPLASTIC?");
document.querySelector("#closerlook").innerHTML += MagnifyingGlass();

//common items
document.querySelector("#commonheader").innerHTML += SubCatUI("COMMON ITEMS FOUND<br>IN MARINE LIFE")

document.querySelector(".interaction-text").innerHTML += BodyTextUI()
document.querySelector(".interaction-boat").innerHTML += BoatUI()

//URBAN CITIES HEADER
document.querySelector(".urban-head").innerHTML += SubCatUI("HOW ARE URBAN <br> CITIES AFFECTED?", "center")



document.querySelector(".items").innerHTML += ItemsUI("../common-items/imgs/bottle.png", "Beverage Bottles", 0);
document.querySelector(".items").innerHTML += ItemsUI("./common-items/imgs/can.png",  "Beverage Cans");
document.querySelector(".items").innerHTML += ItemsUI("./common-items/imgs/caps.png", "Caps and Lips", 0);
document.querySelector(".items").innerHTML += ItemsUI("./common-items/imgs/cigarette.png",  "Cigarettes", 10);
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/mask.png", "Face Masks", -20);
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/plasticbag.png", "Plastic Bags", -20);
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/straw.png", "Straws");
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/wrapper.png", "Food Wrapper", 150);













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

function RecycleBinTrue2(){
    document.querySelector("#recycleBin-answer11").style.display = "block"
    document.querySelector("#recycleBin-answer11").style.opacity = "1"
    document.querySelector("#recycleBin-answer22").style.display = "none"
    document.querySelector(".bag1").style.opacity = "0"
}

function RecycleBinFalse2(){
    document.querySelector("#recycleBin-answer11").style.display = "none"
    document.querySelector("#recycleBin-answer22").style.opacity = "1"
    document.querySelector("#recycleBin-answer22").style.display = "block"
}

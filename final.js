//Introduction header
document.querySelector(".introheader").innerHTML += IntroUI();
document.querySelector(".introrecycle").innerHTML += RecycleUI();

//Phone question
document.querySelector(".questionhead").innerHTML += IntroUI("BEFORE WE BEGIN...<br>CAN YOU GUESS...");
document.querySelector(".questionbody").innerHTML += BodyTextUI("What percent of plastic is recycled <br> each year in Canada?");
document.querySelector(".phone").innerHTML += PhoneUI();
document.querySelector(".oceans-affect").innerHTML += SubCatUI("HOW ARE OCEANS <br> AFFECTED?","center","#00406F", "90px;");

//Fish Trapped
document.querySelector(".fish1").innerHTML += fishUI()
document.querySelector("#fish-par-1").innerHTML += BodyTextUI("<strong>Help!</strong> I'm stuck in this <br> plastic bag")
document.querySelector("#fish-par-2").innerHTML += BodyTextUI("<strong>Click on the right bin</strong> <br> to get me out!")
document.querySelector("#fish-par-3").innerHTML += BodyTextUI("<strong>Thank-you!</strong> You did it!")
document.querySelector("#hover").innerHTML += BodyTextUI("Hover in and out of the bag!")
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

document.querySelector("#recycleBin-answer11").innerHTML += WhaleTrue()
document.querySelector("#recycleBin-answer22").innerHTML += WhaleFalse()

// microplastic part
document.querySelector("#microplastichead").innerHTML += SubCatUI("FIRST OFF... WHAT IS <br> MICROPLASTIC?", "left", "#00406F", "80px");
document.querySelector("#closerlook").innerHTML += MagnifyingGlass();

//common items
document.querySelector("#commonheader").innerHTML += SubCatUI("COMMON ITEMS FOUND<br>IN MARINE LIFE", "left","#033458")

document.querySelector(".interaction-text").innerHTML += BodyTextUI("Hover over the boat<br>to see the effects of transportation<br>and click to clean the ocean!", "center", "30px" )
document.querySelector(".interaction-boat").innerHTML += BoatUI()

document.querySelector(".items").innerHTML += ItemsUI("../common-items/imgs/bottle.png", "Beverage Bottles", 0);
document.querySelector(".items").innerHTML += ItemsUI("./common-items/imgs/can.png",  "Beverage Cans");
document.querySelector(".items").innerHTML += ItemsUI("./common-items/imgs/caps.png", "Caps and Lids", 0);
document.querySelector(".items").innerHTML += ItemsUI("./common-items/imgs/cigarette.png",  "Cigarettes", 10);
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/mask.png", "Face Masks", -20);
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/plasticbag.png", "Plastic Bags", -20);
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/straw.png", "Straws");
document.querySelector(".items2").innerHTML += ItemsUI("./common-items/imgs/wrapper.png", "Food Wrappers", 150);



//URBAN CITIES HEADER
document.querySelector(".urban-head").innerHTML += SubCatUI("HOW ARE URBAN <br> CITIES AFFECTED?", "center", "#0D203D", "100px")

//car scrolling
document.querySelector(".car-scroll").innerHTML += CarUI()

document.querySelector(".lets-go").innerHTML += SubCatUI("LET'S<br>GO<br>ON A<br>DRIVE", "left", "#424B43", "90px")

document.querySelector(".sign-1").innerHTML += StreetSignUI()
document.querySelector(".sign-2").innerHTML += StreetSignUI("Microplastics never decompose and end up in places like our gardens. Where we grow vegetables and crops")
document.querySelector(".sign-3").innerHTML += StreetSignUI("Just like the car you’re driving now, manufacturers and transportation vehicles are emitting gasses into our atmosphere")

document.querySelector(".factory-urban").innerHTML += FactoriesUI()

document.querySelector(".park-1").innerHTML += ParkUI()

//GARDEN
document.querySelector(".plants").innerHTML += PlantsUI();
document.querySelector(".garden").innerHTML += GardenUI();



//LANDFILL
document.querySelector(".landfill-header").innerHTML += SubCatUI("HOW ARE OUR <br> LANDFILLS AFFECTED?", "center", "#075E3E")
document.querySelector(".quiztime").innerHTML += BodyTextUI("QUIZ TIME!", "center", "87px", "#00955F", "700")

//country quiz part
document.querySelector(".country_quiz_header").innerHTML += BodyTextUI("Roughly how big do you<br> think Canada’s landfill is?", "center", "73px", "#0B3F2C", "600")
document.querySelector("#flag-1").innerHTML += FlagUI("public/images/new-zealand.png", "New Zealand");
document.querySelector("#flag-2").innerHTML += FlagUI("public/images/italy_.png", "Italy");
document.querySelector("#flag-3").innerHTML += FlagUI("public/images/monaco_.png", "Monaco");

document.querySelector("#flag-answer1").innerHTML += CountryTrue()
document.querySelector("#flag-answer2").innerHTML += CountryFalse()




//ANIMALS
document.querySelector(".animals-question").innerHTML += BodyTextUI("Release of methane<br>contributes to global<br> warming... what <br>does this mean?", "left", "50px", "dark grey", "500", "100px");
document.querySelector(".animals-question").innerHTML += ParkUI("../Imgs/globalwarming.png", "300px")
document.querySelector(".instruction").innerHTML += BodyTextUI("Hover over the animals to see what it means!", "center", "30px" )

document.querySelector(".animals-comp").innerHTML += AnimalsUI();
document.querySelector(".animals-comp").innerHTML += AnimalsUI("./Imgs/seals.png", "No More Seals","seal");
document.querySelector(".animals-comp").innerHTML += AnimalsUI("./Imgs/penguin.png", "No More Penguins","penguin");


// DIY
document.querySelector(".diy-header").innerHTML += SubCatUI("REDUCE & REUSE TO PREVENT OUR <br>LANDFILL FROM GROWING!", "center",
 "#8420D2")
 document.querySelector(".diy-header").innerHTML += BodyTextUI("Click to see what everyday trash <br>is turned into", "center", "50px", "#502B6C");
 document.querySelector(".diy-comps").innerHTML += SelfUI();
 document.querySelector(".diy-comps").innerHTML += SelfUI("./Imgs/mug.png", "./Imgs/mug_DIY.png", "Use an old mug as a container for <br>stationery", "mug",
"100", "400","300","300", "15");
document.querySelector(".diy-comps").innerHTML += SelfUI("./Imgs/magazine.png", "./Imgs/paper_DIY.png", "Using magazines and extra paper<br> for arts and crafts", "mag",
"100", "400","300","300","15");

// EARTH

document.querySelector(".first-last").innerHTML += SubCatUI("LET'S DO OUR PART", "center", "#11A871", "70px")
document.querySelector(".second-last").innerHTML += SubCatUI("AND PROTECT OUR HOME", "center", "#11A871", "40px")

document.querySelector(".earth-part").innerHTML += EarthUI()


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
    document.querySelector("#wendy-debris").style.display = "none"
}

function RecycleBinFalse2(){
    document.querySelector("#recycleBin-answer11").style.display = "none"
    document.querySelector("#recycleBin-answer22").style.opacity = "1"
    document.querySelector("#recycleBin-answer22").style.display = "block"
    document.querySelector("#wendy-debris").style.display = "block"
}

var fixed = true
function CarScrollin(){
    // document.querySelector(".car-scroll").style.opacity = "1"
    document.querySelector(".car-scroll").style.visibility = "visible"
    
}

function CarScrollout(){

    // document.querySelector(".car-scroll").style.opacity = "0"
    document.querySelector(".car-scroll").style.visibility = "hidden"


    
}

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


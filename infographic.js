//Kelly Magnifying Glass and Phone
document.querySelector("#magnify").innerHTML += MagnifyingGlass();
document.querySelector("#phone").innerHTML += PhoneUI();

//Hyerin Country and recycle Quiz 
document.querySelector(".country").innerHTML += QuizUI('./public/images/newzealand.png','New Zealand','red','flag1');
document.querySelector(".country").innerHTML += QuizUI('./public/images/italy.png','Italy','red','flag2');
document.querySelector(".country").innerHTML += QuizUI('./public/images/monaco.png','Monaco','green','flag3','Correct!','Canada’s landfill is roughly around the same size as Monacco');
document.querySelector(".recyclebin").innerHTML += RecycleBinUI('./public/images/gray_bin.png','Garbage', 'bin');
document.querySelector(".recyclebin").innerHTML += RecycleBinUI('./public/images/blue_bin.png','Recycle', 'bin');
document.querySelector(".recyclebin").innerHTML += RecycleBinUI('./public/images/green_bin.png','Compost', 'bin');
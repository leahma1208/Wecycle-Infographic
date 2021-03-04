function BoatUI() {
    return `
    
    <div
    style="
    display:flex;
    flex-wrap:wrap;
    position:absolute;
    left:0px;
    top:0;
    transition: left 3s;
    "
    onmouseover="BoatUI.HandleClick(this)"
    >
        <img 
        src="../public/images/yacht.png" width="200px" height="200px">
    <div>
    
    `
}

// export const Boat = BoatUI();

var clicked = true

BoatUI.HandleClick = (el) => {

    if(clicked){

        el.style.left = "30%"
        document.querySelector(".col").style.display= "block"

        clicked = false
    }

    else{
        el.style.left = "0"
        clicked = true
    }

}
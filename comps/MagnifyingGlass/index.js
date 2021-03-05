function MagnifyingGlass(img = "../public/Images/closerlook.png"){
    return `
        <div
        style="
        display:flex;
        position:relative;
        
        "
        >
            <img
            style="
            transition: width 2s, height 2s;
            "
            src="${img}" width="200px" height="300px"
            onclick="MagnifyingGlass.Appear(this)"
            >
            <div
            id="text"
            style="
            display:none;
            position:absolute;
            top:300px;
            left:-100px;

            "
            >
                <p
                style="
                display:flex;
                flex-wrap:wrap;
                font-family:montserrat;
                font-size:16px;
                "
                >They are tiny broken <br> down pieces of plastic <br> that is found everywhere! <br> Even in our bodies<p>
            <div>
            
        <div>
    `
}

var clicked = true


MagnifyingGlass.Appear = (el) => {

if(clicked){

    el.src = "../public/Images/microplasticmag.png"
    el.style.width = "275px"
    el.style.height = "440px"
    document.querySelector("#text").style.display = "block"

    clicked = false

}

else {
    el.src = "../public/Images/closerlook.svg"
    el.style.width = "230px"
    el.style.height = "300px"
    clicked = true
    document.querySelector("#text").style.display = "none"

}

}





// export const Magnify = MagnifyingGlass()
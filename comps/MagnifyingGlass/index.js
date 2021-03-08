function MagnifyingGlass(img = "../public/Images/closerlook.png"){
    return `
        <div
        style="
        margin:100px 0px;
        display:flex;
        position:relative;
        
        "
        >
            <img
            style="
            transition: width 2s, height 2s;
            "
            src="${img}" width="185px" height="300px"
            onclick="MagnifyingGlass.Appear(this)"
            >
            <div
            id="text"
            style="
            position:absolute;
            top:300px;
            left:-200px;
            display: block;
            opacity: 0;
            transition: opacity 3s;
            
            "
            >
                <p
                style="
                display:flex;
                flex-wrap:wrap;
                font-family:montserrat, sans-serif;
                font-size:22px;
                
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
    el.style.width = "250px"
    el.style.height = "430px"
    document.querySelector("#text").style.opacity = "1"

    clicked = false

}

else {
    el.src = "../public/Images/closerlook.png"
    el.style.width = "185px"
    el.style.height = "300px"
    document.querySelector("#text").style.opacity = "0"
    clicked = true

}

}





// export const Magnify = MagnifyingGlass()
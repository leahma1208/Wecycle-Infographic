function MagnifyingGlass(img = "../public/Images/closerlook.svg"){
    return `
        <div>
            <img
            style="
            transition: width 2s, height 2s;
            "
            src="${img}" width="130px" height="200px"
            onclick="MagnifyingGlass.Appear(this)"
            >
            
        <div>
    `
}

MagnifyingGlass.Appear = (el) => {
    el.src = "../public/Images/microplasticmag.svg"
    el.style.width = "400px"
    el.style.height = "400px"
}





// export const Magnify = MagnifyingGlass()
function EarthUI() {
    return`
    <div
    style="
    display:flex;
    justify-content: center;
    padding:46px 0px;
    width:100%;
    opacity:0;
    transition: opacity 2s;
    "
    onmouseover="EarthUI.HandleOver(this)"
    >
        <img
        src="../public/images/earth.png">
    <div>
    `
}

EarthUI.HandleOver = (el) => {
    el.style.opacity = 1
}
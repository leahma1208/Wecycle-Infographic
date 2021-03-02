function PlasticBagUI() {
    return `
    <div>
        <img 
        style="
        position:relative;
        left:-50px;
        top:-70px;
        transition:left 2s;
        "
        onmouseover='PlasticBagUI.Handleout(this)'
        onmouseout='PlasticBagUI.HandleClick(this)'
        
        src="../public/images/plastic-bag.svg" width="500px" height="500px">
    <div>
    `

}

PlasticBagUI.Handleout = (el) => {
    el.style.left = "-80px"
}

PlasticBagUI.HandleClick = (el) => {
    el.style.left = "-25px"
}

// export const Bag = PlasticBagUI();

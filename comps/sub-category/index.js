function SubCatUI(text = "SUBHEADING", align = "left", color ="#317EB7", size="70px"){
    return `
    <div
    style="
    text-align:${align};
    font-family: 'Bebas Neue', cursive;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight:900;
    font-size: ${size};
    color:${color};
    "
    >
        <div>${text}<div>
    <div>
    `
}

// export const Subhead = SubCatUI();
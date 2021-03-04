function SubCatUI(text = "SUBHEADING", align = "left"){
    return `
    <div
    style="
    text-align:${align};
    font-family: 'Bebas Neue', cursive;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight:900;
    font-size: 70px;
    color:#317EB7;
    "
    >
        <div>${text}<div>
    <div>
    `
}

// export const Subhead = SubCatUI();
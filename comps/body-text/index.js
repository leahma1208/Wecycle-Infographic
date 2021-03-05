function BodyTextUI(word = "body text here", center = "center", size = "30px", color = "#203748", weight = "100"){
    return `
    <p
    style="
    text-align:${center};
    font-family: 'Montserrat', sans-serif;
    font-size: ${size};
    color: ${color};
    font-weight:${weight};
    "
    >${word}<p>
    `
}

// export const textbody = BodyTextUI();
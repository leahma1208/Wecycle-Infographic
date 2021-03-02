function BodyTextUI(word = "body text here", center = "center", size = "30px", color = "#203748"){
    return `
    <p
    style="
    text-align:${center};
    font-family: 'Montserrat', sans-serif;
    font-size: ${size};
    color: ${color};
    font-weight:100;
    "
    >${word}<p>
    `
}

// export const textbody = BodyTextUI();
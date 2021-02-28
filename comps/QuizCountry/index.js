function FlagUI(image = "public/images/new-zealand.svg" , country = "New Zealand")
{
    return `
    <div>
        <div
        style="
        display:flex;
        flex-direction:column;
        align-items:center;
        ">
            <img
            src="${image}" width="400px" height="500px>
            <p
            style="
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            "
            >${country}<p>
        <div>
    <div>
    `
}

// export const Flag = FlagUI();
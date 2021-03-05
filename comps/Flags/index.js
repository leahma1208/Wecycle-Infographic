function FlagUI(image = "public/imgs/new-zealand.png" , country = "New Zealand")
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
        style='
        width:347px;
        height:347px;
        margin-left:35px;
            
            '
            src="${image}">
            <p
            style="
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            font-size:47px;
            
            "
            >${country}<p>
        <div>
    <div>
    `
}

// export const Flag = FlagUI();
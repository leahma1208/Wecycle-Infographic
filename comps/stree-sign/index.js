function StreetSignUI(text = "Our parks and beaches are slowly becoming more and more polluted with facemasks, gloves, and other covid-19 equiptments") {
    return `
    <div>
        <div
        style="
        position:relative;
        top:0;
        "
        >
            <img src="../public/images/streetsign.png" width="350px" >
        <div>
        <div
        style="
        top:10px;
        left:30px;
        color:white;
        position:absolute;
        font-family:montserrat;
        text-align:center;
        "
        >
            <p
            style="
            line-height:40px;
            width:90%;
            "
            >${text}<p>
        <div>
    <div>

    `

}
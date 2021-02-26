function RecycleBinUI(url='',sort='recyclebin', id=''){
    return`
        <div id="bin" style='
        display:flex;
        text-align:center;
        '>
            <div style='
                display:flex;
                flex-direction:column;
                margin-left:200px;
            '>
                <img style='
                    width:180px;
                    height:335px;
                ' src=${url}
                onclick='RecycleBinUI.HandleClick(${id})'
                >
                <p style='
                    font-size:40px;
                    color:#00406E;
                    font-weight:600;
                    margin-top:50px;
                '>${sort}</p>
            </div>
        </div>
        <div style='
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        '>
            <div id="correct" style='
                background:#CDEAFF;
                height: 330px;
                // width: 1182px;
                width:100%;
                border-radius: 91px;
                display:flex;
                justify-content:center;
                align-items:center;
                display:none;
                // opacity:0;
            '>
                <div style='
                    margin-top:90px; 
                    font-size:40px;
                    text-align:center;
                    color:#0E97FA;
                '>
                    <p>Yay you just saved me!</p>
                    <p><strong>Did you know 56% of others like me have consumed plastic?</strong></p>
                </div>
            </div>
            
            <div id="false" style='
                background:#CDEAFF;
                height: 330px;
                // width: 1182px;
                width:100%;
                border-radius: 91px;
                display:flex;
                justify-content:center;
                align-items:center;
                display:none;
                // opacity:0;
            '>
                <div style='
                    // margin-top:70px;
                    font-size:40px;
                    text-align:center;
                    color:#0E97FA;
                '>
                    <p>Oh no I’m still <strong>trapped!</strong></p>
                    <p>Unfortunately this happens to many other marine lives as well!</p>
                </div>
            </div>
        </div>
    `

}

RecycleBinUI.HandleClick = (el) => {
    document.getElementById("correct").style.display = "block";
    document.getElementById("false").style.display = "none";
    // document.getElementById("correct").style.opacity = 1;
    // document.querySelector("#correct").style.top = "0px";
    // document.querySelector("#bin").style.display = "none";
    // document.getElementById("bin").innerHTML = document.getElementById("correct").innerHTML
}

// export const RecycleBin = RecycleBinUI();
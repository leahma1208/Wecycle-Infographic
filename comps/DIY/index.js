function SelfUI(img1="./Imgs/bottles.png",img2="./Imgs/bottle_DIY.png",txt="Use bottles as a pot for plants!", clickId="diy",
left1="150",left2="400", width="400", height="300", top="0", right="0"){
    return `
    
    <section style='
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    margin-bottom: 100px;
    '>
    
        <div
        style='
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        margin-right: ${left1}px;
        '
        >
            <p style='
            font-size: 36px;
            font-family: sans-serif;
            display: flex;
            align-text: center;
            justify-content:center;
            color: dark grey;
            '>Click Me!
            </p>
            
            <img 
            onclick="SelfUI.HandleClick('${clickId}')"
            style='
            width: 300px;
            height: 300px;
            'src="${img1}"/>
    
        </div>
    


        <div id="${clickId}"
        style='
        display: flex;
        flex:1;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        display: flex;
        margin-top: 90px;
        font-family: sans-serif;
        transition: opacity 1s;
        opacity: 0;
        '
        >
            <img style='
            width: ${width}px;
            height: ${height}px;
            'src='${img2}'/>

            <p style='
            font-size: 40px;
            justify-content: center;
            text-align:center;
            display: flex;
            flex-direction: column;
            margin-top: ${top}px;
            margin-right: ${right}px;
            '>
            ${txt} 
            </p>

        </div>

    </section>
    `
}

SelfUI.HandleClick = (clickId) => {
    document.querySelector(`#${clickId}`).style.opacity = 1
}
// export const DIY = SelfUI();
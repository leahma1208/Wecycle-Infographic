function SelfUI(img1="./Imgs/bottles.png",img2="./Imgs/bottle_DIY.png",txt="Use bottle as a pot for plants!", clickId="diy",
left1="0",left2="400", width="400", height="300", top="0", right="0"){
    return `
    
    <section style='
    display: flex;
    margin-bottom: 100px;
    
    
    '>
    
    <div
    style='
    
    display: flex;
    flex-direction: column;
    margin-left: ${left1}px;
    
    
    
    '
   
    >
    <p style='
    font-size: 36px;
    font-family: sans-serif;
    display: flex;
    align-text: center;
    justify-content:center;
    color: dark grey;
    
    
    
    '>Click Me!</p>
    <img 
    onclick="SelfUI.HandleClick('${clickId}')"
    style='
    width: 300px;
    height: 300px;
   
    
    
    'src="${img1}"/>
    </div>
    


    <div id="${clickId}"
    style='display: flex;
    flex-direction: column;
    margin-left: ${left2}px;
    display: flex;
    margin-top: 90px;
    font-family: sans-serif;
    transition: opacity 1s;
    opacity: 0;
    justify-content: center;
    align-items: center;
    
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
    
    
    '
    >
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
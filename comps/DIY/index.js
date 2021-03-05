
function SelfUI(img1="./Imgs/bottles.png",img2="./Imgs/bottle_DIY.png",txt="Use bottle as a <b>pot</b> for plants!", clickId="diy",
left1="0",left2="400", width="400", height="300", top="0", bottom="200"){

    return `
    
    <section style='
    display: flex;

    margin-bottom: ${bottom}px;
    justify-content: space-between;

    '>
    
    <div
    style='
    
    display: flex;
    flex-direction: column;

    
    '
    onclick="SelfUI.HandleClick()"

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

   
    align-items:center;
   

    '
   
    >
    <img style='

    width: ${width}px;
    height: ${height}px;
    
    
    'src='${img2}'/>
    <p style='
    font-size: 40px;
    justify-content: center;
    display:flex;
   text-align:center;
    display: flex;
    
    flex-direction: column;
    margin-top: ${top}px;


    width: 450px;
    height: 350px;
    
    
    'src='./Imgs/bottle_DIY.png'/>
    <p style='
    font-size: 40px;
    justify-content: center;
    margin-top: 0px;

    
    
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

// export const DIY = SelfUI();
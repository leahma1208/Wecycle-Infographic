function SelfUI(img1="./Imgs/bottles.png",img2="./Imgs/bottle_DIY.png",txt="Use bottle as a pot for plants!"){
    return `
    
    <section style='
    display: flex;
 
    
    
    '>
    
    <div
    style='
    
    display: flex;
    flex-direction: column;
    
    
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
    onclick="SelfUI.HandleClick(this)"
    style='
    width: 300px;
    height: 300px;
    
    
    'src="${img1}"/>
    </div>
    

    
    <div id="diy"
    style='display: flex;
    flex-direction: column;
    margin-left: 200px;
    display: flex;
    margin-top: 90px;
    font-family: sans-serif;
    transition: opacity 1s;
    opacity: 0;
    
    '
   
    >
    <img style='
    width: 450px;
    height: 350px;
    
    
    'src='${img2}'/>
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

SelfUI.HandleClick = (el) => {
    document.querySelector("#diy").style.opacity = 1
}
// export const DIY = SelfUI();
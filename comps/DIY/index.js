function SelfUI(){
    return `
    
    <section style='
    display: flex;
    
    
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
    <img style='
    width: 300px;
    height: 300px;
    
    'src="./Imgs/bottles.png"/>
    </div>
    

    
    <div
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
    
    
    'src='./Imgs/bottle_DIY.png'/>
    <p style='
    font-size: 40px;
    justify-content: center;
    margin-top: 0px;
    
    
    '
    >
     Use bottles as a <span style='
     font-weight: bold;
     '>pot</span> for plants!
    </p>

    </div>
    
    </section>
    
    
    `
}

SelfUI.HandleClick = (el) => {
    el.style.opacity = "1"
}
// export const DIY = SelfUI();
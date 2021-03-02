function GardenUI(imgs="./imgs/shovel.png")
{
    return`
    <section style='
    background-color: #9FD4FF;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transition: opacity 1s;
    opacity: 1;
    '
    onclick='GardenUI.HandleClick(this)'
    >
    <div style='
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    '
    >
    <img style='
    width: 100px;
    height: 100px;
    margin: 10px;
    transform: rotate(${z}deg)

    '
    src="${imgs}"/>
    </div>
    <p style='
    font-size: 36px;
    font-family: sans-serif;
    display: flex;
    align-text: center;
    justify-content:center;
    color: dark grey;
    
    
    
    '>Click me to see what is in our gardens</p>
    <div>
    </section>
    `

}

GardenUI.HandleClick = (el) => {
    el.style.opacity= 0.2;
    

}





//export const Garden = GardenUI(); 
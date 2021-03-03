function GardenUI()
{
    return`
    <div style='
    background-color: #DE9252;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    '
    onclick='GardenUI.HandleClick(this)'
    >
    <div class="front" style='
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100vw;
    background-color: #DE9252;
    transition: opacity 1s;
    opacity: 1;
    '
    >
        <img style='
        width: 10rem;
        height: 10rem;
        margin: 3rem;
        transform: rotate(-70deg)
        '
        src="./imgs/shovel.png"/>

        <p id="text "style='
        font-size: 30px;
        font-family: sans-serif;
        color: #000000;
        margin: 2rem;
        transition: opacity 1s;
        opacity: 1;
        '
        >
        Click me to see what is in our gardens</p>
    </div>
    
    <div class="back" style='
    background-color: #DE9252;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100vw;
    transition: opacity 1s;
    opacity: 0;
    '
    >
        <img style='
        height: 10rem;
        margin: 3rem;
        transform: rotate(-80deg);
        '
        src="./imgs/microplastics.svg"/>

        <img style='
        height: 10rem;
        margin: 3rem;
        '
        src="./imgs/microplastics.svg"/>

        <img style='
        height: 5rem;
        margin: 3rem;
        transform: rotate(-20deg);
        '
        src="./imgs/waterbottle.png"/>

        <img style='
        height: 10rem;
        margin: 3rem;
        transform: rotate(-80deg);
        '
        src="./imgs/microplastics.svg"/>

        <img style='
        height: 5rem;
        margin: 3rem;
        transform: rotate(20deg);
        '
        src="./imgs/plasticcutlery.png"/>

        <img style='
        height: 10rem;
        margin: 3rem;
        '
        src="./imgs/microplastics.svg"/>

    </div>
    </div>
    `
}
GardenUI.HandleClick = (el) => {
    el.querySelector(".front").style.opacity= 0;
    el.querySelector(".back").style.opacity = 1;
}
//export const Garden = GardenUI();
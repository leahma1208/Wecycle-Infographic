function GardenUI()
{
    return`
    <section style='
    background-color: #DE9252;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    transition: opacity 1s;
    opacity: 1;
    '
    onclick='ItemsUI.HandleClick(this)'
    >
    <div style='
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    '
    >
    <img style='
    width: 10rem;
    height: 10rem;
    margin: 3rem;
    transform: rotate(-70deg)
    '
    src="./imgs/shovel.png"/>
    </div>
    <p id="text "style='
    font-size: 30px;
    font-family: sans-serif;
    color: #000000;
    margin-top: 7rem;
    transition: opacity 1s;
    opacity: 1;
    '
    >
    Click me to see what is in our gardens</p>
    <div>
    </section>
    `
}
GardenUI.HandleClick = (el) => {
    el.style.opacity= 0;
}
//export const Garden = GardenUI();
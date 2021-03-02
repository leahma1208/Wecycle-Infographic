function ItemsUI(imgs="./imgs/bottle.png", text="Items",z="20")
{
    return`
    <section style='
    background-color: #9FD4FF;
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
    width: 100px;
    height: 100px;
    margin: 10px;
    transform: rotate(${z}deg)
 
    '
    src="${imgs}"/>
    </div>
    <div id="text "style='
    font-size: 20px;
    font-family: sans-serif;
    color: #292929;
    margin-top: 40px;
    transition: opacity 1s;
    opacity: 1;
    '
    >
    ${text}
    <div>
    </section>
    `
}
 
ItemsUI.HandleClick = (el) => {
    el.style.opacity= 0;
    
 
}
 
 
 
 
 
//export const Items = ItemsUI(); 

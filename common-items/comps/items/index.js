function ItemsUI(imgs="./imgs/bottle.png", text="Items",z="20",  left=20, top=10)
{
    return`
    <div style='
    postion:absolute;
	left:${left}rem;
	top:${top}rem;
    background-color: #9FD4FF;
    display: flex;
    flex-direction: row;
    transition: opacity 1s;
    opacity: 1;
    '
    onclick='ItemsUI.HandleClick(this)'
    >
        <div style='
        display: flex;
        margin: 2rem;
        '
        >
        <img style='
        width: 7rem;
        height: 7rem;
        margin: 10px;
        transform: rotate(${z}deg)
    
        '
        src="${imgs}"/>
        </div>
        <div id="text "style='
        font-size: 20px;
        font-family: sans-serif;
        color: #292929;
        margin-top: 5rem;
        transition: opacity 1s;
        opacity: 1;
        '
        >
        ${text}
        </div>

    </div>
    `
}
 
ItemsUI.HandleClick = (el) => {
    el.style.opacity= 0;
    
 
}
 
 
 
 
 
//export const Items = ItemsUI(); 

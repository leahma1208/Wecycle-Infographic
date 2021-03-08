function AnimalsUI(imgs="./Imgs/polarbear.png", text="No More Polar Bears", hoverId="bear")
{
return`
<section style='
display: flex;
width:100%;

margin-top: 100px;



'

>


<div style='
display:flex;
flex:1;
justify-content:center;
align-items:center;
'
onmouseover="AnimalsUI.HandleClick('${hoverId}')">
<img style='
width: 200px;
height: 200px;


'

src="${imgs}"/>
</div>

<div id="${hoverId}"style='
font-size: 50px;
font-family: sans-serif;
justify-content:flex-start;
font-weight: bold;
color: #2E3141;
display:flex;
flex:1;
align-items:center;
transition: opacity 1s;
opacity: 0;
'
 >
${text}
</div>
</section>
`
}


AnimalsUI.HandleClick = (hoverId) => {

  document.querySelector(`#${hoverId}`).style.opacity = 1;
   
}





// export const Animals = AnimalsUI();


function AnimalsUI(imgs="./Imgs/polarbear.png", text="No More Polar Bears")
{
return`
<section style='
display: flex;
width:100%;

margin-top: 100px;

transition: opacity 1s;
opacity: 0;

'

onmouseover="AnimalsUI.HandleClick(this)">


<div style='
display:flex;
flex:1;
justify-content:center;
align-items:center;
'
>
<img style='
width: 200px;
height: 200px;


'

src="${imgs}"/>
</div>

<div id="text "style='
font-size: 50px;
font-family: sans-serif;
justify-content:flex-start;
font-weight: bold;
color: #2E3141;
display:flex;
flex:1;
align-items:center;

'
>
${text}
<div>
</section>
`
}

AnimalsUI.HandleClick = (el) => {

   
        el.style.opacity = 1
   
}





// export const Animals = AnimalsUI();


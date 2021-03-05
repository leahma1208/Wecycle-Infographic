function AnimalsUI(imgs="./Imgs/polarbear.png", text="No More Polar Bears")
{
return`
<section style='
display: flex;
margin-top: 100px;

transition: opacity 1s;
opacity: 0;

'

onmouseover="AnimalsUI.HandleClick(this)">
<div style='
margin-left: 20px;
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
font-weight: bold;
color: #2E3141;
Margin: 70px 0px 0px 50px;



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

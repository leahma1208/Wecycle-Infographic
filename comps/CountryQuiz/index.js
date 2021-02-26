function QuizUI(url='', cont="country",color='',id='', t1="Incorrect!", t2="Try Again",width="345px", height="295px",size="55px" ){
    return`
        <div id="${id}">
            <div style='
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            '>
                
                <img 
                style='
                height:${height};
                width:${width};
                margin:0;
                justify-content:center;
                'src=${url}
                onclick='QuizUI.HandleClick(${id})'
                >
                <p style='
                margin:0;
                font-weight:bold;
                font-size:47px;
                // font-family: 'Montserrat', sans-serif;
                '>${cont}</p>
            </div>
            
            <div 
            id="answer"
            style='
                margin:120px;
                display:flex;
                justify-content:center;
                align-items:center;
                width:712px;
                height:245px;
                background: #F2FFF5;
                border-radius: 46px;
                transition:opacity 1s;
                opacity:0;
            '>
                <div style='
                text-align:center;
                font-size:55px;
                '>
                    <p style='
                    color:${color};
                    font-weight:bold;
                    margin-bottom:0px;
                    '>${t1}</p>   
                    <p style='
                    margin-top:0px;
                    font-size:${size};
                    '>${t2}</p>
                </div>
            </div>
        </div>

    `
}

QuizUI.HandleClick = (el) => {
    document.querySelector("#answer").style.opacity = 1
    // el.style.opacity = 1;
}

// export const Quiz = QuizUI();
function RecycleBinUI(url='',sort='recyclebin'){
    return`
        <div style='
        display:flex;
        text-align:center;
        '>
            <div style='
                display:flex;
                flex-direction:column;
                margin:100px;
            '>
                <img style='
                    width:180px;
                    height:335px;
                ' src=${url}
                '>
                <p style='
                    font-size:40px;
                    color:#00406E;
                    font-weight:600;
                    margin-top:50px;
                '>${sort}</p>
            </div>
        </div>
    `

}


// export const RecycleBin = RecycleBinUI();
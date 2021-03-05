function PhoneUI()
{
    return `
    <div>
        <img
        src="../public/Images/phone-1.png" width="300px" height="550px"
        onclick="PhoneUI.Show(this)"
        >
    </div>
    `

}
var click = true
PhoneUI.Show =(el) => {
    if(click){
    el.src = "../public/Images/phone-2.png"

    click = false

    }

    else{
        el.src = "../public/Images/phone-1.png"
        click = true
    }
}


// export const Phone = PhoneUI()
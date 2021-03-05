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

PhoneUI.Show =(el) => {
    el.src = "../public/Images/phone-2.png"
}


// export const Phone = PhoneUI()
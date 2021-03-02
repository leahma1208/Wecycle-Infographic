function PhoneUI()
{
    return `
    <div>
        <img
        src="../public/Images/phone-1.svg" width="500px" height="500px"
        onclick="PhoneUI.Show(this)"
        >
    </div>
    `

}

PhoneUI.Show =(el) => {
    el.src = "../public/Images/phone-2.svg"
}


// export const Phone = PhoneUI()
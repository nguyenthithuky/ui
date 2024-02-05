let htmlTemplate = `
<div class="facebook-color">
<button type="button" data-color="red" class="btnRed">Đỏ</button>
<button type="button" data-color="blue" class="btnBlue">Xanh</button>
</div>
`;
window.onload = function () {
    const wrapperObject = document.querySelector('body>div');
    if (wrapperObject !== null) {
        wrapperObject.innerHTML += htmlTemplate
    }

    const buttonObject = document.querySelectorAll('.facebook-color button');
    const bodyObject = document.querySelector('body');
    const navigationObject = document.querySelector('div[role="navigation"]');
    let currentColor = localStorage.getItem('currentColor');
    console.log(currentColor)
    // load default color back ground
    if (currentColor !== null) {

        bodyObject.style.backgroundColor = currentColor;
        navigationObject.style.backgroundColor = currentColor;
    }

    if (buttonObject !== null) {
        buttonObject.forEach(function (item) {
            // when default will active button  
            if (item.getAttribute('data-color') == currentColor) {
                item.classList.add('active')

            }

            item.onclick = function () {
                //add active
                let buttonActiveObject = document.querySelector('.facebook-color button.active');
                if (buttonActiveObject !== null) {
                    buttonActiveObject.classList.remove('active')
                }
                this.classList.add('active')

                // change color
                let colorSelect = this.getAttribute('data-color');
                if (colorSelect !== null) {
                    bodyObject.style.backgroundColor = colorSelect;
                    navigationObject.style.backgroundColor = colorSelect;
                    localStorage.setItem('currentColor', colorSelect);
                }

                // 

            }
        })
    }
}
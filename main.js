const slider = document.querySelector("#length-slider");
const sliderNum = document.querySelector("#slide-num");

function colorSlider() {
    let sliderPercentage = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #A4FFAF ${sliderPercentage}%, #18171F ${sliderPercentage}%)`;
}

    slider.addEventListener('input', e => {
        colorSlider();
        sliderNum.textContent = slider.value;
    });

colorSlider();

const generateBtn = document.querySelector("#generate-btn");

    generateBtn.addEventListener('click', e => {
        e.preventDefault();

        validGen();
    });

function genPassWord(rawValPass) {


}

function validGen() {

    const checkForEach = document.querySelectorAll('.checks');
    const errorMSG = document.querySelector("#error-checkbox");
    const reallyTXT = document.querySelector("#really");

    let isValid = true;

        checkForEach.forEach(check => {

            if (check.checked === false) {
                errorMSG.style.visibility = "visible";
                
                isValid = false;                

            }
            if (slider.value < 3) {
                reallyTXT.style.visibility = "visible";
                
                isValid = false;

            }
            if (check.checked) {
                errorMSG.style.visibility = "hidden";
                reallyTXT.style.visibility = "hidden";
                
                isValid = true;

            }

        return (isValid === true) ? genPassWord(check) : isValid;
        });
}
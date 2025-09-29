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

function getValues(rawValPass) {

    const upperLetrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetrs = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
    const passwordField = document.querySelector("#pw-field");

    function genPassWord() {}
    let randomNumGen = Math.floor(Math.random() * (slider.value + slider.value)) + 1;
    passwordField.value = randomNumGen;

}

function validGen() {

    const checkForEach = document.querySelectorAll('.checks');
    const reallyTXT = document.querySelector("#really");

    let isValid = true;

        checkForEach.forEach(check => {

            if (check.checked === false) {
                
                isValid = false;                

            }

            if (slider.value < 3) {
                reallyTXT.style.visibility = "visible";
                
                isValid = false;

            } else {
                reallyTXT.style.visibility = "hidden";
            }

            if (check.checked) {
                
                isValid = true;

            }

        return (isValid === true) ? getValues(check) : isValid;
        });
}
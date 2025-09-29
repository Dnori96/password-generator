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

function getValues() {

    let upperLetrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerLetrs = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*-_=+;:,.<>?~";
    let passwordField = document.querySelector("#pw-field");

    let upperValid = false;
    let lowerValid = false;
    let numValid = false;
    let spcValid = false;
    let password = "";
    let allowedChars = "";

        const upperCheck = document.querySelector('#upper-check'); 
        const lowerCheck = document.querySelector('#lower-check'); 
        const numCheck = document.querySelector('#num-check'); 
        const spcCheck = document.querySelector('#sym-check');

        if (upperCheck.checked) {
            allowedChars += upperLetrs;
            upperValid = true;
        } else {
            upperLetrs = "";
        }
        if (lowerCheck.checked) {
            allowedChars += lowerLetrs;
            lowerValid = true;
        } else {
            lowerLetrs = "";
        }
        if (numCheck.checked) {
            allowedChars += numbers;
            numValid = true;
        } else {
            numbers = "";
        }
        if (spcCheck.checked) {
            allowedChars += specialChars;
            spcValid = true;
        } else {
            specialChars = "";
        }
    
    function genPassWord(length) {

            for (let i = 0; i < length; i++) {
                const randomIdx = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIdx]
                passwordField.value = password;
            }

            
    }

    genPassWord(slider.value)
};

function validGen() {

    const checkBoxes = document.querySelectorAll('.checks');
    const reallyTXT = document.querySelector("#really");

    let isValid = true;

        checkBoxes.forEach(check => {

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

        return (isValid === true) ? getValues() : isValid;
        });
}
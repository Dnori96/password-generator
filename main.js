const slider = document.querySelector("#length-slider");
const sliderNum = document.querySelector("#slide-num");

function colorSlider() {
    let sliderPercentage = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #A4FFAF ${sliderPercentage}%, #18171F ${sliderPercentage}%)`;
}

slider.addEventListener("input", (e) => {
    colorSlider();
    sliderNum.textContent = slider.value;
});

colorSlider();

const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    validGen();
});

function passwordSTR(pwLength, upperValid, lowerValid, numValid, spcValid) {
    const empty = document.querySelector(".empty");
    const tooWeak = document.querySelector(".too-weak");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");

    empty.style.display = "none";
    tooWeak.style.display = "none";
    weak.style.display = "none";
    medium.style.display = "none";
    strong.style.display = "none";

    if (pwLength <= 5) {
        tooWeak.style.display = "flex";
    } else if (pwLength > 5 && pwLength < 8) {
        weak.style.display = "flex";
    } else if (pwLength >= 8 && pwLength < 12) {
        medium.style.display = "flex";
    } else if (pwLength >= 12) {
        strong.style.display = "flex";
    } else {
        empty.style.display = "flex";
    }
}

function getPassword() {
    let upperLetrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerLetrs = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*-_=+;:,.<>?~";
    let passwordField = document.querySelector("#pw-field");

    passwordField.style.color = "#E6E5EA";

    let upperValid = false;
    let lowerValid = false;
    let numValid = false;
    let spcValid = false;
    let allowedChars = "";

    const upperCheck = document.querySelector("#upper-check");
    const lowerCheck = document.querySelector("#lower-check");
    const numCheck = document.querySelector("#num-check");
    const spcCheck = document.querySelector("#sym-check");

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

    function getRandomInt(max) {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % max;
    }

    function getPassword() {
        const length = Number(slider.value);
        let password = "";
        for (let i = 0; i < length; i++) {
            const idx = getRandomInt(allowedChars.length);
            password += allowedChars[idx];
        }
        passwordField.value = password;

        passwordSTR(password.length);
    }

    getPassword();
}

function validGen() {
    const checkBoxes = document.querySelectorAll(".checks");
    const reallyTXT = document.querySelector("#really");

    let isValid = true;

    checkBoxes.forEach((check) => {
        if (check.checked === false) {
            isValid = false;
        }

        if (slider.value <= 2) {
            reallyTXT.style.visibility = "visible";

            isValid = false;
        } else {
            reallyTXT.style.visibility = "hidden";
        }

        if (check.checked) {
            isValid = true;
        }

        return isValid === true ? getPassword() : isValid;
    });
}

function copyTextFunc() {
    copyText = document.querySelector("#pw-field");
    textWhenCopy = document.querySelector("#copy-txt");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile

    navigator.clipboard.writeText(copyText.value);

    textWhenCopy.textContent = "COPIED";
    setTimeout(() => {
        textWhenCopy.textContent = "";
    }, 1500);
}

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

// const generateBtn = document.querySelector("#generate-btn");

//     generateBtn.addEventListener('click', e => {
//         e.preventDefault();
//         validGen();
//     });

// function validGen() {

// }

// function genPassWord() {
//     console.log();
// }
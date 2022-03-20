const codes = document.querySelectorAll(`.code`);
const nextBtn = document.querySelector(`.next`);

const code1 = document.getElementById(`code1`);
const code2 = document.getElementById(`code2`);
const code3 = document.getElementById(`code3`);
const code4 = document.getElementById(`code4`);
const code5 = document.getElementById(`code5`);
const code6 = document.getElementById(`code6`);

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener(`keydown`, (e) => {
        if(e.key >= 0 & e.key <= 9) {
            codes[idx].value = ``;
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if(e.key === `Backspace`) {
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});

codes.forEach(code => code.addEventListener(`input`, getValues));

function getValues() {
    let codeOne = code1.value;
    let codeTwo = code2.value;
    let codeThree = code3.value;
    let codeFour = code4.value;
    let codeFive = code5.value;
    let codeSix = code6.value;

    let array = [codeOne, codeTwo, codeThree, codeFour, codeFive, codeSix];

    let total = array.filter(Boolean).length;

    if(total === 6) {
        nextBtn.classList.add(`appear`);
    }
}
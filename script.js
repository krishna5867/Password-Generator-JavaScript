const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

let upperTexts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerTexts = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890"
let symbols = "!@#$%^&*()_+{}|/\:;',.<>`~?";


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
        let passCopy = document.querySelector("#result");
        navigator.clipboard.writeText(passCopy.innerText);
})

generateEl.addEventListener('click', () => {
    generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol,lengthEl.value);
})

function generatePassword(lower, upper, number, symbol, length) {
            let newPass = [];

            if (lowercaseEl.checked) newPass.push(lower);
            if (uppercaseEl.checked) newPass.push(upper);
            if (numbersEl.checked) newPass.push(number);
            if (symbolsEl.checked) newPass.push(symbol);
        
            let generatedPassword = "";
        
        for (let i = 1; i <= length; i++) {
        generatedPassword += newPass[Math.floor(Math.random() * newPass.length)]();
        }
        resultEl.innerText = generatedPassword;
}


function getRandomLower() {
        let randomLowerTexts = lowerTexts[Math.floor(Math.random()* 26)];
        return randomLowerTexts;
}
console.log(getRandomLower());

function getRandomUpper() {
        let randomUpperTexts = upperTexts[Math.floor(Math.random()* 26)];
        return randomUpperTexts;
}

function getRandomNumber() {
        let randomNumbers = numbers[Math.floor(Math.random()* 10)];
        return randomNumbers;
}

function getRandomSymbol() {
        let randomSymbols = symbols[Math.floor(Math.random()* 27)];
        return randomSymbols;
}






const pwEl = document.getElementById('pw');
const copy = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const UPPER_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|:;"<>?';

function getRandomCharacter(characterSet) {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
}

function generatePassword() {
    const length = lenEl.value;
    const characterSets = [];

    if (upperEl.checked) characterSets.push(UPPER_LETTERS);
    if (lowerEl.checked) characterSets.push(LOWER_LETTERS);
    if (numberEl.checked) characterSets.push(NUMBERS);
    if (symbolEl.checked) characterSets.push(SYMBOLS);

    if (characterSets.length === 0) {
        pwEl.innerText = 'Please select at least one option.';
        return;
    }

    const passwordArray = Array.from({ length }, () => {
        const randomCharacterSet = characterSets[Math.floor(Math.random() * characterSets.length)];
        return getRandomCharacter(randomCharacterSet);
    });

    pwEl.innerText = passwordArray.join('');
}

generateEl.addEventListener('click', generatePassword);

copy.addEventListener('click', () => {
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard: ' + password);
});

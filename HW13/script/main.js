//Task 1
let textStr = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let uppercaseLetters = textStr.match(/[A-Z]/g);

console.log(uppercaseLetters);
//Task 2
let operation = "5 плюс 7 = 3";
let numbers = operation.match(/\d+/g).map(Number);

console.log(numbers);
//Task 3
let fiveWords = textStr.match(/\b\w{5}\b/g);

console.log(fiveWords);
//Task 4
function saveData() {
    const input = document.querySelector('#userInput').value;
    sessionStorage.setItem('userData', input);
    alert('Дані збережено!');
}

function showData() {
    const savedData = sessionStorage.getItem('userData');
    document.querySelector('#displayData').innerText = savedData ? savedData : 'Немає збережених даних';
}
//Task 5
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submitBtn');

function validateForm() {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const passwordValid = /^[A-Za-z\d]{8,}$/.test(password.value) &&
                         /[A-Z]/.test(password.value) &&
                        /\d/.test(password.value);
    submitBtn.disabled = !(emailValid && passwordValid);
}

email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
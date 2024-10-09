//HT 1
const firstArr = [11,23,45,67];

const secondArr = [89,101,123,145];

const spreadArr = (arr1, arr2) => [...arr1, ...arr2];
console.log(spreadArr(firstArr, secondArr));
//HT 2
const strAndArr = (str, ...arr) => {
    console.log(`Це рядок`, str);
    console.log(`А це масив`, arr);
}
strAndArr(`Привіт`, 6, 7, 11, 19);
//HT 3
const averageValue = (...numbers) => {
    const totalValue = numbers.reduce((sum, number) => sum + number, 0);
    return (totalValue / numbers.length).toFixed(2);
}
console.log(averageValue(1,4,6,8,12,13));
//HT 4
const typeOfFn = (items) => typeof (items);
console.log(typeOfFn('text')); 
console.log(typeOfFn(1));
console.log(typeOfFn(true));
//HT 5
function typeOfItem (value) {
    if (typeof value === 'number' ) {
        return `Це число`
    } else if (typeof value === 'string') {
        return `Це рядок`
    } else if (typeof value === 'boolean') {
        return `Це Boolean`
    } else{
        return `Це інший тип`
    }
}
console.log(typeOfItem(12));
console.log(typeOfItem(null))
console.log(typeOfItem(true))
//HT 6
function calculateBirthYear() {
    const age = prompt('Привіт, введіть свій вік:');

    if (typeof age === 'string' && !isNaN(age) && age.trim() !== '') {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - Number(age);
        console.log(`Ваш рік народження: ${birthYear}`);
    } else {
         console.log('Будь ласка, введіть дійсне число для обчислення вашого року народження.');
    }
}
calculateBirthYear();
//HT 7
const currentDate = new Date();

const formattedDate = currentDate.toLocaleString();
console.log(formattedDate);
//HT 8
const sentence = 'hello world !';

const wordsArray = sentence.split(' ');

const upperCaseWords = wordsArray.map(word => word.toUpperCase());
console.log(upperCaseWords);
//HT 9
const header = document.getElementById('Header');
console.log('Це - Header по ID:', header);

const section = document.getElementsByClassName('section-h');
console.log('Це - Section по ClassName:', section);

const div = document.getElementsByTagName('div');
console.log('Це - Div по TagName', div);
//HT 10
const ul = document.querySelector('#ulList');
const firstItem = ul.querySelector('li:first-child');
//якщо потрібно можна вивести текст що в середині за допомогою .textContent 
//поки не буду використовувати 
console.log('Перший елемент списку:', firstItem);

const lastItem = ul.querySelector('li:last-child');
console.log('Останній елемент списку:', lastItem);

const thirdItem = ul.querySelector('li:nth-child(3)');
console.log('Третій елемент списку:', thirdItem);

let elements = document.querySelectorAll('section div ul li');
let elementsArr = Array.from(elements);
console.log(elementsArr);
//HT 11
let listItems = document.querySelectorAll('ul.nav > li');
console.log('Всі елементи li:', listItems);

let listItem = document.querySelectorAll('li:nth-child(2)');
console.log('Другий елементи li:', listItem);

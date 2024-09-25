// ht1 Фунція Вітання 
function hiUser (user){
    console.log(`Вітаю ${user}`);
}

function welcomeUser (usersArray, callBackfunction){
    for (let i = 0; i < usersArray.length; i++){
        callBackfunction(usersArray[i]);
    }
}
const users = ['Володимир','Ксенія','Злата','Владислав'];
welcomeUser(users, hiUser);
// ht2 Параметри за замовчуванням
function defaultSettings ( guest = `Доброго вечора гість.`){
    console.log(guest);
}
defaultSettings();

defaultSettings(`Привіт, я не гість.`);
// ht3 Стрілкова функція 
const multiplyValues = (a, b, c) => a * b * c;
console.log(multiplyValues(6,9,6));

function newMultiplyValues (a,b,c){
    let result = a*b*c;
    console.log(`Результат множення: ${a} * ${b} * ${c} = ${result}`);
    return result;
}
newMultiplyValues(6,9,6);
// ht4 Пустий масив
let evenNumbers = [];

for (let i = 0; i <= 8; i += 2){
    evenNumbers[evenNumbers.length] = i;
}
console.log(evenNumbers);

console.log(`||`);
let newEvenNumbers = [];

for (let i = 0; i <= 8; i++){
    if (i % 2 === 0) {
        newEvenNumbers.push(i);
    }
}
console.log(newEvenNumbers);
// ht5 Цикл завдань 
let days = ["Понеділок", "Середа", "Неділя"] 

let plans = ["Урок 03", "Урок 04", "Вихідний"]
for (let i = 0; i < days.length; i++) {
    console.log(`Сьогодні ${days[i]} у вас такі плани: ${plans[i]}.`);
}
// ht6 Цикл з від'ємними числами
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]

for (let i = 0; i < checkArr.length; i++){
    if (checkArr[i] < 0) {
        checkArr[i] = 0;
    }
}
console.log(checkArr);
// + ht7 Сума масива 
function summArray (numberArray){
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
    }
    return sum;
}

let numberArray = [6,9,6,4,2,5,8,0,5,3,3];
console.log(summArray(numberArray));
// + ht8  функцію squareArray
function squareArray(arr){
    let squaredArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        squaredArray[i] = arr[i] ** 2;
    }
    return squaredArray; 
}

let mainArray = [1, 2, 3, 4];
console.log(squareArray(mainArray));
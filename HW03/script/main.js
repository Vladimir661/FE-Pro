//Перевірка Парне || Непарне
let value = Number(prompt(`Введіть число : `));

if (isNaN(value)) {
    console.log(`Будь ласка, введіть коректне число.`);
} else if (value%2 === 0){
    console.log(`Введене число парне: ${value}`);
} else {
    console.log(`Введене число непарне: ${value}`);
}
//Перевірка віку користувача
let age = Number(prompt(`Введіть ваш вік: `));

if(isNaN(age) || age<= 0){
    console.log(`Будь ласка, введіть коректне число.`);
} else if (age>= 18){
    alert(`Ви можете користуватися даним ресурсом.`);
} else {
    alert(`Вам повинно бути бильше 18 років, щоб користуватися даним ресурсом.`);
}
//Ціна товару 
let price = Number(prompt(`Введіть ціну товару: `));

let quantity = Number(prompt(`Введіть кількість товару: `));

if (isNaN(quantity) || quantity<= 0){
    console.log(`Будь ласка, введіть коректне число.`);
} else {
    console.log(`Сума товару = ${(price * quantity).toFixed(2)}$`);
}
//Знижка на товар 
let discount = (price * quantity) * 0.5;
alert(`Загальна сума товару зі знижкою = ${(discount).toFixed(2)}$`);
//Найбільше введене число
let number1 = Number(prompt(`Введіть перше число: `));

let number2 = Number(prompt(`Введіть друге число: `));

let number3 = Number(prompt(`Введіть третє число: `));
if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
    console.log(`Будь ласка, введіть коректне число.`);
} else{
    let maxNumber = number1;

    if (number2> maxNumber){
        maxNumber = number2;
    }
    
    if (number3> maxNumber){
        maxNumber = number3;
    }
console.log(`Найбільше число: ${maxNumber}`);
}
//Визначення сезону
let month = Number(prompt(`Введіть номер місяця від 1 до 12: `));

if (isNaN(month) || month<= 0 || month>=13 ){
    console.log(`Будь ласка, введіть коректне число.`);
} else if (month === 12 || month === 1 || month === 2){
    console.log(`Даний місяць належить до зимового сезону.`);
} else if (month>= 3 && month<= 5){
    console.log(`Даний місяць належить до весняного сезону.`);
} else if (month>= 6 && month<= 8){
    console.log(`Даний місяць належить до літнього сезону.`);
} else {
    console.log(`Даний місяць належить до осіннього сизону.`);
}
//Визначення розміру числа
let sizeValue = Number(prompt(`Введіть число : `));

if (isNaN(sizeValue)){
    console.log(`Будь ласка, введіть коректне число.`);
} else if (sizeValue < 0){
    console.log(`Введене число від'ємне: ${sizeValue}`);
} else if (sizeValue > 0){
    console.log(`Введене число додатнє: ${sizeValue}`);
} else {
    console.log(`Введене число нуль: ${sizeValue}`);
}
//Визначення типу геометричної фігури
let figure = prompt(`Введіть назву геометричної фігури`);

switch (figure){
    case 'Коло':
        alert(`${figure} - має 0 сторін.`);
        break;
    case 'Трикутник':
        alert(`${figure} - має 3 сторони.`);
        break;
    case 'Квадрат':
        alert(`${figure} - має 4 сторони.`);
        break;
    default:
        alert(`Немає інформації про фігуру: ${figure}`);
}
// Сума всих парних чисел 
let start = 1;
let end = 20;
let sum = 0;

while (start <= end) {
    if (start % 2 === 0){
        sum += start;
    }
    start++;
}
console.log(`Сума всіх парних чисел від 1 до 20: ${sum}`);
//Зворотний лічильник
for (let i = 10; i >= 1; i--) {
    console.log(`Зворотний лічильник від 10 до 1: ${i}`);
}
//Додадткаові задачі
//Перевірка величини кута
let angle = Number(prompt(`Введіть величину кута в градусах: `));
console.log(angle >= 90 ? `Так, кут гострий: ${angle} градусів.` : `Ні, кут тупий: ${angle} градусів.`);
//Знаходження першого парного числа
for (let i = 1; i <= 10; i++) {
   if (i % 2 === 0){
    console.log(i);
    break;
   }
}
//Планети сонячної системи 
let planet = prompt(`Введіть назву планети сонячної системи`);
switch (planet){
    case 'Меркурій':
    case 'Венера':
    case 'Земля':
    case 'Марс':
    case 'Юпітер':
    case 'Сатурн':
    case 'Уран':
    case 'Нептун':
        alert(`Ця планета в сонячній системі.`);
        break;
    default:
        alert(`Такої планети нема в сонячній системі`);
}

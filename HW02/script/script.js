let number1 = 5;

let number2 = 7;
// також можна використати === для перевірки не тільки значень, а і типу змінної 
if (number1 == number2) {
    alert('Числа рівні');
} else {
    alert ('Числа не рівні');
}
//Програма для обчислення площі прямокутника
let lengthTriangle = Number(prompt("Введіть довжину прямокутника: "));

let widthTriangle = Number(prompt("Введіть ширину прямокутника: "));

let area = lengthTriangle * widthTriangle;
console.log(`Площа прямокутника: ${area}`);

//Периметр прямокутника 
let perimeter = 2 * (lengthTriangle + widthTriangle);
console.log(`Периметр трикутника: ${perimeter}`);

//Конвертація температури 

function Fahrenheit (celsius){
    return (celsius * 9/5) + 32;
}
let tempCelsius = parseFloat(prompt("Введіть температуру в Цельсія: "));

let tempFahrenheit = Fahrenheit(tempCelsius);
console.log(`Температура в Фаренгейтах: ${tempFahrenheit}`);

//Об'єм циліндра 
const piValue = 3.14;

let radius = parseFloat(prompt('Введіть радіус циліндра: '));

let height = parseFloat(prompt('Введіть висоту циліндра:'));

let volume = piValue * (radius **2 ) * height;
console.log(`Об'єм циліндра: ${volume}`);


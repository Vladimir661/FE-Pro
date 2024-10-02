//HT 1 var const
for (let i = 0; i < 5; i++){
    console.log(i);
}
//var const
const message = 'test';
function example(){
    if (true){
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message);
}
example();
//HT 2
const students = [
    { name: 'Оля', scores: { math: 85, english: 78, science: 92 } },
    { name: 'Іван', scores: { math: 58, english: 74, science: 80 } },
    { name: 'Марія', scores: { math: 95, english: 85, science: 99 } },
    { name: 'Петро', scores: { math: 70, english: 65, science: 75 } },
];
function averageScores(students){
    return students.map(students =>{
        const scores = Object.values(students.scores);
        const averageScore = scores.reduce((sum, score)=> sum + score, 0) / scores.length;
        return{
            name: students.name,
            averageScore: averageScore.toFixed(2)
        };
    });

}

const filteredStudents = averageScores(students).filter(student => student.averageScore > 80);
console.log(filteredStudents);
//HT 3 filter
const transactions = [
    { id: 1, type: 'income', amount: 100 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 150 },
    { id: 4, type: 'expense', amount: 70 },
    { id: 5, type: 'income', amount: 200 },
];
const incomeTransactions = transactions.filter(transaction => transaction.type === 'income');

const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense');

console.log(`=== Масиви income and expense ===`)
console.log(incomeTransactions);
console.log(expenseTransactions);
const incomeAmounts = incomeTransactions.map(transaction => transaction.amount);

const expenseAmounts = expenseTransactions.map(transaction => transaction.amount);

console.log(`=== Масиви з сумами ===`);
console.log(incomeAmounts);
console.log(expenseAmounts);

const totalIncome = incomeAmounts.reduce((sum, amount) => sum + amount, 0);

const totalExpense = expenseAmounts.reduce((sum, amount) => sum + amount, 0);

console.log(`=== Сумарні зачення ===`);
console.log(totalIncome);
console.log(totalExpense);
//HT 4
let myArr = [14,11,9,4,6,8,15,33,57,87];
function filterNumbersArr (arr){
    let newArr = arr.filter((value) => value > 10);
    return newArr.slice(0,3);
}
let mainArray = filterNumbersArr(myArr);
console.log(mainArray);
//HT 5
function reverseSlice(arr, startIndex, endIndex){
    let slicedArray = arr.slice(startIndex, endIndex);
    return slicedArray.reverse();
}

let myArray = [10, 6, 9, 4, 3, 2, 1, 14, 29];

let result = reverseSlice(myArray, 3, 7);
console.log(result);
//HT 6
function doubleEvenNumbers(arr){
    return arr
        .filter(number => number % 2 === 0)
        .map(number => number * 2);
}

let originalArr = [3, 4, 5, 6, 11, 12, 13, 15, 16, 18];
let resultArr = doubleEvenNumbers(originalArr);
console.log(resultArr);
//A HT 7
const arrayOfArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
    [10]
];
const sums = arrayOfArrays.map(innerArray => 
    innerArray.reduce((sum, currentValue) => sum + currentValue, 0)
);
  
console.log(sums);


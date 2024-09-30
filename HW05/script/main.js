//HT 1-1.1
let myArray = [];

myArray.push(1);

myArray.push(2);

myArray.push(`hello`);

myArray.push(true);

console.log(myArray);
//HT 1-1.2
function addToArray(array, element){
    array.push(element);
    return array;
}

let arrayElement = [1, 2, 3];

addToArray(arrayElement, 4);
console.log(arrayElement);
//HT 2-2.1
let numbers = [15, 21, 26, 45];

numbers.pop();
console.log(numbers);
//HT 2-2.2
function removeLast(items){
    items.pop();
    return items;
}

let car = [`Nissan`,`Subaru`,`Toyota`,`Audi`];

removeLast(car);
console.log(car);
//HT 3-3.1
let cities = [`Tokyo`,`London`,`Toronto`];

cities.unshift(`Los Angeles`);
cities.unshift(`Rio`);

console.log(cities);
//HT 3.3.2
function addFirstItem(arr, item){
    arr.unshift(item);
    return arr;
}

let progLanguages = [`JavaScript`,`Java`,`Python`];

addFirstItem(progLanguages, `GO`);
console.log(progLanguages);
//HT 4-4.1
let colors = [`red`, `green`, `blue`, `yellow`];

colors.shift();
console.log(colors);
//HT 4-4.2
function removeFirstElement(array){
    array.shift();
    return array;
}

let fruits = [`apple`, `banana`, `cherry`];
removeFirstElement(fruits);
console.log(fruits);
//HT 5-5.1
let nValue = new Array(5).fill(6);
console.log(nValue);
//HT 5-5.2
function fillSection(array, value, start, end){
    array.fill(value, start, end);
    return array;
}

let numbersArray = [11, 35, 67, 77, 81];

fillSection(numbersArray, 99, 2, 5);
console.log(numbersArray);
//HT 6-6.1
let reverseValue = [`!!!`,`Array`,`Reverse`,`Hello`];

reverseValue.reverse();
console.log(reverseValue);
//HT 6-6.2
function reverseArray(array){
    array.reverse();
    return array;
}

let arrayNumbers = [1, 2, 3, 4, 5];

reverseArray(arrayNumbers);
console.log(arrayNumbers);
//HT 7
function createNumberSquareArray(n){
    let result = [];
    for (let i = 1; i < n; i++){
        result.push({number: i, square: i**2});
    }
    return result;
}

let numberArray = createNumberSquareArray(5);
console.log(numberArray);
//HT 8
function createUserObjects(names, ages){
    let users = [];
    for (let i = 0; i < names.length; i++){
        users.push({ name: names[i], age: ages[i]});
    }

    return users;
}

let names = ['Оля', 'Іван', 'Марія'];

let ages = [25, 30, 22];

let userArray = createUserObjects(names, ages);
console.log(userArray);
//HT 9
function removeMaxElement(arr){
    if (arr.length === 0) return arr;
    let maxElement = Math.max(...arr);
    let maxIndex = arr.indexOf(maxElement);
    arr.splice(maxIndex, 1);
    return arr;
}

let numbArray = [55, 22, 4, 61, 32];
let updatedArray = removeMaxElement(numbArray);
console.log(updatedArray);
//HT 10
function sortAndReplace (arr){
    if (arr.length === 0) return arr;
    arr.sort((a,b) => b-a);
    arr.fill(10, 0,3);
    return arr;
}
let numValue = [6, 2, 4, 9, 12, 3];

let updArray = sortAndReplace(numValue);
console.log(updArray);
//A HT 1
function processArray(arr){
    let uniqueElements = [...new Set(arr)];
    uniqueElements.sort((a, b) => b - a);
    let maxElement = Math.max(...uniqueElements);
    let maxIndex = uniqueElements.indexOf(maxElement);
    uniqueElements.splice(maxIndex, 1);
    return uniqueElements;
}

let nmbrsArr = [11, 23, 6, 16, 23, 35, 11];

let uptdArray = processArray(nmbrsArr);
console.log(uptdArray);
//A HT 2
function mergeSortAndRemove(arr1, arr2){
    let combinedArray = [...arr1, ...arr2];
    combinedArray.sort((a, b) => a - b);
    combinedArray.splice(-4);
    return combinedArray;
}

let array1 = [9, 13, 5, 2];
let array2 = [1, 3, 6, 4, 7];
let resultArray = mergeSortAndRemove(array1, array2);
console.log(resultArray);
//A HT 3
function filterAndSortUsers (users){
    let filteredUsers = users.filter(user => user.age > 18);
    filteredUsers.sort((a,b) => a.age - b.age);
    if (filteredUsers.length > 0){
        filteredUsers.shift();
    }
    return filteredUsers;
}

let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
];
console.log(filterAndSortUsers(users));
//HT 1
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const nameObject in person) {
    console.log(`Person name ${person.name}, age: ${person.age}, occupation ${person.occupation}.`);
}

console.log(`=======`);
//HT 2
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
let studentNumber = 1;
for (const student of students) {
    console.log(`Студент ${studentNumber}:`);
    for (const studentKey in student) {
        console.log(`${studentKey}: ${student[studentKey]}`);
    }
    studentNumber++;
}

console.log(`=======`);
//HT 3
function game () {
    const userChoice = prompt('Введіть свій вибір: камінь, ножиці або папір').toLowerCase();
    
    if (userChoice !== 'камінь' && userChoice !== 'ножиці' && userChoice !== 'папір'){
        alert('Невірний вибір! Спробуйте ще раз =)');
        return;
    }
    
    const choice = ['камінь','ножиці','папір'];
    const randomChoice = choice[Math.floor(Math.random() * 3)];
    
    alert(`Комп'ютер вибрав: ${randomChoice}`);
    if (userChoice === randomChoice){
        alert (`Ваш вибір: ${userChoice} - Вибір комп'ютера: ${randomChoice} Результат гри = Нічия!`)
    } else if (
        (userChoice === 'камінь' && randomChoice === 'ножиці') 
        ||
        (userChoice === 'ножиці' && randomChoice === 'папір') 
        ||
        (userChoice === 'папір' && randomChoice === 'камінь')
    ){
        alert(`Ви виграли, вітаємо!`);
    } else {
        alert('Ви програли! Спробуйте ще раз =)');
    }
}
game();
//HT 4
const minNumber = (value1, value2) => Math.min (value1,value2);
console.log(minNumber(22,45));

console.log(`=======`);

const maxNumber = (value1, value2) => Math.max (value1,value2);
console.log(maxNumber(14,33));
// Завдання виконав через стрілкову функцію 
console.log(`=======`);
//HT 5
const powFn = (value1, exponentiation) => Math.pow (value1, exponentiation);
console.log(powFn(3,3));
console.log(powFn(2,2));
console.log(`=======`);
//HT 6
const floorFn = (number) => Math.floor(number);
console.log(floorFn(7.7));

const ceilFn = (number) => Math.ceil(number);
console.log(ceilFn(7.1));
console.log(`=======`);
//HT 7
class Person {
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName;
    }
    get age(){
        return this._age;
    }
    set age (newAge){
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log(`Вік не може бути від'ємним`);
        }
    }
    sayHello() {
        console.log(`Привіт, мене звати ${this.name} мені ${this._age}`);
    }
}
const volodymyrPerson = new Person('Volodymyr', 20);
volodymyrPerson.sayHello();
//тут виклик для одного користувача, але якщо буде багато то можна зробити інакше
const persons = [
    new Person('Thomas', 23),
    new Person('John', 19),
    new Person('Polly', 31),
    new Person('Arthur', 25),
    new Person('Ada', 28)
];
for (const people of persons){
    people.sayHello();
}  
console.log(`=======`)
class Student extends Person{
    constructor (name, age, studentId){
        super(name, age);
        this.studentId = studentId
    }
    get studentId() {
        return this._studentId;
    }
    set studentId(newStudentId) {
        this._studentId = newStudentId;
    }
    study() {
        console.log(`${this.name} навчається`);
    }
    displayInfo() {
        console.log(`Ім'я студента: ${this.name}, вік студента: ${this.age}, ID студента: ${this.studentId}`);
    }
}
const eizaStudent = new Student ('Eiza', 21, '1');
eizaStudent.study();
const pedroStudent = new Student ('Pedro', 23, '2');
pedroStudent.study();
console.log(`=======`)
eizaStudent.displayInfo()
pedroStudent.displayInfo()
//A HT 8 
class Book {
    constructor(title, author, year, genres = []) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genres = genres;
        this.ratings = [];
    }
    get averageRating() {
        if (this.ratings.length === 0) return 0;
        let sum = this.ratings.reduce((total, rating) => total + rating, 0);
        return sum / this.ratings.length;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        const currentYear = 2024;
        if (value > currentYear) {
            console.log('Рік не може бути більшим за 2024!');
        } else {
            this._year = value;
        }
    }
    get genres() {
        return this._genres;
    }
    set genres(newGenres) {
        if (!this._genres) {
            this._genres = [];
        }
        newGenres.forEach((genre) => {
            if (!this._genres.includes(genre)) {
                this._genres.push(genre);
            }
        });
    }
    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this.ratings.push(rating);
        } else {
            console.log('Оцінка повинна бути від 1 до 5');
        }
    }
    getInfo() {
        return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Жанри: ${this.genres.join(', ')}`;
    }
}

const murderBook = new Book('Murder on the Orient Express', 'А. Крісті', 2007, ['Детективи']);
murderBook.addRating(5);
murderBook.addRating(4);
console.log(murderBook.getInfo());
console.log(murderBook.averageRating);

const lasttdBook = new Book('Останній, хто помре','Т. Ґеррітсен', 2023, ['Детектики']);
lasttdBook.addRating(5);
lasttdBook.addRating(4);
lasttdBook.addRating(5);
lasttdBook.addRating(3);
console.log(lasttdBook.getInfo());
console.log(lasttdBook.averageRating);
lasttdBook.genres = ['Трилери та жахи']
console.log(lasttdBook.getInfo());
//A HT 9
class User {
    constructor(username, password, role = 'viewer', isActive = true) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.isActive = isActive;
    }
    login(password) {
        if (password === this.password) {
            this.isActive = true;
            console.log('Успішний вхід');
        } else {
            console.log('Невірний пароль');
        }
    }
    logout() {
        this.isActive = false;
        console.log('Вихід користувача');
    }
    get info() {
        return `Користувач: ${this.username}, Роль: ${this.role}, Статус: ${this.isActive ? 'активний' : 'неактивний'}`;
    }
}

console.log(`======`);
const adminUser = new User('volodymyr696', 'pass1009334', 'admin', true);
console.log(adminUser.info);
console.log(`======`);
adminUser.login('pass1009334');
adminUser.logout();
console.log(adminUser.info);
console.log(`======`);
adminUser.login('passwordadmin');
adminUser.login('pass1009334');
console.log(adminUser.info);

console.log(`======`);
const editorUser = new User('max1322', '143Max221', 'editor', false);
console.log(editorUser.info);
console.log(`======`);
editorUser.login('143Max221');
console.log(editorUser.info);
console.log(`======`);
//A HT 10
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        const existingUser = this.getUser(user.username);
        if (existingUser) {
            console.log(`Користувач з таким ім'ям вже існує`);
            return;
        }
        this.users.push(user);
        console.log('Користувача додано:', user.username);
    }
    removeUser(username) {
        let userFound = false;
        this.users.forEach((user, index) => {
            if (user.username === username) {
                this.users.splice(index, 1);
                console.log('Користувача видалено:', username);
                userFound = true;
            }
        });
        if (!userFound) {
            console.log(`Користувача з таким ім'ям не знайдено`);
        }
    }
    getUser(username) {
        return this.users.find(user => user.username === username);
    }
    getActiveUsers() {
        return this.users.filter(user => user.isActive);
    }
    authenticate(username, password) {
        const user = this.getUser(username);
        if (user && user.password === password) {
            return user;
        }
        console.log(`Невірне ім'я користувача або пароль`);
        return null;
    }
    updateUserRole(username, newRole) {
        const allowedRoles = ['admin', 'editor', 'viewer'];
        if (!allowedRoles.includes(newRole)) {
            console.log('Неправильна роль. Дозволені ролі:', allowedRoles.join(', '));
            return;
        }
        const user = this.getUser(username);
        if (user) {
            user.role = newRole;
            console.log('Роль користувача оновлено:', username, 'присвоєно нову роль:', newRole);
        } else {
            console.log(`Користувача з таким ім'ям не знайдено`);
        }
    }
}

console.log(`======`);
const userManager = new UserManager();
const firstUser = new User('first1', 'onefirst', 'editor', true);
userManager.addUser(firstUser);
console.log(firstUser.info);
console.log(`======`);

userManager.removeUser('first1');
const deletedUser = userManager.getUser('first1');
console.log(deletedUser ? deletedUser.info : 'Користувача не знайдено');
console.log(`======`);

const edUser = new User('editorUs', '1200921Us', 'editor', true);
userManager.addUser(edUser);
userManager.updateUserRole('editorUs', 'viewer');
console.log(edUser.info);

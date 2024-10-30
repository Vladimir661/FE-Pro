//Task 1
function convertToUpperCase (text) {
    return new Promise((resolve, reject) =>{
        if (typeof text !== 'string'){
            reject (new Error('Веденне повино бути рядком!'))
        } else {
            setTimeout(()=> {
                resolve (text.toUpperCase())
            }, 2000);
        }
    });
}
convertToUpperCase('hello upper case!')
.then(result => console.log(result))
.catch(error => console.error(error.message));

convertToUpperCase(66)
.then(result => console.log(result))
.catch(error => console.error(error.message));
//Task 2
function compareNumbers (a, b) {
    return new Promise ((resolve, reject) => {
        if (a > b){
            resolve (`${a} більше за ${b}`);
        }
        else if (b > a) {
           resolve (`${b} більше за ${a}`);
        } else {
            reject (new Error("Числа рівні"));
        }
    })
}
compareNumbers(5, 3)
.then(result => console.log(result))
.catch(error => console.error(error.messsge));

compareNumbers(2, 5)
.then(result => console.log(result))
.catch(error => console.error(error.message));

compareNumbers(9, 9)
.then(result => console.log(result))
.catch(error => console.error(error.message));
//Task 3
fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(users => fetchUsers(users))
       .catch(error => console.error('Помилка:', error));

function fetchUsers(users) {
    const userList = document.querySelector('.user-list');
    users.forEach(user => {
        const userElement = document.createElement('p');
        userElement.textContent = `Ім'я: ${user.name}, Email: ${user.email}`;
        userList.appendChild(userElement);
    });
}

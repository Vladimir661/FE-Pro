//HT 1
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

const tableBody = document.querySelector('#table tbody');

booksArray.forEach(book => {
    const string = document.createElement('tr');

    const titleT = document.createElement('td');
    titleT.textContent = book.title;
    string.appendChild(titleT); 

    const yearT = document.createElement('td');
    yearT.textContent = book.year;
    string.appendChild(yearT); 

    const ratingT = document.createElement('td');
    ratingT.textContent = book.rating;
    string.appendChild(ratingT); 
    tableBody.appendChild(string);
});
//HT 2
const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];

function createElement ({tag, text }) {
    const newElement = document.createElement(tag);
    newElement.textContent = text;
    newElement.style.margin = '0';
    return newElement;
}

const container = document.getElementById('container');
elementsArray.forEach(elementObj => {
    const createdElement = createElement(elementObj);
    container.appendChild(createdElement);
});


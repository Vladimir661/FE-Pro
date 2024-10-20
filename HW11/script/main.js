//Task 1
let mouseEl = document.querySelector('.mouseTask');

mouseEl.addEventListener('mouseover', function() {
    this.innerText = 'Mouse here!';
    this.style.backgroundColor = 'green';
});
mouseEl.addEventListener('mouseout', function() {
    this.innerText = 'Mouse not here!';
    this.style.backgroundColor = 'red';
});
// Task 2
let textBlockEl = document.querySelector('.textBlock');
let contextMenuEl = document.querySelector('#contextMenu');

textBlockEl.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    contextMenuEl.style.display = 'block';
    contextMenuEl.style.top = `${e.pageY}px`;
    contextMenuEl.style.left = `${e.pageX}px`;
});

document.addEventListener('click', function() {
    contextMenuEl.style.display = 'none';
});

contextMenuEl.addEventListener('click', function(e) {
    let action = e.target.getAttribute('data-align');
    let specialAction = e.target.getAttribute('data-action');
    
    if (action) {
        textBlockEl.style.textAlign = action;
        contextMenuEl.style.display = 'none';
    }
    if (specialAction === 'hide') {
        textBlockEl.style.display = 'none';
    }
});
//Task 3
let boxEl = document.querySelector('.movableObject');
let posEl = { x: 0, y: 0 };

const areaWidth = 400;
const areaHeight = 400;
const step = 10;

document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (posEl.y - step >= 0) {
                posEl.y -= step;
            }
            break;
        case 'ArrowDown':
            if (posEl.y + step <= areaHeight - boxEl.offsetHeight) {
                posEl.y += step;
            }
            break;
        case 'ArrowLeft':
            if (posEl.x - step >= 0) {
                posEl.x -= step;
            }
            break;
        case 'ArrowRight':
            if (posEl.x + step <= areaWidth - boxEl.offsetWidth) {
                posEl.x += step;
            }
            break;
    }
    boxEl.style.transform = `translate(${posEl.x}px, ${posEl.y}px)`;
});
//Task 4
document.querySelector('#convertBtn').addEventListener('click', function() {

    const amountEl = parseFloat(document.querySelector('#amount').value);
    const exchangeRate = 0.024;

    if (isNaN(amountEl) || amountEl < 0) {
        document.querySelector('#result').innerText = 'Будь ласка, введіть коректну суму.';
        return;
    }

    const result = amountEl * exchangeRate;

    document.querySelector('#result').innerText = `Результат: ${result.toFixed(2)} USD`;
});
//Task 5
document.querySelector('#addTaskBtn').addEventListener('click', function() {
    const taskInputEl = document.querySelector('#taskInput');
    const taskValueEl = taskInputEl.value.trim();

    if (taskValueEl) {
        const listItemEl = document.createElement('li');
        listItemEl.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItemEl.textContent = taskValueEl;
        listItemEl.style.backgroundColor = 'rgb(120, 237, 223)';
        listItemEl.style.marginBottom = '10px'

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Видалити';
        deleteBtn.onclick = function() {
            taskList.removeChild(listItemEl);
        };
        listItemEl.appendChild(deleteBtn);
        document.querySelector('#taskList').appendChild(listItemEl);
        taskInputEl.value = '';
    } else {
        alert('Будь ласка, введіть назву задачі.');
    }
});

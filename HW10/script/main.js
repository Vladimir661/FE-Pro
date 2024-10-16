//TASK 1
function randomColor (){
    const rgb = `rgb(${Math.floor(Math.random() * 256)}, 
                     ${Math.floor(Math.random() * 256)}, 
                    ${Math.floor(Math.random() * 256)})`;
    return rgb;
}
function changeColor (){
    const pText = document.getElementById('text');
    pText.style.color = randomColor();
}
const clickColor = document.getElementById('click-color');
clickColor.addEventListener ('click', changeColor);
//TASK 2
 function dubleClickChangeSize (){
    clearTimeout(clickTimeout);
    const divBox = document.getElementsByClassName('change-size')[0];
    const currentWidth = divBox.offsetWidth;
    const currentHeight = divBox.offsetHeight;
    divBox.style.width = currentWidth * 2 + 'px';
    divBox.style.height = currentHeight * 2 + 'px';
 }
 function oneClickChangeSize (){
    clickTimeout = setTimeout(() => {
    const divBox = document.getElementsByClassName('change-size')[0];
    const currentWidth = divBox.offsetWidth;
    const currentHeight = divBox.offsetHeight;
    divBox.style.width = currentWidth / 2 + 'px';
    divBox.style.height = currentHeight / 2 + 'px';
  },100);
 }

 const changeSizeBox = document.getElementsByClassName('change-size')[0];
 changeSizeBox.ondblclick = dubleClickChangeSize;
 changeSizeBox.onclick = oneClickChangeSize; 
 //TASK 3
let count = 0;
const counterSpan = document.getElementById('counter-id');
const incBtn = document.getElementById('inc-btn');

function counter (){
    count++
    counterSpan.textContent = count;
    if (count >= 10){
        incBtn.removeEventListener('click', counter);
    }
}

incBtn.addEventListener('click', counter);
//TASK 4
const createButton = document.getElementById('create-elements');
const container = document.getElementById('container');

function removeElement(e) {
     e.target.remove();
}

function createElements() {
    container.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.textContent = i;
    div.addEventListener('click', removeElement);
    container.appendChild(div);
    }
}

createButton.addEventListener('click', createElements);
//TASK 5
const blockContainer = document.querySelector('.blockContainer');

blockContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('button')) {
        alert(`Ви натиснули ${e.target.classList[1]}`);
    }
});
//TASK 6
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', function() {
menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
    toggleButton.textContent = 'Закрити меню';
    } else {
    toggleButton.textContent = 'Відкрити меню';
    }
});

//Task 1
document.querySelector('.colorChangeForm').addEventListener('change', function(e) {
    if (e.target.name === 'color' ){
        document.body.style.backgroundColor = e.target.value;
    }
});
//Task 2
const countryData = {
    ua: { name: "Україна", capital: "Київ", population: "41 млн" },
    pl: { name: "Польща", capital: "Варшава", population: "38 млн" },
    us: { name: "США", capital: "Вашингтон", population: "331 млн" },
    de: { name: "Німеччина", capital: "Берлін", population: "83 млн" }
};

document.querySelector('.countrySelect').addEventListener('change', function() {
    const selectedCountryEl = this.value;
    const infoEl = document.querySelector('.countryInfo');

    if (selectedCountryEl) {
        const country = countryData[selectedCountryEl];
        infoEl.innerHTML = `Країна: ${country.name} Столиця: ${country.capital} Населення: ${country.population}`;
    } else {
        infoDiv.innerHTML = "";
    }
});
//Task 3
let hEl = document.querySelector('.count');
let count = 0;
let intervalId;

let countBtn = document.querySelector('.countBtn');
countBtn.style.marginTop = '10px';

countBtn.addEventListener('click', function() {
    if (!intervalId) {
        intervalId = setInterval(countFn, 1000);
    }
});
function countFn() {
    count++;
    hEl.innerHTML = `Count: ${count}`;
    if (count >= 10) {
        clearInterval(intervalId);
        console.log('Кінець');
        intervalId = null;
        count = 0;
    };
}
//Task 4
let timer;
let timeLeft = 25 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (timer) return;
    
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Таймер!!!!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

updateTimerDisplay();
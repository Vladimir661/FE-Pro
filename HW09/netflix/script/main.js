//TASK 1
// const rating = 3;
// const stars = document.querySelectorAll('.star i');

// stars.forEach((star, index) => {
//     if (index < rating) {
//         star.classList.add('fa-solid', 'yellow-star');
//         star.classList.remove('fa-regular', 'white-star');
//     } else {
//         star.classList.add('fa-regular', 'white-star');
//         star.classList.remove('fa-solid', 'yellow-star');
//     }
// });
// Додаткова задача:
//зробіть на сторінці нетфлікс можливість при кліку на зірку встановити новий рейтинг. Клік по першій зірці рейтинг 1 клік по останній рейтинг 5 і всі 5 зірок жовті

const stars = document.querySelectorAll('.star i');

stars.forEach(star => {
    star.parentElement.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-value'));
        updateStarColors(rating);
    });
});

function updateStarColors(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('fa-solid', 'yellow-star');
            star.classList.remove('fa-regular', 'white-star');
        } else {
            star.classList.add('fa-regular', 'white-star');
            star.classList.remove('fa-solid', 'yellow-star');
        }
    });
}

//TASK 2
const genres = ['Drama', 'Thriller', 'Supernatural'];
const genreContainer = document.querySelector('.genre');

genreContainer.innerHTML = '';

genres.forEach((genre, index) => {
    const genreElement = document.createElement('span');
    genreElement.textContent = genre;
    genreContainer.appendChild(genreElement);
    if (index < genres.length - 1) {
        genreContainer.appendChild(document.createTextNode(' | '));
    }
});
//TASK 3
const sliderImages = [
    'img/Br-Ba.png',
    'img/Rain.png',
    'img/Year.png',
    'img/Money.png',
    'img/Squid.png'
];

let currentImageIndex = 0;
const sliderContainer = document.querySelector('.images');

function showImages() {
    sliderContainer.innerHTML = '';
    const imgElement = document.createElement('img');
    imgElement.src = sliderImages[currentImageIndex];
    sliderContainer.appendChild(imgElement);
}

function swapImages() {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    showImages();
}

setInterval(swapImages, 3000);

showImages();

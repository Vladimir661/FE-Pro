//HT 4-1 
const header = document.createElement('header');
header.style.padding = '50px';
header.style.backgroundColor = 'yellow';
header.style.textAlign = 'center';
document.body.appendChild(header);
//HT 4-2
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
];
//HT 4-3
menuData.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item.name;
    link.setAttribute('href', item.url);
    link.setAttribute('target', '_blank');
    link.style.margin = '0 20px';
    header.appendChild(link);
});
//HT 4-4
const divContainer = document.createElement('div');
divContainer.style.display = 'flex';
divContainer.style.flexWrap = 'wrap';
document.body.appendChild(divContainer);
function getRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;
    return randomColor;
}
//HT 4-5
const newRandomColors = new Set();
for (let i = 0; i < 50; i++) {
    const circleElement = document.createElement('div');
    circleElement.setAttribute('class', 'circle-element');
    circleElement.style.borderRadius = '50%';
    circleElement.style.width = '50px';
    circleElement.style.height = '50px';

    let color;
    for (let с = 0; с < 100; с++) {
        color = getRandomColor();
        if (!newRandomColors.has(color)) {
            newRandomColors.add(color);
            break;
        }
    }
    circleElement.style.backgroundColor = color; 
    divContainer.appendChild(circleElement);
};
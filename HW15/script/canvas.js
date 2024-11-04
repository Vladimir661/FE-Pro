//Task 4
export function createCanvasFn (){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 250, 100);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(50, 150, 250, 100);

    ctx.fillStyle = 'purple';
    ctx.fillRect(400, 100, 250, 100)
    ctx.fillStyle = 'pink';
    ctx.font = '21pt Arial';  
    ctx.fillText ('Hello canvas',450,160);
}
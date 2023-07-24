const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

let changeColor = () => {
    document.getElementById('title').style.color = randomColor();
}
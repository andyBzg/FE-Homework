'use strict';

console.log('Hello, World!');

// 2. Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется.

const magicSquare = document.querySelector('#magicSquare');

// Функция, которая генерирует рандомный цвет
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

// Прослушка на наведение курсора на квадрат и замена background-color
magicSquare.addEventListener('mouseover', () => {
    document.getElementById('magicSquare').style.backgroundColor = randomColor();
})
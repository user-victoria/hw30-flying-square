/*
    1. У HTML створюємо квадрат, наприклад div.block.
    2. За допомогою функції setInterval кожні пів секунди змінюємо колір фону квадрату
       на будь-який рандомний колір.
    3. За допомогою функції setInterval, кожну секунду переміщуємо квадрат на будь-яке місце в межах body.
       Для цього квадрату задаємо рандомні значення властивостей left та top.
       Квадрат не повинен виходити за межі body.
    4. Ширину будь-якого елементу можна знайти за допомогою властивості clientWidth.
    5. Висоту будь-якого елементу можна знайти за допомогою властивості clientHeight.
    Приклад в додатку
*/

const blockRef = document.querySelector('.block');

// block width and height
const blockWidth = blockRef.clientWidth;
const blockHeight = blockRef.clientHeight;

// window width and height
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 2
function randomColor() {
    return Math.floor(Math.random() * 255);
}

setInterval(() => {
    blockRef.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}, 500);

// 3
setInterval(() => {
    blockRef.style.left = Math.floor(Math.random() * (screenWidth - blockWidth)) + 'px';
    blockRef.style.top = Math.floor(Math.random() * (screenHeight - blockHeight)) + 'px';
}, 1000);
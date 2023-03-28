const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});
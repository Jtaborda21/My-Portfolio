let burgerMenuToggle = document.querySelector('.burger-container');
let burgerMenu = document.querySelector('.burger');
let crossMenu = document.querySelector('.cross-menu');

burgerMenuToggle.addEventListener('click', () => {
    burgerMenu.style.left = '0';
})

crossMenu.addEventListener('click', () => {
    burgerMenu.style.left = '100%';
})

const humburgerMenuBtn = document.querySelector('.humburger-menu')
const mobileMenu = document.querySelector('.menu-mobile')

humburgerMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('menu-open')
}) 
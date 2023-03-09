
const humburgerMenuBtn = document.querySelector('.humburger-menu')
const mobileMenu = document.querySelector('.menu-mobile')
const mobileMenuList = document.querySelectorAll('.menu-item')

humburgerMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('menu-open')
}) 

for (let item of mobileMenuList ) {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open')
    })    
}
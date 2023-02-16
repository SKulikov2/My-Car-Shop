// DOM элементы

const buyButton = document.querySelector('.getCar')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')


buyButton.addEventListener('click', () => {
    payment.classList.remove('hidden')
})

close.addEventListener('click', () => {
    payment.classList.add('hidden')
})



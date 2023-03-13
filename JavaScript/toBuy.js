// DOM элементы

const buyButton = document.querySelector('.getCar')
const sendPayButton = document.querySelector('.payButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')


buyButton.addEventListener('click', () => {
    payment.classList.remove('hidden')
})

sendPayButton.addEventListener('click', () => {
    payment.classList.add('hidden')
})

close.addEventListener('click', () => {
    //Валидны оба способа, описанные ниже.
    payment.style.display = 'none'
    // payment.classList.add('hidden')
})



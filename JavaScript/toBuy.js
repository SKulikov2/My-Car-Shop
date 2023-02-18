// DOM элементы

const buyButton = document.querySelector('.getCar')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')


buyButton.addEventListener('click', () => {
    payment.classList.remove('hidden')
})

close.addEventListener('click', () => {
    //Валидны оба способа, описанные ниже.
    payment.style.display = 'none'
    // payment.classList.add('hidden')
})



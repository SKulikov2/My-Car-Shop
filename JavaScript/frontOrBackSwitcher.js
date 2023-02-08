// DOM Элементы

const backSwitchers = document.querySelectorAll('.back')
const frontSwitchers = document.querySelectorAll('.front')
const backImages = document.querySelectorAll('.mainImageBack')
const frontImages = document.querySelectorAll('.mainImageFront')
console.log(frontImages);



// Функционал переключения между видом спереди и видом сзади. И наоборот.

for (let backSwitcher of backSwitchers) {

    // Прорабатываем смену вида с переднего на задний по клику на кнопку 'Вид сзади'

    backSwitcher.addEventListener('click', () => {
        backImages.forEach((item, idx) => {

                item.classList.remove('hidden')
                frontImages[idx].classList.add('hidden')
        })

    // Прорабатываем смену вида с заднего на передний по клику на кнопку 'Вид спереди'

        for (let frontSwitcher of frontSwitchers) {
            frontSwitcher.addEventListener('click', () => {
                frontImages.forEach((item, idx) => {

                    item.classList.remove('hidden')
                    backImages[idx].classList.add('hidden')
                })
            })
        }
    })
}

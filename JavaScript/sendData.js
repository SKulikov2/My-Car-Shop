// DOM элементы 
const askFeedBackBtn = document.querySelector('.btnFeedBack')
const submitContactsBtn = document.querySelector('.submitContacts')
const myDataForm = document.querySelector('.contacts-form')
const feedBackForm = document.querySelector('.feedBack')

askFeedBackBtn.addEventListener('click', () => {
    console.log('click');
    myDataForm.classList.remove('hidden')
})

submitContactsBtn.addEventListener('click', () => {
    console.log('click');
    myDataForm.classList.add('hidden')
})



feedBackForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // Создаем пустой объект чтобы потом заполнить его данными из input
    let data = {}

    // Применяем деструктуризацию, и, вместо 'element' прописываем {name, value}
    for (let {name, value} of feedBackForm.elements) {
        if(name) {
            data[name] = value;
        }
    }

    // Передаем URL в виде строки в метод fetch
    // Метод then отработает только после того как метод fetch получит данные с сервера
    // в виде объекта
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify    (data)
    })
        .then(response => {
            if(response.status === 200 || response.status === 201) {
                // Этой строчкой переводим response в читабельный вид
                return response.json()
            } else {
                throw new Error(response.status);
            }
        })
        .then (data => {
            alert('Данные приняты')
            feedBackForm.reset()
        })
        .catch(error => {
            alert('К сожалению произошла ошибка ' + error.message)
        })
})
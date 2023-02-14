const menuItem = document.querySelectorAll('.menu-item')

for (let item of menuItem) {
    item.addEventListener('click', (event)=> {
        event.preventDefault()

        const ID = event.target.getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView ({
            behavior: "smooth",
            block: 'end'
        });
    })
}
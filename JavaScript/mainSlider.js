// DOM элементы для слайдера

const wrapper = document.querySelector('.sliderWrapper')
const models = document.querySelectorAll('.model-item')


// Имеем массив со вложенными объектами.


const products = [
    {
      id: 1,

      text: 'Лидер в сегменте STANDART (D) по сохранению остаточной стоимости в 2022г.',
      interiorImg: "./images/camry-interior.jpg",
      backInteriorImg: "/images/camry-interior-back.jpg",
      colors: [
        {
            code: "white",
            name: "Белый",
            img: "./images/camry-color-white.png"
          },
        {
          code: "black",
          name: "Черный",
          img: "./images/camry-color-black.png",
        },
        {
          code: "darkred",
          name: "Красный",
          img: "./images/camry-color-darkred.png",
        },
      ],
    },
    {
      id: 2,

      text: 'Второе место в сегменте SUV (C) по сохранению остаточной стоимости в 2021г.',
      interiorImg: "./images/rav4-interior.jpg",
      backInteriorImg: "/images/rav4-interior-back.jpg",
      colors: [
        {
            code: "white",
            name: "Белый",
            img: "./images/rav4-color-white.png"
          },
        {
          code: "black",
          name: "Черный",
          img: "./images/rav4-color-black.png",
        },
        {
          code: "darkred",
          name: "Красный",
          img: "./images/rav4-color-darkred.png",
        },
      ],
    },
    {
      id: 3,

      text: 'Лидер сегмента SUV (D) по сохранению остаточной стоимости в 2018г.',
      interiorImg: "./images/highlander-interior.jpg",
      backInteriorImg: "/images/highlander-interior-back.jpg",
      colors: [
        {
            code: "white",
            name: "Белый",
            img: "./images/highlander-color-whitepearl.png"
          },
        {
          code: "black",
          name: "Черный",
          img: "./images/highlander-color-black.png",
        },
        {
          code: "darkred",
          name: "Красный",
          img: "./images/highlander-color-darkred.png",
        },
      ],
    },
    {
      id: 4,

      text: 'Лидер в сегменте STANDART (Pickup) по сохранению остаточной стоимости в 2022г.',
      interiorImg: "./images/hilux-interior.jpg",
      backInteriorImg: "/images/hilux-interior-back.jpg",
      colors: [
        {
            code: "white",
            name: "Белый",
            img: "./images/hilux-color-white.png"
          },
        {
          code: "black",
          name: "Черный",
          img: "./images/hilux-color-black.png",
        },
        {
          code: "darkred",
          name: "Красный",
          img: "./images/hilux-color-red.png",
        },
      ],
    },
    {
      id: 5,

      text: 'Третье место в сегменте SUV (D) по сохранению остаточной стоимости в 2022г.',
      interiorImg: "./images/prado-interior.jpg",
      backInteriorImg: "/images/prado-interior-back.jpg",
      colors: [
        {
            code: "white",
            name: "Белый",
            img: "./images/prado-color-white.png"
          },
        {
          code: "black",
          name: "Черный",
          img: "./images/prado-color-black.png",
        },
        {
          code: "grey",
          name: "Серый",
          img: "./images/prado-color-grey.png",
        },
      ],
    },
  ];

// DOM элементы для части где мы будем менять цвет

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
const currentProductRewardText = document.querySelector('.rewardText')
const currentProductColors = document.querySelectorAll('.color')
const currentProductColorsNames = document.querySelectorAll('.colorName')
const currentInteriorImg = document.querySelector('.interiorImg')
const currentBackInteriorImg = document.querySelector('.backInteriorImg')



// Необходимо найти решения для LC Prado по факту цвет серый, а текстом написано 'Красный', как у остальных
// const currentColorNames = document.querySelectorAll('.colorName')



// Код отвечает за работу слайдера

models.forEach((item, index) => {
    item.addEventListener('click', () => {

// Меняем слайд по нажатию на модель
        wrapper.style.transform = `translateX(${-100 * index}vw)`  

// Меняем выбранную модель
        choosenProduct = products[index]
        
// Задаем каждой модели соответствующий текст номинации
        currentProductRewardText.textContent = choosenProduct.text;


// Это изобоажение будет первым для каждой модели
        currentProductImg.src = choosenProduct.colors[0].img

// Это изображение передней части интерьера интерьера каждого ТС
        currentInteriorImg.src = choosenProduct.interiorImg

// Это изображение задней части интерьера интерьера каждого ТС

        currentBackInteriorImg.src = choosenProduct.backInteriorImg

// Меняем палитру цветов справа от картинки авто в соответствии с выбранной моделью
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })

// Меняем названия цветов, в данном примере актуально для Prado, так как вместо красного у него серый
        currentProductColorsNames.forEach((name, index) => {
            name.textContent = choosenProduct.colors[index].name
        })


    })
})


// Меняем цвет по нажатию на соответствующую кнопку
currentProductColors.forEach((color, index)=> {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})
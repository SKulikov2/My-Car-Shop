// DOM элементы для слайдера

const wrapper = document.querySelector('.sliderWrapper')
const models = document.querySelectorAll('.model-item')


// Имеем массив со вложенными объектами.


const products = [
    {
      id: 1,
      image: "./images/Camry-reward",
      text: 'Признана лидером в сегменте STANDART (D) по сохранению остаточной стоимости в 2022г.',
      colors: [
        {
            code: "white",
            img: "./images/camry-color-white.png"
          },
        {
          code: "black",
          img: "./images/camry-color-black.png",
        },
        {
          code: "darkred",
          img: "./images/camry-color-darkred.png",
        },
      ],
    },
    {
      id: 2,
      image: "./images/Rav4-reward",
      text: 'Занял второе место в сегменте SUV (C) по сохранению остаточной стоимости в 2021г.',
      colors: [
        {
            code: "white",
            img: "./images/rav4-color-white.png"
          },
        {
          code: "black",
          img: "./images/rav4-color-black.png",
        },
        {
          code: "darkred",
          img: "./images/rav4-color-darkred.png",
        },
      ],
    },
    {
      id: 3,
      image: "./images/Rav4-reward",
      text: 'Одержал победу в номинации «Большие кроссоверы» престижной премии Гран-при «За рулем».',
      colors: [
        {
            code: "white",
            img: "./images/highlander-color-whitepearl.png"
          },
        {
          code: "black",
          img: "./images/highlander-color-black.png",
        },
        {
          code: "darkred",
          img: "./images/highlander-color-darkred.png",
        },
      ],
    },
    {
      id: 4,
      image: "./images/Rav4-reward",
      text: 'Признан лидером в сегменте STANDART (Pickup) по сохранению остаточной стоимости в 2022г.',
      colors: [
        {
            code: "white",
            img: "./images/hilux-color-white.png"
          },
        {
          code: "black",
          img: "./images/hilux-color-black.png",
        },
        {
          code: "darkred",
          img: "./images/hilux-color-red.png",
        },
      ],
    },
    {
      id: 5,
      image: "./images/Rav4-reward",
      text: 'Занял третье место в сегменте STANDART (С) по сохранению остаточной стоимости в 2022г.',
      colors: [
        {
            code: "white",
            img: "./images/prado-color-white.png"
          },
        {
          code: "black",
          img: "./images/prado-color-black.png",
        },
        {
          code: "grey",
          img: "./images/prado-color-grey.png",
        },
      ],
    },
  ];

// DOM элементы для части где мы будем менять цвет

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
// const currentProductRewardImg = document.querySelector('.reward-image')
const currentProductRewardText = document.querySelector('.rewardText')
const currentProductColors = document.querySelectorAll('.color')



// const currentColorNames = document.querySelectorAll('.color-name')

// Код отвечает за работу слайдера

models.forEach((item, index) => {
    item.addEventListener('click', () => {

// Меняем слайд по нажатию на модель
        wrapper.style.transform = `translateX(${-100 * index}vw)`  

// Меняем выбранную модель
        choosenProduct = products[index]
        
        currentProductRewardText.textContent = choosenProduct.text;

// Меняем картинку ТС
        currentProductImg.src = choosenProduct.colors[0].img

// Меняем палитру цветов в соответствии с выбранной моделью

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })

    })
})


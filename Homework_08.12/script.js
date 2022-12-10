'use strict';

console.log('Hello, World!');

// 1. В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.

// Объявляем массив и добавляем в него картинки
const arrayOfImages = [];
arrayOfImages.push('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80');
arrayOfImages.push('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
arrayOfImages.push('https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
arrayOfImages.push('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80');
arrayOfImages.push('https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')

//Найдём в документе все маленькие карточки с картинками
const imgCards = document.querySelectorAll('.grid');

// Добавляем адреса картинок из массива к тегам <img>
for(let i = 0; i < imgCards.length; i++){
    imgCards[i].setAttribute('src', arrayOfImages[i]);
}

// Создаем переменную с адресом большой картинки и добавляем в нее адрес на последнюю картинку из массива
const largeImage = document.querySelector('#largeImg');
largeImage.setAttribute('src', arrayOfImages[4]);

// Фунция передаёт новый адрес для большой картинки
function showThumbnail(newUrl) {
    largeImage.setAttribute('src', newUrl);
}

// Прослушка нажатий на маленькие карточки и сохранение адреса в отдельную переменную, вызов функции для подмены адреса
imgCards.forEach(card => card.addEventListener('mousedown', () => {
    const thumbnailUrl = card.getAttribute('src');
    showThumbnail(thumbnailUrl);
}))
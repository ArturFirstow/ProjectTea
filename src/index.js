

// Обработчик событий на клик по ссылке
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение браузера
      const href = this.getAttribute('href'); // Получаем якорь из атрибута href ссылки
      const target = document.querySelector(href); // Получаем элемент, к которому нужно прокрутить страницу
  
      // Выполняем плавную анимированную прокрутку к элементу
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



const headerBtn = document.querySelector('.header-btn');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal-form');

headerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modalContainer.style.display = 'flex';


  window.scrollTo({
    top: window.innerHeight / 2,
    left: 0,
    behavior: 'smooth'

});
});

modalContainer.addEventListener('click', (event) => {
if (event.target === modalContainer) {
modalContainer.style.display = 'none';
}
});

modalForm.addEventListener('submit', (event) => {
event.preventDefault();

modalContainer.style.display = 'none';
});





// Получаем кнопку
const button = document.querySelector('.footer-btn');

// Функция для изменения текста и цвета кнопки
function sendButton() {
  // Добавляем класс, изменяющий цвет кнопки
  button.classList.add('sent');

  // Изменяем текст на кнопке
  button.textContent = 'Отправлено!';

  // Удаляем обработчик событий на клик, чтобы кнопка не работала после отправки
  button.removeEventListener('click', sendButton);
}

// Обработчик событий на клик для кнопки
button.addEventListener('click', function() {
  // Добавляем анимацию
  button.classList.add('animated', 'fadeOut');

  // Вызываем функцию для изменения текста и цвета кнопки после окончания анимации
  setTimeout(sendButton, 1000);
});









  
Aos.init();


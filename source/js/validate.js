// const form = document.querySelector('.form-fill');
// const nameInput = form.querySelector('.user');
// const phoneInput = form.querySelector('.password');
// const button = form.querySelector('.form__button');

// function updateSubmitButtonState() {
//   const name = nameInput.value; // login
//   const phone = phoneInput.value; // password

//   // button, что оба поля заполнены
//   button.disabled = !name || !phone;
// }

// nameInput.addEventListener('input', updateSubmitButtonState);
// phoneInput.addEventListener('input', updateSubmitButtonState);


// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const name = nameInput.value;
//   const phone = phoneInput.value;

//   // Проверяем, что поля заполнены


//   // Проверяем имя
//   if (!isValidName(name)) {
//     nameInput.classList.add('form__input--error');
//   } else {
//     nameInput.classList.remove('form__input--error');
//   }

//   // Проверяем телефон
//   if (!isValidPhone(phone)) {
//     phoneInput.classList.add('form__input--error');
//     return;
//   } else {
//     phoneInput.classList.remove('form__input--error');
//   }

//   // Если всё в порядке, отправляем форму
//   form.submit();
// });

// function isValidName(name) {
//   const pattern = /^[А-Яа-яЁё\s-]{2,20}$/;
//   return pattern.test(name);
// }

// function isValidPhone(phone) {
//   const pattern = /^\d{3}-\d{3}-\d{4}$/;
//   return pattern.test(phone);
// }

// updateSubmitButtonState();


// // const form = document.querySelector('.form-fill');//.my-form
// // const nameInput = form.querySelector('.user');// const loginInput username
// // const phoneInput = form.querySelector('.password'); //passwordInput password


// // form.addEventListener('submit', (evt) => {
// //   // Отменяем действие по умолчанию
// //   evt.preventDefault();

// //   // Получаем значения полей формы
// //   const name = nameInput.value; //login
// //   const phone = phoneInput.value; //password


// //   // Проверяем, что поля заполнены
// //   if (!name || !phone) {
// //     return;
// //   }

// //   // Проверяем, что имя пользователя содержит только буквы и цифры
// //   if (!isValidName(name)) {
// //     nameInput.classList.add('form__input--error');
// //     return;
// //   }

// //   // Проверяем, что пароль содержит хотя бы одну заглавную букву, одну строчную букву и одну цифру
// //   if (!isValidPhone(phone)) {
// //     return;
// //   }

// //   // Если всё в порядке, отправляем форму
// //   form.submit();
// // });

// // function isValidName(name) {
// //   // Проверка имени регулярным выражением
// //   const pattern = /^[А-Яа-я]{2,20}$/;
// //   return pattern.test(name);
// // }

// // function isValidPhone(phone) {
// //   // Проверка пароля регулярным выражением
// //   const pattern = /^\d{3}-\d{3}-\d{4}$/;
// //   return pattern.test(phone);
// // }

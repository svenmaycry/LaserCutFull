export const initModalMistakes = () => {
  
  const modalMistakes = document.querySelector('.js-mistakes-modal');
  const closeModalButton = document.querySelector('.js-mistakes-close-btn');
  const formMistakes = document.querySelector('.js-mistakes-form');
  const formMessage = document.querySelector('.js-mistakes-textarea');
  const selectedTextContainer = document.querySelector('.js-mistakes-selected-text');
  const formName = document.querySelector('.js-mistakes-name');
  const formSubmitButton = document.querySelector('.js-mistakes-send-btn');
  const formCancelButton = document.querySelector('.js-mistakes-cancel-btn');
  const successMessage = document.querySelector('.js-success-message');

  const MAX_MESSAGE_LENGTH = 5000;
  const MAX_NAME_LENGTH = 50;
  const MAX_SELECTED_TEXT_LENGTH = 1000;

  const addEventListeners = () => {
    formMistakes.addEventListener('submit', onSubmitForm);
    formCancelButton.addEventListener('click', onCancelFormButtonClick);
    closeModalButton.addEventListener('click', onCloseModalButtonClick);
    window.addEventListener('click', onWindowClick);
    formMessage.addEventListener('focus', onFocusFormMessage);
    formMessage.addEventListener('blur', onBlurFormMessage);
    formMessage.addEventListener('input', onMessageInput);
    formName.addEventListener('input', onNameInput);
  };

  const removeEventListeners = () => {
    formMistakes.addEventListener('submit', onSubmitForm);
    formCancelButton.removeEventListener('click', onCancelFormButtonClick);
    closeModalButton.removeEventListener('click', onCloseModalButtonClick);
    window.removeEventListener('click', onWindowClick);
    formMessage.removeEventListener('focus', onFocusFormMessage);
    formMessage.removeEventListener('blur', onBlurFormMessage);
    formMessage.removeEventListener('input', onMessageInput);
    formName.removeEventListener('input', onNameInput);
  };


// Показать модалку с формой
  const showModal = (evt) => {

    if (evt.ctrlKey && evt.keyCode === 13) {
      evt.preventDefault();
      let selectedText = window.getSelection().toString().trim();
      let sourceText = document.getElementById('source-text');
      (selectedText.length > 0) ? sourceText.setAttribute('value', selectedText) : null;

      if (modalMistakes.style.display === 'none' && selectedText === '') {
        alert('Выделите нужный текст для отправки формы!');
      } else if (modalMistakes.style.display === 'none') {
        if (selectedText.length > MAX_SELECTED_TEXT_LENGTH) {
          alert('Можно выделить не более 1000 символов!');
        } else {
          modalMistakes.style.display = 'flex';
          formMessage.focus();
          selectedTextContainer.textContent = selectedText;
          selectedTextContainer.style.cssText = 'color:red';
          addEventListeners();
        }
      }
    }
  };

// Отправка формы
  const sendForm = () => {

    formSubmitButton.disabled = true;
    formSubmitButton.textContent = 'Отправка...';

    const formData = new FormData(formMistakes);

    fetch('/handler-mistakes.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {

        if (response.ok) {
          successMessage.style.display = 'block';
          formSubmitButton.textContent = 'Отправлено';
        } else {
          // Включаем кнопку отправки снова при ошибке
          formSubmitButton.disabled = false;
          formSubmitButton.textContent = 'Отправить';
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        // Включаем кнопку отправки снова при ошибке
        formSubmitButton.disabled = false;
        formSubmitButton.textContent = 'Отправить';
      });
  };

// Закрытие формы
  const closeForm = () => {
    modalMistakes.style.display = 'none';
    formMessage.style.cssText = 'height:108px';
    formMessage.value = '';
    formName.value = '';
    formSubmitButton.disabled = false;
    formSubmitButton.textContent = 'Отправить';
    successMessage.style.display = 'none';
    removeEventListeners();
  };

// При нажатии на ctrl+enter - показ формы, при клике на esp - закрытие формы.
  const onDocumentKeydown = (evt) => {
    showModal(evt);
    if (evt.key === 'Escape') {
      closeForm();
    }
  };

// При клике на отправить - отправка формы.
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    sendForm();
  };

// При клике на отмену - закрытие формы.
  const onCancelFormButtonClick = () => {
    closeForm();
  };

// Закрытие формы при клике на крестик.
  const onCloseModalButtonClick = () => {
    closeForm();
  };

// При клике вне модалки - закрытие формы.
  const onWindowClick = (evt) => {
    if (evt.target === modalMistakes) {
      closeForm();
    }
  };

// При фокусировке в "Что исправить?" убирать красную границу
  const onFocusFormMessage = () => {
    formMessage.style.borderColor = '';
  };

// При потере фокуса в "Что исправить?" добавлять красную границу
  const onBlurFormMessage = () => {
    if (formMessage.value.trim() === '') {
      formMessage.style.borderColor = 'red';
    }
  };

// В textarea если длина вводимых символов больше MAX_MESSAGE_LENGTH - обрезка символов.
  const onMessageInput = () => {
    if (formMessage.value.length > MAX_MESSAGE_LENGTH) {
      formMessage.value = formMessage.value.slice(0, MAX_MESSAGE_LENGTH);
    }
  };

// В input если длина вводимых символов больше MAX_NAME_LENGTH - обрезка символов.
  const onNameInput = () => {
    if (formName.value.length > MAX_NAME_LENGTH) {
      formName.value = formName.value.slice(0, MAX_NAME_LENGTH);
    }
  };

// Добавляем постоянный обработчик события
  document.addEventListener('keydown', onDocumentKeydown);
};


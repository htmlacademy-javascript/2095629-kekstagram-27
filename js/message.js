const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');


const onMessageEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
};

const onClickCloseButton = (evt) => {
  evt.preventDefault();
  hideMessage();
};

const onOverlayClick = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  const closeButton = successMessage.querySelector('.success__button');

  closeButton.addEventListener('click', onClickCloseButton);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  body.append(successMessage);
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  const closeButton = errorMessage.querySelector('.error__button');

  closeButton.addEventListener('click', onClickCloseButton);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  body.append(errorMessage);
};

function hideMessage () {
  const message = document.querySelector('.error') || document.querySelector('.success');
  message.remove();

  document.removeEventListener('click',onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
}

// const onSendDataSuccess = () => {

// };

export { /*showMessage,*/ showSuccessMessage, showErrorMessage};

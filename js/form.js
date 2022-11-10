import { validateHastags} from './utils.js';
import { resetScalePicture } from './scale.js';
import { resetEffect } from './effects.js';
import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const body = document.querySelector('body');
const overlay = body.querySelector('.img-upload__overlay');
const form = body.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const cancelButton = form.querySelector('.img-upload__cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};


const resetForm = () => {
  form.reset();
  resetEffect();
  resetScalePicture();
};


const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeyDown);
};

const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
};

const isActiveField = () => (document.activeElement === hashtagField) || (document.activeElement === commentField);

function onEscapeKeyDown(evt) {
  if (evt.key === 'Escape' && !isActiveField()) {
    hideModal();
    resetForm();
  }
}

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper__error-message'
});

pristine.addValidator(
  hashtagField,
  validateHastags,
  'Неправильно введён хеш-тег',
);

const onFileInputChange = () => {
  showModal();
};

const setUserFormSubmit = () => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    const isValid = pristine.validate();
    document.addEventListener('keydown', onEscapeKeyDown);

    if (isValid) {

      const formData = new FormData(evt.target);

      sendData(
        () => {
          unblockSubmitButton();
          showSuccessMessage();
          hideModal();
          resetForm();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        formData
      );
    } else {
      showErrorMessage();
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', hideModal);
export { setUserFormSubmit };

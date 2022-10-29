const body = document.querySelector('body');
const overlay = body.querySelector('.img-upload__overlay');
const form = body.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const cancelButton = form.querySelector('.img-upload__cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const MAX_COUNT_TAGS = 5;
const TAGS_VALID = /^#[a-zа-яё0-9]{1,19}$/i;


const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeyDown);
};

const hideModal = () => {
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
};

const isActiveField = () => (document.activeElement === hashtagField) || (document.activeElement === commentField);

function onEscapeKeyDown(evt) {
  if (evt.key === 'Escape' && !isActiveField()) {
    hideModal();
  }
}

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper__error-message'
});

const getTagList = (tags) => {
  const uniqueHashtags = new Set(tags.toLowerCase().split(' ').filter((tag) => tag.trim()));
  return Array.from(uniqueHashtags);
};
const isValidCount = (tagList) => tagList.length <= MAX_COUNT_TAGS;

const isValidHastag = (hashtag) => TAGS_VALID.test(hashtag);

const validateHastags = (tags) => {
  const tagList = getTagList(tags);

  return isValidCount(tagList) && tagList.every(isValidHastag);
};

pristine.addValidator(
  hashtagField,
  validateHastags,
  'Неправильно введён хеш-тег',
);

const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', hideModal);
form.addEventListener('submit', onFormSubmit);

const MAX_COUNT_TAGS = 5;
const TAGS_VALID = /^#[a-zа-яё0-9]{1,19}$/i;
const ALERT_SHOW_TIME = 5000;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this,rest),timeoutDelay);
  };
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


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

const showElements = (elements, quantityElementsToShow) => {
  for (let i = 0; i < quantityElementsToShow && i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
};

const getRandomInt = (min, max) => {
  if ((max < 0) || (min < 0)) {
    return NaN;
  }
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectLength = (text, maxLenght) => text.length <= maxLenght;
getCorrectLength('');

const getRandomElementArray = (array) => array[getRandomInt(0, array.length - 1)];

const getRandomArray = (array, countElement) => {
  if (array.length <= countElement) {
    return array;
  }

  let resultArray = [];
  while (resultArray.length !== countElement) {
    resultArray.push(getRandomElementArray(array));
    resultArray = Array.from(new Set(resultArray));
  }
  return resultArray;
};

const comparePhotos = (photoA, photoB) => {
  const commentA = photoA.comments.length;
  const commentB = photoB.comments.length;
  return commentB - commentA;
};

const sortedByMostDiscussed = (photos) => photos.slice().sort(comparePhotos);

export {
  getRandomInt,
  getRandomElementArray,
  validateHastags,
  showElements,
  showAlert,
  debounce,
  getRandomArray,
  sortedByMostDiscussed
};

const MAX_COUNT_TAGS = 5;
const TAGS_VALID = /^#[a-zа-яё0-9]{1,19}$/i;

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

export {getRandomInt, getRandomElementArray, validateHastags, showElements};

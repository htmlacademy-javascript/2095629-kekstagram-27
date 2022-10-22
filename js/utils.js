const getRandomInt = (min, max) => {
  if ((max < 0) || (min < 0)) {
    return NaN;
  }
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
const getCorrectLength = (text, maxLenght) => text.length <= maxLenght;
getCorrectLength();
Закомментировал потому, что из-за этого ругался браузер и не хотел отображать код из thumbnails.js
Ругался из-за того, что не найден text
*/
const getRandomElementArray = (array) => array[getRandomInt(0, array.length - 1)];

export {getRandomInt, getRandomElementArray};

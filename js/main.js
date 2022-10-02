// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (((max < 0) || (min < 0)) || (max === min)) {
    return NaN
  }

  if (max < min) {
    const SWAP = min;
    min = max;
    max = SWAP;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 140))
// Функция для проверки максимальной длины строки
const commentText = 'Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа.';

const isCorrectLength = (text, maxLenght) => {
  if (text.length > maxLenght) {
    return false
  }

  return true
}

console.log(isCorrectLength(commentText, 140));

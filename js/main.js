// Функция, возвращающая случайное целое число из переданного диапазона включительно
const rangeStart = 0;
const rangeEnd = 140;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (((max < 0) || (min < 0)) || (max === min))  {
    return NaN
  }

  if (max < min) {
    let swap = min;
    min = max;
    max = swap;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(rangeStart,rangeEnd));

// Функция для проверки максимальной длины строки
// должна быть универсальна
// Результат: true, если строка проходит по длине, и false — если не проходит


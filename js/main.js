const PHOTO_DESCRIPTION = [
  'Пляж с шезлонгами на территории отеля.',
  'Указатель, показывающий как пройти на пляж.',
  'Дикий песчаный пляж с лазузрой водой и небольшим количеством больших камней в воде.',
  'Красивая дувушка в бикини, держит фотоаппарат на фоне вечернего пляжа.',
  'Две чашечки супа, в каждой из которых, как в ванне, располагаются счастливые рисовые человечки.',
  'Чёрный спортивный автомобиль с открывающимися дверями вверх.',
  'Тарелка в японском стиле с парой кусочков клубники на ней и специальной вилкой для их поедания.',
  'Два оранжево-красных коктейля в полулитровых бокалах и две веточки с ягодами.',
  'Девушка в бикини машет пролетающему над пляжем небольшому самолёту.',
  'Выдвижная подставка для обуви на колесиках',
  'Песчанная дорожка, ведущая к морю, окружённая деревянными оградами с зеленью.',
  'Белая ауди с зелёными передними фарами в небольшом городке .',
  'Блюдо в овощами и красной рыбой.',
  'Рыжий кот в роли начинки в онигири.',
  'Закинутые ноги на боковую стенку дивана, одетые в большие мягкие тапочки в виде ',
  'Самолёт, летящий над облаками со сверхзвуковой скоростью и пролетающий над скалистой местностью.',
  'Сцена на которой выступает хор, одетые в чёрное.',
  'Эта красная машина в стили ретро - просто бомба',
  'Белые тапочки с яркими лампочками-фонариками в подошве',
  'Аллея пальм',
  'А лайм то лишний',
  'Берег на фоне заходящего солнца',
  'Какой-то воинствующий краб',
  'Концерт некого рэп испольнителя',
  'Бегемоты решили покричать на белый внедорожник'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Валера', 'Маша', 'Никита', 'Дима', 'Миша', 'Гоша'];

const LIKES_COUNT = { minimum: 15, maximum: 200};
const AVATAR_COUNT = { minimum: 1, maximum: 6};
const PHOTO_COUNT = 25;

const getRandomInt = (min, max) => {
  if ((max < 0) || (min < 0)) {
    return NaN;
  }
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectLength = (text, maxLenght) => text.length <= maxLenght;

const getRandomElementArray = (array) => array[getRandomInt(0, array.length - 1)];

const createMessage = () => getRandomElementArray(MESSAGES);

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInt(AVATAR_COUNT.minimum, AVATAR_COUNT.maximum)}.svg`,
  message: createMessage(),
  name: getRandomElementArray(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url:  `photos/${index}.jpg`,
  description: getRandomElementArray(PHOTO_DESCRIPTION),
  likes: getRandomInt(LIKES_COUNT.minimum, LIKES_COUNT.maximum),
  comments: Array.from(
    {length: getRandomInt(1,3)},
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPhotos = () => Array.from(
  {length: PHOTO_COUNT},
  (_, photoIndex) => createPhoto(photoIndex + 1)
);

getCorrectLength('',140);
getPhotos();

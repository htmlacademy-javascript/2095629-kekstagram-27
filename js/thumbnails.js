import { getPhotos } from './data.js';

const userPhotos = getPhotos();
const userPhotosContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

userPhotos.forEach((photo) => {
  const photoItem = pictureTemplate.cloneNode(true);
  const image = photoItem.querySelector('.picture__img');
  const likes = photoItem.querySelector('.picture__likes');
  const quantityComments = photoItem.querySelector('.picture__comments');

  image.src = photo['url'];
  image.alt = photo['description'];
  likes.textContent = photo['likes'];
  quantityComments.textContent = photo['comments'].length;

  fragment.append(photoItem);
});

userPhotosContainer.append(fragment);


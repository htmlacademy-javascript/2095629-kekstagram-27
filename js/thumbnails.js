import { showBigPicture } from './big-pictures.js';
const userPhotosContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const createPhoto = (photoData) => {
  const photoItem = pictureTemplate.cloneNode(true);
  const image = photoItem.querySelector('.picture__img');
  const likes = photoItem.querySelector('.picture__likes');
  const quantityComments = photoItem.querySelector('.picture__comments');

  image.src = photoData['url'];
  image.alt = photoData['description'];
  likes.textContent = photoData['likes'];
  quantityComments.textContent = photoData['comments'].length;

  photoItem.addEventListener('click', () => {
    showBigPicture(photoData);
  });

  return photoItem;
};

const renderPhotos = (photos) => {
  photos.forEach((photo) => {
    const photoElement = createPhoto(photo);
    fragment.append(photoElement);
  });

  userPhotosContainer.append(fragment);
};

export { renderPhotos };

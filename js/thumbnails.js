import { showBigPicture } from './big-pictures.js';
const userPhotosContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const createPhoto = (photoData) => {
  const {url, description, likes, comments} = photoData;
  const photoItem = pictureTemplate.cloneNode(true);
  const image = photoItem.querySelector('.picture__img');
  const likesCount = photoItem.querySelector('.picture__likes');
  const quantityComments = photoItem.querySelector('.picture__comments');

  image.src = url;
  image.alt = description;
  likesCount.textContent = likes;
  quantityComments.textContent = comments.length;

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

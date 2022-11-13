import { showBigPicture } from './big-pictures.js';
const userPhotosContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageFilters = document.querySelector('.img-filters');

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

const clearPhotos = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures.length > 0) {
    pictures.forEach((picture) => picture.remove());
  }
};


const renderPhotos = (photos) => {
  clearPhotos();

  photos.forEach((photo) => {
    const photoElement = createPhoto(photo);
    fragment.append(photoElement);
  });

  imageFilters.classList.remove('img-filters--inactive');

  userPhotosContainer.append(fragment);
};

export { renderPhotos };

import { setUserFormSubmit } from './form.js';
import { renderPhotos } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert, debounce, getRandomArray, sortedByMostDiscussed } from './utils.js';
import { setDefaultPhotosClick, setDiscussedPhotoClick, setRandomPhotosClick } from './filters.js';

const RENDER_DELAY = 500;
const COUNT_RANDOM_PHOTO = 10;

getData(
  (photos) => {
    renderPhotos(photos);

    setDefaultPhotosClick(debounce(
      () => renderPhotos(photos),
      RENDER_DELAY,
    ));

    setRandomPhotosClick(debounce(
      () => renderPhotos(getRandomArray(photos, COUNT_RANDOM_PHOTO)),
      RENDER_DELAY,
    ));

    setDiscussedPhotoClick(debounce(
      () => renderPhotos(sortedByMostDiscussed(photos)),
      RENDER_DELAY,
    ));
  }
  ,showAlert
);

setUserFormSubmit();

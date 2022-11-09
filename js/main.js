import { setUserFormSubmit } from './form.js';
import { renderPhotos } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

getData(renderPhotos, showAlert);


setUserFormSubmit();

import { renderPhotos } from './thumbnails.js';
import { getPhotos } from './data.js';
import './form.js';
renderPhotos(getPhotos(25));

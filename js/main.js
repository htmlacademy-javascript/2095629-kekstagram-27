import { renderPhotos } from './thumbnails.js';
import { getPhotos } from './data.js';

renderPhotos(getPhotos(25));

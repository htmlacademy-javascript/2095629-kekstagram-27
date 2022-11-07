import { setUserFormSubmit, hideModal} from './form.js';
import { renderPhotos } from './thumbnails.js';
import { getData } from './api.js';

getData((photos) => renderPhotos(photos));
setUserFormSubmit(hideModal);

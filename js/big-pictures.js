const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const commnetsContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social-comment').content.querySelector('.social__comment');


const createComment = (commentData) => {
  const {avatar, message, name} = commentData;
  const commentElement = commentTemplate.cloneNode(true);
  const image = commentElement.querySelector('.social__picture');
  const messageText = commentElement.querySelector('.social__text');

  image.src = avatar;
  image.atl = name;
  messageText.textContent = message;

  return commentElement;
};

const renderComments = (comments) => {
  commnetsContainer.innerHTML = '';
  const socialComments = document.createDocumentFragment();

  comments.forEach((commentData) => {
    const commentElement = createComment(commentData);
    socialComments.append(commentElement);
  });

  commnetsContainer.append(socialComments);
};


// const hideBigPictures = () => {
//   body.classList.remove('modal-open');
//   bigPictures.classList.add('hidden');
// };

const createBigPicture = ({url, description, likes}) => {
  const image = bigPicture.querySelector('.big-picture__img').querySelector('img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');

  image.src = url;
  image.alt = description;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
};

const showBigPicture = (photoData) => {
  const {comments} = photoData;

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');

  createBigPicture(photoData);
  renderComments(comments);
};

export { showBigPicture };

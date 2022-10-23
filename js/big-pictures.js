const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const commentCounter = document.querySelector('.social__comment-count');
const commnetsContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social-comment').content.querySelector('.social__comment');
const canselButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = (commentData) => {
  const {avatar, message, name} = commentData;
  const commentElement = commentTemplate.cloneNode(true);
  const commentatorAvatar = commentElement.querySelector('.social__picture');
  const messageText = commentElement.querySelector('.social__text');

  commentatorAvatar.src = avatar;
  commentatorAvatar.atl = name;
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

  return commnetsContainer;
};

const createBigPicture = ({url, description, likes, comments}) => {
  const image = bigPicture.querySelector('.big-picture__img').querySelector('img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');

  image.src = url;
  image.alt = description;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  renderComments(comments);
};

const hideBigPicture = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeyDown);
};

const onClickCanselButton = () => {
  hideBigPicture();
};

const ESC_KEY = 27;

function onEscapeKeyDown(evt) {
  if (evt.keyCode === ESC_KEY) { // А можно ли написать иначе : (evt.key === 'Escape') ?
    hideBigPicture();
  }
}


const showBigPicture = (photoData) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCounter.classList.add('hidden');

  document.addEventListener('keydown', onEscapeKeyDown);

  createBigPicture(photoData);
};

canselButton.addEventListener('click', onClickCanselButton);
export { showBigPicture };

import { showElements } from './utils.js';
const COUNT_LOAD_COMMENT = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const commentCounter = document.querySelector('.social__comment-count');
const commnetsContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social-comment').content.querySelector('.social__comment');
const canselButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = (commentData) => {
  const {avatar, message, name} = commentData;
  const comment = commentTemplate.cloneNode(true);
  const commentatorAvatar = comment.querySelector('.social__picture');
  const messageText = comment.querySelector('.social__text');

  commentatorAvatar.src = avatar;
  commentatorAvatar.atl = name;
  messageText.textContent = message;

  return comment;
};

const countsCommentShown = () => {
  const countsAllComments = commnetsContainer.querySelectorAll('.social__comment').length;
  const countsHideComments = commnetsContainer.querySelectorAll('.hidden').length;
  const countsShowComments = countsAllComments - countsHideComments;

  commentCounter.textContent = `${countsShowComments} из ${countsAllComments} комментариев`;
};

const uploadMoreComments = () => {
  const hiddenComments = commnetsContainer.querySelectorAll('.hidden');

  showElements(hiddenComments,COUNT_LOAD_COMMENT);

  if (hiddenComments.length <= COUNT_LOAD_COMMENT) {
    commentsLoader.classList.add('hidden');
  }

  countsCommentShown();
};

const renderComments = (comments) => {
  while (commnetsContainer.firstChild) {
    commnetsContainer.removeChild(commnetsContainer.firstChild);
  }
  const socialComments = document.createDocumentFragment();

  comments.forEach((commentData) => {
    const comment = createComment(commentData);
    comment.classList.add('hidden');
    socialComments.append(comment);
  });

  commnetsContainer.append(socialComments);

  uploadMoreComments();

  return commnetsContainer;
};

const onClickUploadCommnent = (evt) => {
  evt.preventDefault();
  uploadMoreComments();
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
  commentsLoader.removeEventListener('click', onClickUploadCommnent);
};

const onClickCanselButton = () => {
  hideBigPicture();
};

function onEscapeKeyDown(evt) {
  if (evt.key === 'Escape') {
    hideBigPicture();
  }
}

const showBigPicture = (photoData) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.remove('hidden');

  document.addEventListener('keydown', onEscapeKeyDown);
  commentsLoader.addEventListener('click', onClickUploadCommnent);
  createBigPicture(photoData);
};

canselButton.addEventListener('click', onClickCanselButton);
export { showBigPicture };

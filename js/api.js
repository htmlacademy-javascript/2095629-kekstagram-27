const getData = (onSuccess, onFail) => fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Не удалось загрузить изображения');
  })
  .then((photos) => {
    onSuccess(photos);
  })
  .catch(() => onFail('Не удалось загрузить изображения'));


const sendData = (onSuccess, onFail, body) =>
  fetch('https://27.javascript.pages.academy/kekstagram',
    {
      method: 'post',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());


export { getData, sendData };

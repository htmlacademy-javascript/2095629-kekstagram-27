const getData = (onSuccess) => fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    onSuccess(photos);
  });


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
        onFail('Не удалось отправить');
      }
    })
    .catch(() => onFail('Не удалось отправить'));


export { getData, sendData };

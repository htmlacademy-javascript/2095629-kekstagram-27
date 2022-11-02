const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const upScaleButton = document.querySelector('.scale__control--bigger');
const downScaleButton = document.querySelector('.scale__control--smaller');
const picture = document.querySelector('.img-upload__preview img');
const inputScale = document.querySelector('.scale__control--value');

const scalePicture = (value = DEFAULT_SCALE) => {
  picture.style.transform = `scale(${value / 100})`;
  inputScale.value = `${value}%`;
};

const onUpScaleButtonClick = () => {
  const currentValue = parseInt(inputScale.value,10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scalePicture(newValue);
  inputScale.value = `${newValue}%`;
};

const onDownScaleButtonClick = () => {
  const currentValue = parseInt(inputScale.value,10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scalePicture(newValue);
  inputScale.value = `${newValue}%`;
};

upScaleButton.addEventListener('click',onUpScaleButtonClick);
downScaleButton.addEventListener('click',onDownScaleButtonClick);
export { scalePicture };

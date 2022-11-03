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

let newValueScale = DEFAULT_SCALE;

const onUpScaleButtonClick = () => {
  const currentValue = parseInt(inputScale.value,10);
  newValueScale = currentValue + SCALE_STEP;
  if (newValueScale > MAX_SCALE) {
    newValueScale = MAX_SCALE;
  }
  scalePicture(newValueScale);
  inputScale.value = `${newValueScale}%`;
};

const onDownScaleButtonClick = () => {
  const currentValue = parseInt(inputScale.value,10);
  newValueScale = currentValue - SCALE_STEP;
  if (newValueScale < MIN_SCALE) {
    newValueScale = MIN_SCALE;
  }
  scalePicture(newValueScale);
  inputScale.value = `${newValueScale}%`;
};

const resetScalePicture = () => {
  scalePicture();
};

upScaleButton.addEventListener('click',onUpScaleButtonClick);
downScaleButton.addEventListener('click',onDownScaleButtonClick);
export { resetScalePicture };

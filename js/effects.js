const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 1,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const picture = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const DEFAULT_EFFECT = EFFECTS[0];

let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (isDefault()) {
    slider.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  const effectValue = evt.target.value;
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  EFFECTS.forEach((effect) => {
    if (effect.name === effectValue) {
      currentEffect = effect;
      updateSlider();
    }
  });
};

const onSliderUpdate = () => {
  picture.style.filter = 'none';
  picture.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    slider.classList.add('hidden');
  }
  const sliderValue = slider.noUiSlider.get();
  picture.classList.add(`effects__preview--${currentEffect.name}`);
  picture.style.filter = `${currentEffect.filter}(${sliderValue}${currentEffect.unit})`;
  effectLevel.value = sliderValue;
};

noUiSlider.create(slider,{
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower',
  format: {
    to: function(value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function(value) {
      return parseFloat(value);
    },
  }
});

const resetEffect = () => {
  currentEffect = DEFAULT_EFFECT;
  onSliderUpdate();
};

form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export { resetEffect };

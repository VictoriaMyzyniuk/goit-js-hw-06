const refs = {
  input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +refs.input.dataset.length) {
    refs.input.classList.add('valid');
    return;
  }
  refs.input.classList.add('invalid');
}

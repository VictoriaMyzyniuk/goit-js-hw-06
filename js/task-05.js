const refs = {
  input: document.querySelector('#name-input'),
  userName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    refs.userName.textContent = 'Anonymous';
    return;
  }
  refs.userName.textContent = event.currentTarget.value;
}

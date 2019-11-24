/* eslint-disable no-undef */

import '@babel/polyfill';
import { watch } from 'melanke-watchjs';
import isURL from 'validator/lib/isURL';

export default () => {
  const form = document.querySelector('.js-form');
  const input = document.querySelector('.js-input');

  const state = {
    url: null,
  };

  watch(state, 'url', () => {
    if (isURL(state.url)) {
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const url = formData.get('url');

    state.url = url;
  };

  const handleInput = (event) => {
    state.url = event.target.value;
  };

  form.addEventListener('submit', handleSubmit);
  input.addEventListener('input', handleInput);
};

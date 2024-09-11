import { data } from './data.js';
import { showCards } from './render.js';
import { filter } from './filter.js';

const button = document.querySelector('#button');
const input = document.querySelector('#input-search');

showCards(data);

button.addEventListener('click', () => {
  const text = input.value.toLowerCase();

  if (text === '') {
    showCards(data);
    return;
  }

  filter(data, text)
});
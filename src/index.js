/** @format */

import './styles.css';
import { loadDataFromAPI } from './js/display.js';
import { updateLikes } from './js/likes.js';
import { countMeals } from './js/meals.js';

window.onload = async () => {
  await loadDataFromAPI();
  countMeals();
};

document.addEventListener('click', (e) => {
  if (!e.target.matches('.like-btn')) {
    return;
  }
  if (e.target.matches('.like-btn')) {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach((btn, index) => {
      if (e.target === btn) {
        updateLikes(index);
      }
    });
  }
});

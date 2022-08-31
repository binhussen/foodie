/** @format */

import './styles.css';
import { loadDataFromAPI } from './js/display.js';
import { countMeals } from './js/meals.js';
import Like from './js/likes';

const like = new Like();

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
        like.updateLikes(index);
      }
    });
  }
});

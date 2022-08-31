/** @format */
import './styles.css';
import { updateLikes } from './modules/likes.js';
import { countMeals } from './modules/meals.js';
import { loadDataFromAPI } from './modules/display.js';

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

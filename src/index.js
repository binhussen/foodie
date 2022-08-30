/** @format */
import './styles.css';
import loadDataFromAPI from './modules/loadDataFromApi.js';
import updateLikes from './modules/updateLikes.js';

window.onload = () => {
  loadDataFromAPI();
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

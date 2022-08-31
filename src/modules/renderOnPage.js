/** @format */

import displayPopup from './displayPopup.js';
import { countComment } from './operation.js';

const renderOnPage = (meal, likesObj) => {
	const html = `<div class="card"  data-id = "${meal.idMeal}">
    <div class="img-container">
        <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="content">
      <div class="name">${meal.strMeal}</div>
      <i class="fa-regular fa-heart like-btn"></i>
    </div>
    <span class="like-container"><span class="likes">${likesObj.likes}</span> likes</span>
    <button class="comment-btn" id="${meal.idMeal}">Recipe</button>
    <div class="comment-pop-up">
    </div>
  </div>`;
	const cardContainer = document.querySelector('.cards-container');
	cardContainer.innerHTML += html;

	const commentbtn = document.querySelectorAll('.comment-btn');
	commentbtn.forEach((btn) => {
		btn.addEventListener('click', async () => {
			const targetID = btn.getAttribute('id');
			displayPopup(targetID).then(() => countComment());
		});
	});
};

export default renderOnPage;

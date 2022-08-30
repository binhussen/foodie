/** @format */

import { getMealDetail } from './operation.js';

const displayPopup = async (meal) => {
	const mealDetail = await getMealDetail(meal.idMeal);
	let html = `<i class="fa-solid fa-x close-btn"></i>
  <div class="item-img">
    <img src="${mealDetail.strMealThumb}" alt="">
  </div>
  <h2 class="pop-up-heading">${mealDetail.strMeal}</h2>
  <div class="pop-up-description">
  ${mealDetail.strInstructions}
  </div>
    `;

	const popUp = document.querySelector('.comment-pop-up');
	popUp.innerHTML = html;
	popUp.classList.add('show-pop-up');

	const closeBtn = document.querySelector('.close-btn');
	closeBtn.addEventListener('click', () => {
		popUp.classList.remove('show-pop-up');
	});
};

export default displayPopup;

/** @format */

import { getComment, getMealDetail } from './operation.js';

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
  <div class="comment-container">
    <div class="comment-heading">
      Comments <span class="comments-amount">(2)</span>
    </div>
    `;

  const comments = await getComment(52928);
  comments.forEach((comment_) => {
    html += `<div class="comments">
      <span class="comment-date">${comment_.creation_date}</span>
      <span class="comment-descritpion">${comment_.username}: ${comment_.comment}</span>
    </div>`;
  });
  html += `<div class="comment-form">
      <div class="comment-heading">
        Add a comment
      </div>
      <input class="commenter-name" type="text" placeholder="Your name">
      <textarea class="comment" name="comment" id="" cols="30" rows="10" placeholder="Your insights"></textarea>
      <button class="add-comment-btn">Comment</button>
    </div>
  </div>`;

  const popUp = document.querySelector('.comment-pop-up');
  popUp.innerHTML = html;
  popUp.classList.add('show-pop-up');

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    popUp.classList.remove('show-pop-up');
  });
};

export default displayPopup;

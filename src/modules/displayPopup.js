/** @format */
import { getMealDetail, getComment, addComment } from './operation.js';

const displayPopup = async (mealID) => {
  const mealDetail = await getMealDetail(mealID);
  const comments = await getComment(mealID);
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
      Comments <span class="comments-amount">(${comments.length ?? 0})</span>
    </div>
    `;
  if (comments.length > 0) {
    comments.forEach((comment) => {
      html += `<div class="comments">
      <span class="comment-date">${comment.creation_date}</span>
      <span class="comment-descritpion">${comment.username}: ${comment.comment}</span>
    </div>`;
    });
  }

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

  const commenterName = document.querySelector('.commenter-name');
  const commentText = document.querySelector('.comment');
  const commentBtn = document.querySelector('.add-comment-btn');
  commentBtn.addEventListener('click', () => {
    addComment(commenterName.value, commentText.value, mealID);
    displayPopup(mealID);
  });
};

export default displayPopup;

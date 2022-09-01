/** @format */

import Comment from './comments.js';
import Like from './likes.js';
import Meal from './meals.js';

const comment = new Comment();
const like = new Like();
const meal = new Meal();

export const displayPopup = async (mealID) => {
  const mealDetail = await meal.getMealDetails(mealID);
  const comments = await comment.getComments(mealID);
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
      Comments <span class="comments-amount"></span>
    </div>
    <div class="comment-list">
    `;
  if (comments.length > 0) {
    comments.forEach((comment) => {
      html += `<div class="comments">
      <span class="comment-date">${comment.creation_date}</span>
      <span class="comment-descritpion">${comment.username}: ${comment.comment}</span>
    </div>
    `;
    });
  }
  html += `</div>
  <form class="comment-form">
      <div class="comment-heading">
        Add a comment
      </div>
      <input class="commenter-name" type="text" placeholder="Your name" required>
      <textarea class="comment" name="comment" id="" cols="30" rows="10" placeholder="Your insights" required></textarea>
      <button type="submit" class="add-comment-btn">Comment</button>
    </form>
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
  const commentlist = document.querySelector('.comment-list');
  commentBtn.addEventListener('click', () => {
    comment
      .addComment(commenterName.value, commentText.value, mealID)
      .then(() => {
        commentlist.innerHTML += `<div class="comments"><span class="comment-date">${new Date()
          .toISOString()
          .slice(0, 10)}</span><span class="comment-descritpion">${
          commenterName.value
        }: ${commentText.value}</span></div>`;

        comment.countComments();
      });
  });
};

export const displayCards = (meal, likesObj) => {
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
      displayPopup(targetID).then(() => comment.countComments());
    });
  });
};

export const loadDataFromAPI = async () => {
  const meals = await meal.getMeals();
  const likes = await like.getLikes();
  meals.forEach((meal, index) => {
    displayCards(meal, likes[index]);
  });
};

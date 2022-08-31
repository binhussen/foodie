/** @format */

import { INVOLVEMENT_URL } from './config.js';

export const createLike = async (mealID) => {
  await fetch(`${INVOLVEMENT_URL}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: mealID }),
  });
};

export const getLikes = async () => {
  const responseGet = await fetch(`${INVOLVEMENT_URL}/likes/`);
  const likes = await responseGet.json();
  return likes;
};

export const updateLikes = async (index) => {
  const likesAmount = document.querySelectorAll('.likes')[index];
  const heartIcon = document.querySelectorAll('.fa-heart')[index];
  heartIcon.classList = 'fa-solid fa-heart like-btn pressed';
  setTimeout(() => {
    heartIcon.classList = 'fa-regular fa-heart like-btn';
  }, 120);
  likesAmount.textContent = parseInt(likesAmount.textContent, 10) + 1;
  let likesObj = (await getLikes())[index];
  await createLike(likesObj.item_id);

  likesObj = (await getLikes())[index];
};

import createLike from './createLike.js';
import getLikes from './getLikes.js';

const updateLikes = async (index) => {
  const likesAmount = document.querySelectorAll('.likes')[index];
  const heartIcon = document.querySelectorAll('.fa-heart')[index];
  heartIcon.classList = 'fa-solid fa-heart like-btn';
  setTimeout(() => {
    heartIcon.classList = 'fa-regular fa-heart like-btn';
  }, 120);
  likesAmount.textContent = parseInt(likesAmount.textContent, 10) + 1;
  let likesObj = (await getLikes())[index];
  await createLike(likesObj.item_id);

  likesObj = (await getLikes())[index];
};

export default updateLikes;
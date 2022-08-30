import createLike from './createLike.js';
import getLikes from './getLikes.js';

const updateLikes = async (index) => {
  const likesAmount = document.querySelectorAll('.likes')[index];
  let likesObj = (await getLikes())[index];
  await createLike(likesObj.item_id);
  likesObj = (await getLikes())[index];
  likesAmount.textContent = `${likesObj.likes} likes`;
};

export default updateLikes;
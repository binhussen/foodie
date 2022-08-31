/** @format */

import { INVOLVEMENT_URL } from './config.js';

export default class Comment {
  getComments = async (mealID) => {
    const commentsResponse = await fetch(
      `${INVOLVEMENT_URL}/comments?item_id=${mealID}`,
    );
    const comment = await commentsResponse.json();
    return comment;
  };

  addComment = async (name, comment, id) => {
    const postCommentUrl = `${INVOLVEMENT_URL}/comments`;
    await fetch(postCommentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    });
  };

  countComments = async () => {
    const amount = document.querySelector('.comments-amount');
    const comments = document.querySelectorAll('.comments');
    amount.textContent = `(${comments.length ?? 0})`;
  };
}

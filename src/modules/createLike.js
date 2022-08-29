const involvmentApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sAxQtNP5nzOV9l3P6DO3/likes/';

const createLike = async (mealID) => {
  await fetch(involvmentApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: mealID }),
  });
};

export default createLike;
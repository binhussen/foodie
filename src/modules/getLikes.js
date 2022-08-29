const involvmentApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sAxQtNP5nzOV9l3P6DO3/likes/';

const getLikes = async () => {
  const responseGet = await fetch(involvmentApiUrl);
  const likes = await (responseGet.json());
  return likes;
};

export default getLikes;
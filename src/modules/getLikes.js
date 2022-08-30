/** @format */

import { INVOLVEMENT_URL } from './config.js';

const getLikes = async () => {
  const responseGet = await fetch(`${INVOLVEMENT_URL}/likes/`);
  const likes = await responseGet.json();
  return likes;
};

export default getLikes;

/** @format */

import { BASEAPI_URL } from './config.js';
import renderOnPage from './renderOnPage.js';
import getLikes from './getLikes.js';

const loadDataFromAPI = async () => {
  const response = await fetch(`${BASEAPI_URL}/filter.php?a=Canadian`);
  const { meals } = await response.json();
  const likes = await getLikes();
  meals.forEach((meal, index) => {
    renderOnPage(meal, likes[index]);
  });
};
export default loadDataFromAPI;

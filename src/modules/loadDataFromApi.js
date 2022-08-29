import renderOnPage from './renderOnPage.js';
import getLikes from './getLikes.js';

const baseApiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const loadDataFromAPI = async () => {
  const response = await fetch(baseApiUrl);
  const { meals } = await response.json();
  const likes = await getLikes();
  meals.forEach((meal, index) => {
    renderOnPage(meal, likes[index]);
  });
};
export default loadDataFromAPI;
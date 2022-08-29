/** @format */

import { BASEAPI_URL } from './config.js';
import renderOnPage from './renderOnPage.js';

const loadDataFromAPI = async () => {
	const response = await fetch(`${BASEAPI_URL}/filter.php?a=Canadian`);
	const { meals } = await response.json();
	meals.forEach((meal) => {
		renderOnPage(meal);
	});
};
export default loadDataFromAPI;

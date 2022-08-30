/** @format */

import { BASEAPI_URL, INVOLVEMENT_URL } from './config.js';

export const getMealDetail = async (mealID) => {
	const response = await fetch(`${BASEAPI_URL}/lookup.php?i=${mealID}`);
	const mealDetail = (await response.json()).meals[0];
	return mealDetail;
};

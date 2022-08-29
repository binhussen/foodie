/** @format */

import { BASEAPI_URL, INVOLVEMENT_URL } from './config';

export const getComment = async (mealID) => {
	const commentsResponse = await fetch(
		`${INVOLVEMENT_URL}/comments?item_id=${mealID}`
	);
	const comment = await commentsResponse.json();
	return comment;
};

export const getMealDetail = async (mealID) => {
	const response = await fetch(`${BASEAPI_URL}/lookup.php?i=${mealID}`);
	const mealDetail = (await response.json()).meals[0];
	return mealDetail;
};

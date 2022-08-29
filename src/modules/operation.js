/** @format */

import { INVOLVEMENT_URL } from './config';

export const getComment = async (mealID) => {
	const commentsResponse = await fetch(
		`${INVOLVEMENT_URL}/comments?item_id=${mealID}`
	);
	const comment = await commentsResponse.json();
	return comment;
};

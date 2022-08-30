/** @format */

import { INVOLVEMENT_URL } from './config.js';

const createLike = async (mealID) => {
	await fetch(`${INVOLVEMENT_URL}/likes/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ item_id: mealID }),
	});
};

export default createLike;

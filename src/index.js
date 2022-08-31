/** @format */

import './styles.css';
import { loadDataFromAPI } from './js/display.js';
import Like from './js/likes.js';
import Meal from './js/meals.js';

const like = new Like();
const meal = new Meal();

window.onload = async () => {
	await loadDataFromAPI();
	meal.countMeals();
};
const openMenu = () => {
	const hamburger = document.querySelector('.hamburger');
	hamburger.classList.toggle('active');
};

document.addEventListener('click', (e) => {
	if (e.target.matches('.hamburger')) {
		openMenu();
	}
	if (!e.target.matches('.like-btn')) {
		return;
	}
	if (e.target.matches('.like-btn')) {
		const likeBtns = document.querySelectorAll('.like-btn');
		likeBtns.forEach((btn, index) => {
			if (e.target === btn) {
				like.updateLikes(index);
			}
		});
	}
});

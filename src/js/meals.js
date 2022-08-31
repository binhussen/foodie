/** @format */

import { BASEAPI_URL } from './config.js';

export default class Meal {
  getMeals = async () => {
    const response = await fetch(`${BASEAPI_URL}/filter.php?a=Canadian`);
    const { meals } = await response.json();
    return meals;
  };

  countMeals = () => {
    const amount = document.querySelector('.item-amount');
    const items = document.querySelectorAll('.card');
    amount.textContent = `(${items.length})`;
  };

  getMealDetails = async (mealID) => {
    const response = await fetch(`${BASEAPI_URL}/lookup.php?i=${mealID}`);
    const mealDetail = (await response.json()).meals[0];
    return mealDetail;
  };
}

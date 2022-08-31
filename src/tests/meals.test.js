/**
 * @format
 * @jest-environment jsdom
 */

import Meal from '../js/meals.js';

test('properly counts the meals and renders the amount on page ', () => {
  document.body.innerHTML = `
  <div class="item-amount"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  `;

  const meal = new Meal();
  meal.countMeals();
  const amount = document.querySelector('.item-amount').textContent;
  expect(amount).toBe('(4)');
});

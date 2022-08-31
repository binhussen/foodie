/**
 * @format
 * @jest-environment jsdom
 */

import { countComment } from './operation.js';

test('Count and Display Number of Comments', () => {
  document.body.innerHTML = `
    <span class="comments-amount"></span>
    <div class="comments"></div>
    <div class="comments"></div>
    <div class="comments"></div>`;
  countComment();
  const amount = document.querySelector('.comments-amount').textContent;
  expect(amount).toBe('(3)');
});

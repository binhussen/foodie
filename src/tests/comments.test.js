/**
 * @format
 * @jest-environment jsdom
 */

import { countComments } from '../js/comments.js';

test('Count and Display Number of Comments', () => {
  document.body.innerHTML = `
    <span class="comments-amount"></span>
    <div class="comments"></div>
    <div class="comments"></div>
    <div class="comments"></div>`;
  countComments();
  const amount = document.querySelector('.comments-amount').textContent;
  expect(amount).toBe('(3)');
});

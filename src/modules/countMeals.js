const countMeals = () => {
  const amount = document.querySelector('.item-amount');
  const items = document.querySelectorAll('.card');
  amount.textContent = `(${items.length})`;
};
export default countMeals;
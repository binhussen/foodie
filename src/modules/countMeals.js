const countMeals = () => {
  const amount = document.querySelector('.item-amount');
  const items = document.querySelectorAll('.card');
  let cntr = 0;
  items.forEach(() => {
    cntr += 1;
  });
  amount.textContent = `(${cntr})`;
};
export default countMeals;
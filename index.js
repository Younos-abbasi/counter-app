const decrease = document.getElementById("btn__decrease");

const reset = document.getElementById("btn__reset");

const increase = document.getElementById("btn__increase");

let count = 0;

increase.onclick = () => {
  count++;
  document.getElementById("counter__label").textContent = count;
};

decrease.onclick = () => {
  count--;
  document.getElementById("counter__label").textContent = count;
};

reset.onclick = () => {
  count = 0;
  document.getElementById("counter__label").textContent = count;
};

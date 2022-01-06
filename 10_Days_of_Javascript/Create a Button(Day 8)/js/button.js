const btn = document.getElementById("btn");
let count = 0;
btn.innerHTML = count;
btn.addEventListener('click', function () {
  count++;
  btn.innerHTML = count;
})
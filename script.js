document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let idx = 0;

  document.querySelector('.next').onclick = () => move(1);
  document.querySelector('.prev').onclick = () => move(-1);

  function move(direction) {
    idx = (idx + direction + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - idx)}%)`;
    });
  }
  move(0); // initialize
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('actionButton');
  if (button) {
    button.addEventListener('click', function () {
      alert('Function.js is running!');
    });
  }

  const slides = ['nintendo direct 6.9.2026', 'yoshi and the mysterious book', 'final fantasy vii rebirth', 'star fox 6/25'];
  const slideElement = document.getElementById('sliderSlide');
  const dotElements = document.querySelectorAll('.slider-dots .dot');
  let currentIndex = 0;

  function setSlide(index) {
    slideElement.textContent = slides[index];
    dotElements.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  setSlide(currentIndex);

  let isPaused = false;
  const pauseButton = document.getElementById('sliderPause');

  function updateInterval() {
    return setInterval(() => {
      if (!isPaused) {
        currentIndex = (currentIndex + 1) % slides.length;
        setSlide(currentIndex);
      }
    }, 5000);
  }

  let slideInterval = updateInterval();

  if (pauseButton) {
    pauseButton.textContent = String.fromCharCode(9208);
    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseButton.textContent = isPaused ? '▶' : '⏸';
      pauseButton.classList.toggle('active', isPaused);
    });
  }
});

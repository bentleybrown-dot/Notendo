document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('actionButton');
  button.addEventListener('click', function () {
    alert('Function.js is running!');
  });

  const slides = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];
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

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    setSlide(currentIndex);
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = ["images/bg.png", "images/bg1.png", "images/bg2.png"];

  let currentIndex = 0;
  const container = document.querySelector(".container1");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  function changeBackground(index) {
    container.style.backgroundImage = `url(${images[index]})`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
  }

  rightBtn.addEventListener("click", nextImage);
  leftBtn.addEventListener("click", prevImage);

  setInterval(nextImage, 5000);
});
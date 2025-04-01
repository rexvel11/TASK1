document.addEventListener("DOMContentLoaded", function () {
  const images = ["images/bg.png", "images/bg1.png", "images/bg2.png"];

  let currentIndex = 0;
  
  // Background Slider
  const container = document.querySelector(".container1");
  const leftBtnBg = document.querySelector(".left-btn-bg");
  const rightBtnBg = document.querySelector(".right-btn-bg");

  function changeBackground(index) {
    container.style.backgroundImage = `url(${images[index]})`;
  }

  function nextBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
  }

  function prevBackground() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeBackground(currentIndex);
  }

  if (rightBtnBg && leftBtnBg) {
    rightBtnBg.addEventListener("click", nextBackground);
    leftBtnBg.addEventListener("click", prevBackground);
  }

  setInterval(nextBackground, 5000);

  // Gallery Image Slider
  const galleryImage = document.getElementById("galleryImage");
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");

  function changeImage(index) {
    galleryImage.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
  }

  if (rightBtn && leftBtn) {
    rightBtn.addEventListener("click", nextImage);
    leftBtn.addEventListener("click", prevImage);
  }
});

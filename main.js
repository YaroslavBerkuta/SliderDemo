const up = document.querySelector(".up-button");
const down = document.querySelector(".down-button");
const sitebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;

const container = document.querySelector(".container");
const height = container.clientHeight;

sitebar.style.top = `-${(slideCount - 1) * 100}vh`;

up.addEventListener("click", () => {
  changeSlide("up");
});
down.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }

  mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`;
  sitebar.style.transform = `translateY(${height * activeSlideIndex}px)`;
}

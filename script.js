const slider = document.querySelector('.slider');
const before = slider.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = slider.querySelector('.change');
const body = document.body;

const burger = document.querySelector('.header_burger');
const nav = document.querySelector('.nav');
const margin = document.querySelector('header');

burger.onclick = function () {
    nav.classList.toggle('active');
    margin.classList.toggle('margin');
};

const fat = document.querySelector('.fat');
const skinny = document.querySelector('.skinny');
const sliderMob = document.querySelector('.slider_mob');

sliderMob.onclick = function () {
  fat.classList.toggle('active');
  skinny.classList.toggle('active');
};


let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = shift +'px'; 
  change.style.left = shift + 'px';
  
};


body.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) =>{
  if (!isActive) {
   return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
});
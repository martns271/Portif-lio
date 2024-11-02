document.addEventListener('DOMContentLoaded', () =>  {
new TypeIt(".animated",{
speed: 200,

loop: true
}).type('C#',{delay: 900})
.delete(2)
.type('JavaScript',{delay:500})
.delete(10)
.type('Html e C+', {delay: 500})
.pause(1000)
.delete(2)
.type('Css' ,{delay: 500})



.go()
})


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
});

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}


const body = document.querySelector('body');
const darkModeButton = document.querySelector('#dark-mode-button');

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

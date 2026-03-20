let index = 0;
const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// 🔁 Cambia cada 3 segundos
setInterval(() => {
  index = (index + 1) % total;
  updateSlide();
}, 3000);
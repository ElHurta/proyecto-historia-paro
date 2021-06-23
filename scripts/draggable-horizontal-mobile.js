const slider = document.querySelector('.new-topics');
let isDown = true;
let startX;
let scrollLeft;

//Click
slider.addEventListener('touchstart', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.touches[0].clientX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

//Alejar Mouse fuera de la zona del scroll
slider.addEventListener('touchleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

//Soltar Click
slider.addEventListener('touchend', () => {
  isDown = false;
  slider.classList.remove('active');
});

//Movimiento del mouse dentro de la zona de scroll
slider.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.touches[0].clientX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});
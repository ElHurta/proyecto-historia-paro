/*const slider = document.querySelector('.new-topics');
let isDown = true;
let startX;
let scrollLeft;*/

//Click
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

//Alejar Mouse fuera de la zona del scroll
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

//Soltar Click
slider.addEventListener('mouseup', () => {
  console.log(startX)
  isDown = false;
  slider.classList.remove('active');
});

//Movimiento del mouse dentro de la zona de scroll
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

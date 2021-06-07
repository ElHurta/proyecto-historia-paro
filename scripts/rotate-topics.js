window.addEventListener('load', function() {
  const cards = document.querySelectorAll('.topic-card');

  cards.forEach(card =>
    {
      //Movimiento del mouse dentro de la zona de scroll
      card.addEventListener('mousemove', (e) => {
        console.log(e.pageX - card.offsetLeft);
      });
    })
});
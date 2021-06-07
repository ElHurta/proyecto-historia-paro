
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.anim');
    console.log(cards)

    observer = new IntersectionObserver((entries)=>
    {
        entries.forEach(entry =>
            {
                if(entry.intersectionRatio > 0)
                {
                    entry.target.style.animation = `anim1 0.5s forwards ease-out`;
                    console.log(entry.intersectionRatio)
                }
                else
                {
                    entry.target.style.animation = 'none';
                    console.log("Hola")
                }
            });
    });

    cards.forEach(card =>
        {
            observer.observe(card);
        });
});
     
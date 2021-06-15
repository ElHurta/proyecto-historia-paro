window.addEventListener('load', function() {
    const descLeft = document.querySelectorAll('.desc-left');
    const descRight = document.querySelectorAll('.desc-right');

    observer = new IntersectionObserver((entries)=>
    {
        entries.forEach(entry =>
            {
                if(entry.intersectionRatio > 0)
                {
                    entry.target.style.animation = `anim2-right 1.2s forwards ease-out`;

                    if(entry.target.className == "desc desc-left")
                    {
                        entry.target.style.animation = `anim2-left 1.2s forwards ease-out`;
                    }                    
                }
                else
                {
                    entry.target.style.animation = 'none';
                }
            });
    });

    descLeft.forEach(descLeft =>
        {
            observer.observe(descLeft);
        });

    descRight.forEach(descRight =>
        {
            observer.observe(descRight);
        });
});
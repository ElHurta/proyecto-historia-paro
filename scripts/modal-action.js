window.addEventListener('load', function() {
    // Obtener el Modal:
    var modal = document.getElementById('descModal');

    // Obtener el elemento que abre el Modal:
    var modalTrigg = document.getElementsByClassName('modalTrigg')

    // Obtener botón de cerrado del Modal:
    var closeModalBtn = document.getElementById('closeModalBtn');
    
    // Eventos:
    // * Abrir:
    Array.from(modalTrigg).forEach(trigger => {
        trigger.addEventListener('click', showModal);
    });

    // * Cerrar:
    closeModalBtn.addEventListener('click', closeModal);

    function showModal(){
        modal.style.display = 'block';
    }

    function closeModal(){
        modal.style.display = 'none';
    }
});
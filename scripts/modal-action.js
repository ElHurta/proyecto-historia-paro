window.addEventListener('load', function() {


    var modal = document.getElementById('descModal');

    // Obtener el elemento que abre el Modal:
    var modalTrigg = document.getElementsByClassName('modalTrigg')

    fetch("assets/data/topics.json").then(res => res.json()).then(data => {
        var topics = data.topics;

        Array.from(modalTrigg).forEach(trigger => {
            trigger.addEventListener('click', function(){
                showModal(trigger);
            });
        });

        // Eventos:
        // * Abrir:
        function showModal(trigger){
            modal.style.display = 'block';

            // Render Modal:
            modal.innerHTML = codeModal(topics[trigger.getAttribute("data-id")].acontecimiento, topics[trigger.getAttribute("data-id")].desc, topics[trigger.getAttribute("data-id")].imageUrl);

            // Obtener botón de cerrado del Modal:
            var closeModalBtn = document.getElementById('closeModalBtn');

            // * Cerrar:
            closeModalBtn.addEventListener('click', closeModal);
        }

        function codeModal(acon, desc, imageUrl) {
            return `<div class="modal-content">
            <span id="closeModalBtn" class="closeModalBtn">&times;</span>
            <h3>${acon}</h3>
            <div class="text-container">
                <p>
                    ${desc}
                </p>
                <div class="img-container">
                    <img src="${imageUrl}" alt="Universidad Distrital" width="65%" height="65%"/>
                 </div>
            </div>
            
            </div>`
        }

        function closeModal(){
            modal.style.display = 'none';
        }
    })
});
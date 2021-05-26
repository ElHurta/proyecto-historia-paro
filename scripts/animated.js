
const animacion_topics_izquierda = "slideInLeft"
const animacion_topics_derecha = "slideInRight"



//---------------------- CODIGO PARA QUE FUNCIONE -------------------------//

const crearObserver = () =>{
    setTimeout(()=>{
        const topicsLeft = document.querySelector(".left-topics")
        const topicsRight = document.querySelector(".right-topics")
        topicsRight.classList.add("invisible")
        topicsLeft.classList.add("invisible")
        function callback(entrys) {
            if(entrys[0].isIntersecting){
                setTimeout(()=>{
                    topicsLeft.classList.remove("invisible")
                    topicsRight.classList.remove("invisible")
                    animateCSS(topicsLeft, animacion_topics_izquierda)
                    animateCSS(topicsRight,animacion_topics_derecha)
                },100)
            }else{
                topicsLeft.classList.add("invisible")
                topicsRight.classList.add("invisible")
            }
        }
        const observer = new IntersectionObserver(callback)
        observer.observe(topicsLeft)
    },100)
}

const animateCSS = (element, animation, prefix = 'animate__') =>
    // Crea una promesa y la retorna
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        element.classList.add(`${prefix}animated`, animationName);

        // Cuando la animacion termina, limpia las clases y resuelve la promesa
        function handleAnimationEnd(event) {
            event.stopPropagation();
            element.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        element.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

crearObserver()
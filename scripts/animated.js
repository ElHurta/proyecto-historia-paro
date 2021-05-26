
const animacion_izquierda = "slideInLeft"
const animacion_derecha = "slideInRight"

//---------------------- CODIGO PARA QUE FUNCIONE -------------------------//

const topicsLeft = document.querySelector(".left-topics")
const topicsRight = document.querySelector(".right-topics")
topicsRight.classList.add("invisible")
topicsLeft.classList.add("invisible")

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

function callback(entrys) {
    if(entrys[0].isIntersecting){
        setTimeout(()=>{
            topicsLeft.classList.remove("invisible")
            topicsRight.classList.remove("invisible")
            animateCSS(topicsLeft, animacion_izquierda)
            animateCSS(topicsRight, animacion_derecha)
        },100)
    }else{
        topicsLeft.classList.add("invisible")
        topicsRight.classList.add("invisible")
    }
}

const observer = new IntersectionObserver(callback)

observer.observe(topicsLeft)
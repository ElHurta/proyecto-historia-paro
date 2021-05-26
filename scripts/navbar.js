let visible= false
const iframe = document.querySelector("iframe")

window.addEventListener("scroll", () => {
    const scroll = window.scrollY/window.innerHeight
    if(scroll >= 2 && visible == false){
        visible = true
        iframe.classList.remove("inv")
    }
    else if(visible == true && scroll<2){
        visible = false
        iframe.classList.add("inv")
        }

})
let visible= false
const sidebar = document.querySelector(".div-sidebar")

window.addEventListener("scroll", () => {
    const scroll = window.scrollY/window.innerHeight
    if(scroll >= 2 && visible == false){
        visible = true
        sidebar.classList.remove("inv")
    }
    else if(visible == true && scroll<2){
        visible = false
        sidebar.classList.add("inv")
        }

})
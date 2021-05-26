let visible= false
const check = document.querySelector(".checkbox")
const button = document.querySelector(".menu")

window.addEventListener("scroll", () => {
    const scroll = window.scrollY/window.innerHeight
    if(scroll >= 2 && visible == false){
        visible = true
        button.classList.remove("checkbox")
    }
    else if(visible == true && scroll<2){
        visible = false
        button.classList.add("checkbox")
        check.checked = false
    }

})
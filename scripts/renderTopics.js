var left_codigo = ""
var right_codigo = ""
var codigo = ""
const topics_left = document.querySelector(".left-topics")
const topics_right = document.querySelector(".right-topics")
const topics = document.querySelector(".topics-sidebar")


function generarCodigoTopic(año, acon) {
    return `
    <li><a href="#${año}">${año} - ${acon}</a></li>
    `
}

function renderTopics(data) {
    const topics = data.topics
    const mitad = topics.length / 2
    for (let i = 0; i < topics.length; i++) {
        const anho = topics[i].anho
        const acon = topics[i].acontecimiento
        if (i < mitad) {
            left_codigo += generarCodigoTopic(anho, acon)
        } else if (i >= mitad) {
            right_codigo += generarCodigoTopic(anho, acon)
        }
    }
    console.log(topics_left)
    console.log(left_codigo)
    topics_left.innerHTML = left_codigo
    console.log(topics_right)
    console.log(right_codigo)
    topics_right.innerHTML = right_codigo
}

function renderSidebar(data) {
    for (topic of data.topics) {
        const anho = topic.anho
        const acon = topic.acontecimiento
        codigo += generarCodigoTopic(anho, acon)
    }
    topics.innerHTML = codigo
}

fetch("assets/data/topics.json").then(res => res.json()).then(data => {
    renderTopics(data)
    renderSidebar(data)
})

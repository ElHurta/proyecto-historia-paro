var codigo = "<ul class='left-topics'>"
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
            codigo += generarCodigoTopic(anho, acon)
        } else if (i == Math.ceil(mitad)) {
            codigo += "</ul><ul class='right-topics'>"
            codigo += generarCodigoTopic(anho, acon)
        } else {
            codigo += generarCodigoTopic(anho, acon)
        }
    }
    codigo += "</ul>"
    document.querySelector(".topics-list").innerHTML = codigo
}

function renderSidebar(data) {
    codigo = ""
    for (topic of data.topics) {
        const anho = topic.anho
        const acon = topic.acontecimiento
        codigo += generarCodigoTopic(anho, acon)
    }
    console.log(topics)
    topics.innerHTML = codigo
}

fetch("assets/data/topics.json").then(res => res.json()).then(data => {
    renderTopics(data)
    renderSidebar(data)
})

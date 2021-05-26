var codigo = "<ul class='left-topics'>"

function generarCodigoTopic(año, acon) {
    return `
    <li><a href="${año}">${año} - ${acon}</a></li>
    `
}

fetch("assets/data/topics.json").then(res => res.json()).then(data => {
    const topics = data.topics
    const mitad = topics.length / 2
    for (let i = 0; i < topics.length; i++) {
        const año = topics[i].año
        const acon = topics[i].acontecimiento
        if (i < mitad) {
            codigo += generarCodigoTopic(año, acon)
        }
        else if (i == Math.ceil(mitad)) {
            codigo += "</ul><ul class='right-topics'>"
            codigo += generarCodigoTopic(año, acon)
        } else {
            codigo += generarCodigoTopic(año, acon)
        }
    }
    codigo+="</ul>"
    document.querySelector(".topics-list").innerHTML = codigo
})

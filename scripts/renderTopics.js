var left_codigo = ""
var right_codigo = ""
var codigo = ""
var sec_code = ""
const topics_left = document.querySelector(".left-topics")
const topics_right = document.querySelector(".right-topics")
const topics = document.querySelector(".topics-sidebar")
const content = document.querySelector(".content")


function generarCodigoTopic(ahno, acon) {
    return `
    <li><a href="#${ahno}">${ahno} - ${acon}</a></li>
    `
}

function generarCodigoSecc(anho, acon, resum, imageUrl) {
    return `
    <div class="acon" id="${anho}" style="background-image: url('../assets/images/Textura1.png');">
        <div class="img-container">
          <img src="${imageUrl}" alt="Universidad Distrital" width="90%" height="90%"/>
        </div>
        <div class="desc">
            <h3>
                ${acon} - ${anho}
            </h3>
            <p>
                ${resum}
            </p>
        </div>
      </div>
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

        sec_code += generarCodigoSecc(anho, acon, topics[i].resumen, topics[i].imageUrl)
    }
    //console.log(topics_left)
    //console.log(left_codigo)
    topics_left.innerHTML = left_codigo
    //console.log(topics_right)
    //console.log(right_codigo)
    topics_right.innerHTML = right_codigo
    content.innerHTML = sec_code
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

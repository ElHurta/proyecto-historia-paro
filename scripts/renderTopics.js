var codigo = ""
var sec_code = ""
var cards_code = ""
const topics = document.querySelector(".topics-sidebar")
const content = document.querySelector(".content")
const new_topics = document.querySelector(".new-topics")


function generarCodigoTopic(ahno, acon) {
    return `
    <li><a href="#${ahno}">${ahno} - ${acon}</a></li>
    `
}

function generarNewCards(anho, acon, imageUrl){
    return `<div class="card-container">
    <a href="#${anho}">
    <div class="anim">
        <div class="topic-card">
            <div class="img-container">
                <img src="${imageUrl}" alt="a"/>
            </div>
            <h2>${acon}</h2>
            
            </div>
            
            <h3>${anho}</h3>
        </div>
        </a>
  </div>`
}

function generarCodigoSecc(anho, acon, resum, imageUrl, index, tituloImg, textureUrl, color) {
    
    if(index%2==0) {
        return `
        <div class="acon" id="${anho}" style="background-image: url('${textureUrl}');">
            <div class="desc desc-left" style="color: ${color}">
                <h3>
                    ${acon} - ${anho}
                </h3>
                <p>
                    ${resum} <a class="modalTrigg" data-id="${index}" href="#${anho}">Ver Más</a>
                </p>
            </div>
            <div class="img-container">
            <img class= "img${index} imgRef" src="${imageUrl}" alt="Universidad Distrital" width="65%" height="65%"/>
            <p style="color: ${color}">${tituloImg}</p>
            </div>
        </div>
        `
    }
    return `
    <div class="acon" id="${anho}" style="background-image: url('${textureUrl}');">
        <div class="img-container">
          <img class= "img${index}" src="${imageUrl}" alt="Universidad Distrital" width="65%" height="65%"/>
          <p style="color: ${color}">${tituloImg}</p>
        </div>
        <div class="desc desc-right" style="color: ${color}">
            <h3>
                ${acon} - ${anho}
            </h3>
            <p>
                ${resum} <a class="modalTrigg" data-id="${index}" href="#${anho}">Ver Más</a>
            </p>
        </div>
      </div>
    `
}

function renderTopics(data) {
    const topics = data.topics
    for (let i = 0; i < topics.length; i++) {
        const anho = topics[i].anho
        const acon = topics[i].acontecimiento

        sec_code += generarCodigoSecc(anho, acon, topics[i].resumen, topics[i].imageUrl, i, topics[i].tituloImg, topics[i].textureUrl, topics[i].colorText)
        cards_code += generarNewCards(anho, acon, topics[i].imageUrl)
    }
    
    content.innerHTML = sec_code
    new_topics.innerHTML = cards_code
}

function renderSidebar(data) {
    codigo = `<li><a href="#topics">Volver Al Indice</a></li>`;
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

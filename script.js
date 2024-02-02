

const key= "137e0f6eca6480122109ed23692c0fa1"

function colocarDadosNaTela (dados) {
    document.querySelector(".cidade").innerHTML = dados.name
}


async function buscarCidade(cidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API key}&lang=pt_br`).then (resposta => resposta.json())
    
    console.log(dados);

}

function cliqueBotao () {
    const cidade = document.querySelector (".input-cidade").value

    buscarCidade(cidade)
}

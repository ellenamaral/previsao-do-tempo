

const key= "137e0f6eca6480122109ed23692c0fa1"



function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade (cidade)

}


function colocarDadosNaTela (dados) {
    console.log (dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector (".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}



async function buscarCidade (cidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela (dados)
}
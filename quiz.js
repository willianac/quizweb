const conteinerPergunta = document.querySelector('.conteiner-pergunta')
const conteinerResposta = document.querySelector('.conteiner-resposta')
const pergunta = document.querySelector('#pergunta')

const perguntasERespostas = [
    {
        pergunta: "Quantos planetas tem o sistema solar?",
        respostas: [
            {
                texto: "8 planetas",
                isCorreta: true
            },
            {
                texto: "7 planetas",
                isCorreta: false
            },
            {
                texto: "6 planetas",
                isCorreta: false
            },
            {
                texto: "9 planetas",
                isCorreta: false
            }
        ]
    },
    {
        pergunta : 'Qual o carro mais rápido do mundo??',
        respostas : [
            {
                texto: "Ferrari LaFerrari",
                isCorreta: false
            },
            {
                texto: "McLaren P1",
                isCorreta: false
            },
            {
                texto: "Koenigsegg One:1",
                isCorreta: false
            },
            {
                texto: "Bugatti Chiron",
                isCorreta: true
            }
        ]
    },
    {
        pergunta : 'Quantos países existem?',
        respostas : [
            {
                texto: "200+",
                isCorreta: false
            },
            {
                texto: "75 ~ 100",
                isCorreta: false
            },
            {
                texto: "150 ~ 200",
                isCorreta: true
            },
            {
                texto: "100 ~ 150",
                isCorreta: false
            }
        ]
    }
]

function GeraNumero(array) {
    return Math.floor(Math.random() * array.length)
}
const indice = GeraNumero(perguntasERespostas);

function exibePergunta() {
    const perguntas = perguntasERespostas.map(function(nome) {
        return nome.pergunta
    })
    pergunta.innerHTML = perguntas[indice]
}

function exibeOpcao(opcao, texto) {
    const div = document.createElement("div")
    div.id= opcao
    div.innerHTML = `${texto}`
    conteinerResposta.appendChild(div)
    div.addEventListener('click', function() {
        if(perguntasERespostas[indice].respostas[opcao].isCorreta) {
            alert('Certa resposta!')
        } else {
            alert('Que pena, você errou.')
        }
    })
}

function pegaRespostas() {
    const asRespostas = perguntasERespostas.map(function(nome) {
        return nome.respostas
    })
    for(i = 0; i <= perguntasERespostas.length; i++) {
        exibeOpcao(i, asRespostas[indice][i].texto)
    }

}

exibePergunta()
pegaRespostas()


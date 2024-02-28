let jogador1 = {
    nome: '',
    casas: []
}

let jogador2 = {
    nome: '',
    casas: []
}

let jogadorAtual = ''

let combinacoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

function iniciar() {
    jogador1.nome = document.getElementById('jogador1').value
    jogador2.nome = document.getElementById('jogador2').value
    document.getElementById('jogada').innerText = 'Está na vez do jogador: ' + jogador1.nome
    jogadorAtual = jogador1.nome
}

document.querySelectorAll('.tecla').forEach(function (teclaBtn) { // Esta chamada serve para ativar os botoes clicados
    teclaBtn.addEventListener('click', function () {
        if (jogadorAtual === jogador1.nome) { //Esta verificação serve para fazer a alternação entre o jogador da vez
            teclaBtn.innerText = 'X'
            teclaBtn.setAttribute('disabled', !teclaBtn.disabled)
            teclaBtn.className = 'tecla disable'
            document.getElementById('jogada').innerText = 'Está na vez do jogador: ' + jogador2.nome
            jogadorAtual = jogador2.nome
            jogador1.casas.push(parseFloat(teclaBtn.dataset.value))
            if (jogador1.casas.length > 2) { //Esta verificação serve para verificar se o jogador já possui três casas marcadas
                verificarJogo(jogador1)
                if (jogador1.casas.length == 5) {
                    const body = document.getElementById('jogoDaVelha')
                    let velha = document.createElement('div')
                    velha.id = 'velha'
                    let text = document.createElement('h1')
                    text.innerText = 'Deu velha!'

                    let botaoRestart = document.createElement('button')
                    botaoRestart.innerText = 'Reiniciar jogo'
                    botaoRestart.addEventListener('click', function(){
                        location.reload()
                    })
                    velha.appendChild(text)
                    velha.appendChild(botaoRestart)
                    body.appendChild(velha)
                }

            }
        } else {
            teclaBtn.innerText = 'O'
            teclaBtn.setAttribute('disabled', !teclaBtn.disabled)
            teclaBtn.className = 'tecla disable'
            document.getElementById('jogada').innerText = 'Está na vez do jogador: ' + jogador1.nome
            jogadorAtual = jogador1.nome
            jogador2.casas.push(parseFloat(teclaBtn.dataset.value))
            if (jogador2.casas.length > 2) { //Esta verificação serve para verificar se o jogador já possui três casas marcadas
                verificarJogo(jogador2)
            }
        }
    })
})

function verificarJogo(jogador) { // Estou aqui e acebei de converter o data-value em number
    let cont = 0
    for (let i = 0; i < combinacoes.length; i++) {
        for (let j = 0; j < jogador.casas.length; j++) {
            if (combinacoes[i].includes(jogador.casas[j])) {
                cont++
            }
            if (cont === 3) {
                exibirVencedor(combinacoes[i], jogador)
                break
            }
        }
        cont = 0
    }
}

function exibirVencedor(casas, jogador) {
    const botao0 = document.getElementById('botao' + casas[0])
    const botao1 = document.getElementById('botao' + casas[1])
    const botao2 = document.getElementById('botao' + casas[2])
    const body = document.getElementById('jogoDaVelha')

    let textoVencedor = document.createElement('div')
    textoVencedor.id = 'textoVencedor'
    let text = document.createElement('h1')
    text.innerText = jogador.nome + ' venceu o jogo!'

    let botaoRestart = document.createElement('button')
    botaoRestart.innerText = 'Reiniciar jogo'
    botaoRestart.addEventListener('click', function(){
        location.reload()
    })

    textoVencedor.appendChild(text)
    textoVencedor.appendChild(botaoRestart)
    body.appendChild(textoVencedor)


    document.querySelectorAll('.tecla').forEach(function (teclaBtn) {
        teclaBtn.setAttribute('disabled', teclaBtn.disabled)
        teclaBtn.className = 'tecla disable'
    })

    botao0.className = 'tecla disableVencedor'
    botao1.className = 'tecla disableVencedor'
    botao2.className = 'tecla disableVencedor'


}
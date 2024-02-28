const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")


import clear from './clear.js'
import tema from './tema.js'
import copiar from './copy.js'
import teclado from './teclado.js'
import teclas from './teclas.js'

//Este trecho faz com os botoes sejam lidos 
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    teclas(charKeyBtn)
  })
})

//Este trecho é o clear da calculadora
document.getElementById("clear").addEventListener("click", function(){
  clear(input)
})

//Este trecho faz com o teclado fisico seja lido
input.addEventListener("keydown", function (ev) {
  teclado(ev,input,resultInput)
})

document.getElementById("equal").addEventListener("click", calculate)

function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}

document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  copiar(ev,resultInput)
})

//Este trecho muda o tema do arquivo
document.getElementById("themeSwitcher").addEventListener("click", function () {
    tema(main,root)
  }
)
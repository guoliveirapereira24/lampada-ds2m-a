"use strict"

function lampOn() {
    const lampada = document.getElementById("lampada")
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")

    lampada.src = "img/ligada.jpg"
    botaoLigar.disabled = true
    botaoDesligar.disabled = false
}
function lampOff(){
    const lampada = document.getElementById("lampada")
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")

    lampada.src = "img/desligada.jpg"
    botaoLigar.disabled = false
    botaoDesligar.disabled = true
}
// eventos
document.getElementById('ligar')
    .addEventListener("click", lampOn)
document.getElementById('desligar')
    .addEventListener("click", lampOff)    

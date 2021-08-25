"use strict"

function lampOn() {
    const lampada = document.getElementById("lampada")
    lampada.src = "img/ligada.jpg"
}
function lampOff(){
    const lampada = document.getElementById("lampada")
    lampada.src = "img/desligada.jpg"
}
// eventos
document.getElementById('ligar')
    .addEventListener("click", lampOn)
document.getElementById('desligar')
    .addEventListener("click", lampOff)    

"use strict"
const lampada = document.getElementById("lampada")


function botoesLigaDesliga(estadoLiga, estadoDesliga) {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga

}

function lampBreak2() {
    return lampada.src.includes("quebrada")
}


function lampOn() {
    const lampada = document.getElementById("lampada")
  //  const botaoLigar = document.getElementById("ligar")
    //const botaoDesligar = document.getElementById("desligar")

    if(!lampBreak2()){
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)
    }
}
function lampOff(){
    const lampada = document.getElementById("lampada")
  //  const botaoLigar = document.getElementById("ligar")
    //const botaoDesligar = document.getElementById("desligar")

    if(!lampBreak2()){
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
}
function lampBreak(){
  //  const botaoLigar = document.getElementById("ligar")
    //const botaoDesligar = document.getElementById("desligar")

    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}


// eventos
document.getElementById('ligar')
    .addEventListener("click", lampOn)
document.getElementById('desligar')
    .addEventListener("click", lampOff)    
document.getElementById("lampada")
    .addEventListener("mouseover", lampOn)
document.getElementById("lampada")
    .addEventListener("mouseleave", lampOff)
document.getElementById('lampada')
    .addEventListener("dblclick", lampBreak)
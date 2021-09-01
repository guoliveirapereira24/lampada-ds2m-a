"use strict"
const lampada = document.getElementById("lampada")
let idLigar
let idDesligar

function botoesLigaDesliga(estadoLiga, estadoDesliga, estadoPiscar) {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")
    const botaoPiscar = document.getElementById("piscar")
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
    botaoPiscar.disabled = estadoPiscar

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
    botoesLigaDesliga(true, true, true)
}
function pararPiscar(){
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

function piscar(){
    const botaoPiscar = document.getElementById("piscar")
    if (botaoPiscar.textContent == "Piscar"){
    idLigar = setInterval(lampOn, 500)
    idDesligar = setInterval(lampOff, 1000)
    botaoPiscar.textContent = "Parar"
    }else{
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
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
document.getElementById("piscar")
    .addEventListener("click", piscar)
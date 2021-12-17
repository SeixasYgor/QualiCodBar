let resultTeste
let contador = 0
let bloqueiaCodBarrasReferencia = false
            
let inputCodBarrasRef = document.getElementById('inputCodBarrasReferencia')
let exibeCodBarrasRef = document.getElementById('exibeCodBarrasReferencia')

let testesCodBarras = document.getElementById('inputTestes')
let exibeCodBarras = document.getElementById('valorLido')

let teste5value = document.getElementById('t05Value')
let teste4value = document.getElementById('t04Value')
let teste3value = document.getElementById('t03Value')
let teste2value = document.getElementById('t02Value')
let teste1value = document.getElementById('t01Value')

let teste5DateTime = document.getElementById('t05DateTime')
let teste4DateTime = document.getElementById('t04DateTime')
let teste3DateTime = document.getElementById('t03DateTime')
let teste2DateTime = document.getElementById('t02DateTime')
let teste1DateTime = document.getElementById('t01DateTime')

let BtBlockCodBarrasRef = document.getElementById('blockReferencia')

function codBarrasReferencia() {    
    if (bloqueiaCodBarrasReferencia == false){
        exibeCodBarrasRef.innerHTML = inputCodBarrasRef.value    
        inputCodBarrasRef.value = ''
        inputCodBarrasRef.placeholder = ''
    } else {
        window.alert('Código de barras de referência está bloqueado! Para desbloquear acionar o cadeado!')
        inputCodBarrasRef.value = ''
    }
}

function blockCodBarrasReferencia () {
    if (bloqueiaCodBarrasReferencia == false) {
        bloqueiaCodBarrasReferencia = true
        BtBlockCodBarrasRef.innerHTML = '&#x1F512;'
    } else {
        bloqueiaCodBarrasReferencia = false
        BtBlockCodBarrasRef.innerHTML = '&#x1F513;'
    }
    //console.log(bloqueiaCodBarrasReferencia)
}

function testeCodBar() {
    
    exibeCodBarras.innerHTML = testesCodBarras.value
    testesCodBarras.value = ''
    
    if (exibeCodBarras.innerHTML == exibeCodBarrasRef.innerHTML){
        //window.alert("deu certo")
        exibeCodBarras.style.color = 'green'
        resultTeste = true
        console.log(resultTeste)
        console.log(teste1value)
    } else{
        //window.alert("deu errado")
        exibeCodBarras.style.color = 'red'
        resultTeste = false
        console.log(resultTeste)
    }
    contador = contador + 1;
    
    //window.alert(data = new Date());
    //window.alert(dataCorrente ());
    atualizaHistorico();
}

function atualizaHistorico (){
    let resultTeste01
    let resultTeste02
    let resultTeste03
    let resultTeste04
    let resultTeste05

    switch (contador) {
        case 1:
            teste5value.innerHTML = exibeCodBarras.innerHTML;
            teste5DateTime.innerHTML = dataCorrente ();
            break;
        case 2:
            teste4value.innerHTML = teste5value.innerHTML;
            teste4DateTime.innerHTML = teste5DateTime.innerHTML;
            resultTeste04 = resultTeste05
            
            teste5value.innerHTML = exibeCodBarras.innerHTML;
            teste5DateTime.innerHTML = dataCorrente ();
            resultTeste05 = resultTeste
            break;
        case 3:
            teste3value.innerHTML = teste4value.innerHTML;
            teste3DateTime.innerHTML = teste4DateTime.innerHTML ;    
            resultTeste03 = resultTeste04

            teste4value.innerHTML = teste5value.innerHTML;
            teste4DateTime.innerHTML = teste5DateTime.innerHTML ;
            resultTeste04 = resultTeste05

            teste5value.innerHTML = exibeCodBarras.innerHTML;
            teste5DateTime.innerHTML = dataCorrente ();
            resultTeste05 = resultTeste
            break;
        case 4:
            teste2value.innerHTML = teste3value.innerHTML;
            teste2DateTime.innerHTML = teste3DateTime.innerHTML ;    
            resultTeste02 = resultTeste03

            teste3value.innerHTML = teste4value.innerHTML;
            teste3DateTime.innerHTML = teste4DateTime.innerHTML ;    
            resultTeste03 = resultTeste04

            teste4value.innerHTML = teste5value.innerHTML;
            teste4DateTime.innerHTML = teste5DateTime.innerHTML ;
            resultTeste04 = resultTeste05

            teste5value.innerHTML = exibeCodBarras.innerHTML;
            teste5DateTime.innerHTML = dataCorrente ();
            resultTeste04 = resultTeste
            break;
        case 5:
            teste1value.innerHTML = teste2value.innerHTML;
            teste1DateTime.innerHTML = teste2DateTime.innerHTML;    
            resultTeste01 = resultTeste02

            teste2value.innerHTML = teste3value.innerHTML;
            teste2DateTime.innerHTML = teste3DateTime.innerHTML;    
            resultTeste02 = resultTeste03

            teste3value.innerHTML = teste4value.innerHTML;
            teste3DateTime.innerHTML = teste4DateTime.innerHTML;    
            resultTeste03 = resultTeste04

            teste4value.innerHTML = teste5value.innerHTML;
            teste4DateTime.innerHTML = teste5DateTime.innerHTML;
            resultTeste04 = resultTeste05

            teste5value.innerHTML = exibeCodBarras.innerHTML;
            teste5DateTime.innerHTML = dataCorrente ();
            resultTeste04 = resultTeste

            contador = 4;
            break;
    }

    if (teste5value.innerHTML == exibeCodBarrasRef.innerHTML){
        teste5value.style.color = 'green'
        resultTeste = true
        console.log("Resultado05 é True")
    } else{
        //window.alert("deu errado")
        teste5value.style.color = 'red'
        console.log("Resultado05 é False")
    }
    
    if (teste4value.innerHTML == exibeCodBarrasRef.innerHTML){
        teste4value.style.color = 'green'
        resultTeste = true
        console.log("Resultado04 é True")
    } else{
        //window.alert("deu errado")
        teste4value.style.color = 'red'
        console.log("Resultado04 é False")
    }

    if (teste3value.innerHTML == exibeCodBarrasRef.innerHTML){
        teste3value.style.color = 'green'
        resultTeste = true
        console.log("Resultado03 é True")
    } else{
        //window.alert("deu errado")
        teste3value.style.color = 'red'
        console.log("Resultado03 é False")
    }

    if (teste2value.innerHTML == exibeCodBarrasRef.innerHTML){
        teste2value.style.color = 'green'
        resultTeste = true
        console.log("Resultado02 é True")
    } else{
        //window.alert("deu errado")
        teste2value.style.color = 'red'
        console.log("Resultado02 é False")
    }

    if (teste1value.innerHTML == exibeCodBarrasRef.innerHTML){
        teste1value.style.color = 'green'
        resultTeste = true
        console.log("Resultado01 é True")
    } else{
        //window.alert("deu errado")
        teste1value.style.color = 'red'
        console.log("Resultado01 é False")
    }
}

function limpaHistorico(){
    
    teste1value.innerHTML = ''
    teste1DateTime.innerHTML = ''

    teste2value.innerHTML = ''
    teste2DateTime.innerHTML = ''

    teste3value.innerHTML = ''
    teste3DateTime.innerHTML = ''

    teste4value.innerHTML = ''
    teste4DateTime.innerHTML = ''

    teste5value.innerHTML = ''
    teste5DateTime.innerHTML = ''
}

function dataCorrente (){
    data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundos = data.getSeconds();
    let dia = data.getDate();
    let mes = data.getMonth()+1;
    let ano = data.getFullYear();
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`
}

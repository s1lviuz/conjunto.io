// Manipular Conjuntos
function carregarConjunto (idConjnunto) {
    const conjuntoA = document.getElementById(idConjnunto).value ?? ''
    return conjuntoA
}
function mostrarConjunto (idConjnunto, idDoPai) {
    let conjunto = carregarConjunto(idConjnunto)
    let p = document.createElement('p')
    const elementPai = document.getElementById(idDoPai)
    if (document.querySelector('#saidaConjuntoA')) {
        document.querySelector('#saidaConjuntoA').innerHTML = `<i>A = {${conjunto}</i>}`
    } else {
        p.setAttribute('id','saidaConjuntoA')
        p.innerHTML = `<i>A = {${conjunto}}</i>`
        elementPai.append(p)
    }
}


// Relações entre elementos
function verificarPertinecia() {
    const conjuntoA = document.getElementById('conjuntoA').value ?? ''
    const elementoPertinecia = document.getElementById('inputElementoPertinecia').value ?? ''
    const p = document.createElement('p')
    if (conjuntoA.includes(elementoPertinecia)) {
        p.innerText = 'O elemento pertence ao conjunto A'
    } else {
        p.innerText = 'O elemento não pertence ao conjunto A'
    }
    document.getElementById('saidaPertinecia').append(p)
}
function verificarSubconjunto() {

}
function verificarIgualdade() {

}

function abrirInputRelacoes (relacao) {
    if (document.querySelector('#saidaConjuntoA')==undefined){
        console.log('crie o conjunto primeiro!')
        return
    }
    if (document.getElementById(`saida${relacao}`)) {
        return
    }
    if (document.getElementById(`saida${relacao}`)==undefined) {

        const divSaidaRelacoes = document.createElement('div')
        divSaidaRelacoes.setAttribute('id',`saida${relacao}`)

        const laberVerificar = document.createElement('label')
        laberVerificar.innerText = (relacao == 'Pertinecia') ? 'Elemento:' : 'Conjunto B:'

        const inputVerificar = document.createElement('input')
        inputVerificar.setAttribute('id',`inputElemento${relacao}`)
        inputVerificar.setAttribute('placeholder','vazio')

        const buttonVerificar = document.createElement('button')
        buttonVerificar.setAttribute('id', `button${relacao}`)
        buttonVerificar.innerText = 'Verificar'

        divSaidaRelacoes.append(laberVerificar)
        divSaidaRelacoes.append(inputVerificar)
        divSaidaRelacoes.append(buttonVerificar)

        document.querySelector('#relacoes').append(divSaidaRelacoes)
    }
    (relacao == 'Pertinecia') ? 
    document.getElementById('buttonPertinecia')?.addEventListener('click', verificarPertinecia) :
    (relacao == 'Subconjunto') ?
    document.getElementById('buttonSubconjunto')?.addEventListener('click', verificarSubconjunto) :
    document.getElementById('buttonIgualdade')?.addEventListener('click', verificarIgualdade)
}


// App
function carregarConjuntoA() {
    mostrarConjunto('conjuntoA','relacoesConjuntoA')
}
function abrirPertinencia(){
    abrirInputRelacoes('Pertinecia')
}

// Listeners
document.getElementById('buttonConjuntoA').addEventListener('click', carregarConjuntoA)
document.getElementById('buttonPertinecia').addEventListener('click', abrirPertinencia)
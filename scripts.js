// Manipular Conjuntos
function carregarConjunto (idConjnunto) {
    const conjuntoA = document.getElementById(idConjnunto).value ?? ''
    return conjuntoA
}
function mostrarConjunto (idConjnunto, idDoPai, nome) {
    let conjunto = carregarConjunto(idConjnunto)
    let p = document.createElement('p')
    const elementPai = document.getElementById(idDoPai)
    if (document.getElementById(`saida${idConjnunto}`)) {
        document.getElementById(`saida${idConjnunto}`).innerHTML = `<i>${nome} = {${conjunto}</i>}`
    } else {
        p.setAttribute('id',`saida${idConjnunto}`)
        p.innerHTML = `<i>${nome} = {${conjunto}}</i>`
        elementPai.append(p)
    }
}
function ordenarConjunto(conjunto) {
    const conjuntoOrdenado = conjunto.split(",").sort((elemento,proximoElemento) => {
        return (elemento < proximoElemento) ? -1 : (elemento > proximoElemento) ? 1 : 0;
    })
    return conjuntoOrdenado
}


// Relações entre elementos
function verificarPertinencia() {
    const conjuntoA = carregarConjunto('inputRelacoesConjuntoA')
    const elementoPertinencia = document.getElementById('inputElementoPertinencia').value ?? ''
    const saida = (conjuntoA.includes(elementoPertinencia)) ?
    'O elemento pertence ao conjunto A' :
    'O elemento não pertence ao conjunto A'

    if (document.getElementById('printPertinencia')==undefined) {
        const p = document.createElement('p')
        p.setAttribute('id','printPertinencia')
        p.innerText = saida
        document.getElementById('saidaPertinencia').append(p)
    } else {
        document.getElementById('printPertinencia')
        .innerText = saida
    }  
}
function verificarSubconjunto() {
    const conjuntoA = carregarConjunto('inputRelacoesConjuntoA')
    const conjuntoB = document.getElementById('inputElementoSubconjunto').value ?? ''
    const saida = (conjuntoB.includes(conjuntoA)) ?
    'O conjunto A é um subconjunto do conjunto B' :
    'O conjunto A não é um subconjunto do conjunto B'

    if (document.getElementById('printSubconjunto')==undefined) {
        const p = document.createElement('p')
        p.setAttribute('id','printSubconjunto')
        p.innerText = saida
        document.getElementById('saidaSubconjunto').append(p)
    } else {
        document.getElementById('printSubconjunto')
        .innerText = saida
    } 
}
function verificarIgualdade() {
    const conjuntoA = carregarConjunto('inputRelacoesConjuntoA')
    const conjuntoB = document.getElementById('inputElementoIgualdade').value ?? ''
    const conjuntoAOrdenado = ordenarConjunto(conjuntoA).join('')
    const conjuntoBOrdenado = ordenarConjunto(conjuntoB).join('')
    const saida = (conjuntoAOrdenado==conjuntoBOrdenado) ? 'O conjunto A é igual ao conjunto B' : 'O conjunto A não é igual ao conjunto B'


    if (document.getElementById('printIgualdade')==undefined) {
        const p = document.createElement('p')
        p.setAttribute('id','printIgualdade')
        p.innerText = saida
        document.getElementById('saidaIgualdade').append(p)
    } else {
        document.getElementById('printIgualdade')
        .innerText = saida
    } 
}


// Exibir opções para relações entre elementos
function abrirInputRelacoes (relacao) {
    if (document.getElementById('saidainputRelacoesConjuntoA')==undefined){
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
        laberVerificar.innerText = (relacao == 'Pertinencia') ? 'Elemento:' : 'Conjunto B:'

        const inputVerificar = document.createElement('input')
        inputVerificar.setAttribute('id',`inputElemento${relacao}`)
        inputVerificar.setAttribute('placeholder','vazio')

        const buttonVerificar = document.createElement('button')
        buttonVerificar.setAttribute('id', `buttonVerificar${relacao}`)
        buttonVerificar.innerText = 'Verificar'

        divSaidaRelacoes.append(laberVerificar)
        divSaidaRelacoes.append(inputVerificar)
        divSaidaRelacoes.append(buttonVerificar)

        document.querySelector('#relacoes').append(divSaidaRelacoes)
    }
    (relacao == 'Pertinencia') ? 
    document.getElementById('buttonVerificarPertinencia')?.addEventListener('click', verificarPertinencia) :
    (relacao == 'Subconjunto') ?
    document.getElementById('buttonVerificarSubconjunto')?.addEventListener('click', verificarSubconjunto) :
    document.getElementById('buttonVerificarIgualdade')?.addEventListener('click', verificarIgualdade)
}


// App Relações
function carregarRelacoesConjuntoA() {
    mostrarConjunto('inputRelacoesConjuntoA','relacoesConjuntoA','A')
}
function abrirPertinencia(){
    abrirInputRelacoes('Pertinencia')
}
function abrirSubconjunto(){
    abrirInputRelacoes('Subconjunto')
}
function abrirIgualdade() {
    abrirInputRelacoes('Igualdade')
}


// App Operações
function carregarOperacoesConjuntoA() {
    mostrarConjunto('inputOperacoesConjuntoA','operacoesConjuntos','A')
}
function carregarOperacoesConjuntoB() {
    mostrarConjunto('inputOperacoesConjuntoB','operacoesConjuntos','B')
}



// Listeners Relações
document.getElementById('buttonRelacoesConjuntoA').addEventListener('click', carregarRelacoesConjuntoA)
document.getElementById('buttonPertinencia').addEventListener('click', abrirPertinencia)
document.getElementById('buttonSubconjunto').addEventListener('click', abrirSubconjunto)
document.getElementById('buttonIgualdade').addEventListener('click', abrirIgualdade)



// Listeners Operações
document.getElementById('buttonOperacoesConjuntoA').addEventListener('click', carregarOperacoesConjuntoA)
document.getElementById('buttonOperacoesConjuntoB').addEventListener('click', carregarOperacoesConjuntoB)
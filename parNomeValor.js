const saudacao = 'Opa'  // Contexto léxico 1

function exerc(){
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exerc()) 
console.log(cliente) 

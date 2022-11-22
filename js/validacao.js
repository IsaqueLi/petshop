export function valida(input)  {                         
    const tipoDeInput = input.dataset.tipo      

    if(validadores[tipoDeInput]) {          
        validadores[tipoDeInput](input)     
    }
    console.log('>>', input.value)
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input) 
}

function validaDataNascimento(input) {          
    const dataRecebida = new Date(input.value) 
    let mensagem = ''                             
    console.log(dataRecebida)
    if(!maiorQue18(dataRecebida)) {                                      
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'  
    }        
    
    input.setCustomValidity(mensagem)       
}

function maiorQue18(data) {                     
    const dataAtual = new Date()                
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())  
    console.log('Data atual', dataAtual)
    console.log('Data mais18', dataMais18)
    return dataMais18 <= dataAtual
}
import { valida } from "./validacao.js";


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        console.log("Até aqui está funcionando");
        valida(evento.target)
    })  
})

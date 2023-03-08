import { valida } from "./validacao.js";


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('keyup', (evento) => {
        console.log(evento)
        if(evento.key == "Enter") {
            valida(evento.target)
        }
    })  
})

// Class contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, Escreva) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.Escreva = Escreva;
   
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('lgpd-form');
    const submitBtn = document.getElementById('Enviar');

    if (form && submitBtn) {
        const validarFormulario = () => {
            if (form.checkValidity()) {
                submitBtn.removeAttribute('disabled');
            } else {
                submitBtn.setAttribute('disabled', 'true');
            }
        };

        form.addEventListener('input', validarFormulario);
        form.addEventListener('change', validarFormulario);
    }
});

function Post(form) {
    window.event.preventDefault();

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("Escreva").value,);
    
    Enviar(data, form);
    form.reset();
    return false

}


function Enviar(data, form) {

    if (data.nome != "") {
        console.table(data);
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }
}
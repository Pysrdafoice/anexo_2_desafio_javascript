
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
    
    console() {
        console.log("Nome: " + this.nome);
        console.log("Sobrenome: " + this.sobrenome);
        console.log("Email: " + this.email);
        console.log("CPF: " + this.cpf);
        console.log("Telefone: " + this.telefone);
        console.log("Contato: " + this.contato);
    }

    
}



function Post(form) {


  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
}


function Enviar() {

    var nome = document.getElementById("nomeid");
    // let objeto = new contato("nome", "sobrenome", "email", "cpf", "telefone", "contato");
    //     objeto.console();

    // let nome = document.getElementById("nome").value;
    // let sobrenome = document.getElementById("sobrenome").value;
    // let email = document.getElementById("email").value;
    // let cpf = document.getElementById("cpf").value;
    // let telefone = document.getElementById("telefone").value;
    // let contato = document.getElementById("contato").value;
}
    
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    } return;


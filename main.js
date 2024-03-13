const form = document.getElementById('form-contato');
const contatos = [];
const telefone = [];

    let linhas =" ";

form.addEventListener('submit', function(event){ 
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});


function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('num-contato');

    if(contatos.includes(inputNomeContato.value)) {
        alert (`A Atividade ${inputNomeContato.value} já foi inserida`);
    } else {
        contatos.push(inputNomeContato.value);
    telefone.push(parseInt(inputNumeroContato.value));


    let linha =`<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
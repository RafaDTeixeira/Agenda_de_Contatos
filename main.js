const form = document.getElementById('agenda');
const contato = [];
const numero = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarContato();
});

function adicionarContato(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato')

    if(contato.includes(inputNomeContato.value)){
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`)
    } else {

        contato.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
};

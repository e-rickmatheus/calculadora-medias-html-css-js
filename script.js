let notas = []; // Declara um array global para armazenar as notas

function adicionarNota() {
    let nota = document.getElementById('nota').value; // Obtém o valor do campo de input
    if (nota) { // Verifica se o campo não está vazio
        notas.push(parseFloat(nota)); // Adiciona a nota convertida para número ao array "notas"
        atualizarListaNotas(); // Chama a função para atualizar a lista de notas na tela
    }
    document.getElementById('nota').value = ''; // Limpa o campo de input após adicionar a nota
}

function atualizarListaNotas() {
    let lista = document.getElementById('notas'); // Obtém a lista <ul> onde as notas serão exibidas
    lista.innerHTML = ''; // Limpa a lista antes de atualizá-la
    for (let i = 0; i < notas.length; i++) { // Itera sobre todas as notas no array
        let li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = `Nota ${i + 1}: ${notas[i]}`; // Define o texto do <li> com a nota formatada
        lista.appendChild(li); // Adiciona o <li> à lista <ul>
    }
}

function calcularMedia() {
    let somatorioNotas = 0; // Inicializa uma variável para armazenar a soma das notas
    let media = 0; // Inicializa uma variável para armazenar a média

    for (let index = 0; index < notas.length; index += 1) { // Itera sobre todas as notas no array
        somatorioNotas = somatorioNotas + notas[index]; // Soma cada nota ao total
    }

    media = somatorioNotas / notas.length; // Calcula a média dividindo o somatório pelo número de notas

    if (media >= 6) { // Verifica se a média é maior ou igual a 6
        document.getElementById('result').textContent = `Média: ${media.toFixed(2)} - Estudante APROVADO!`; // Exibe a mensagem de aprovação
        document.getElementById('result').classList.add('aprovado'); // Adiciona a classe CSS "aprovada"
        document.getElementById('result').classList.remove('reprovado'); // Remove a classe CSS "reprovado"
    } else { // Caso contrário, a média é menor que 6
        document.getElementById('result').textContent = `Média: ${media.toFixed(2)} - Estudante REPROVADO!`; // Exibe a mensagem de reprovação
        document.getElementById('result').classList.add('reprovado'); // Adiciona a classe CSS "reprovado"
        document.getElementById('result').classList.remove('aprovado'); // Remove a classe CSS "aprovada"
    }
}
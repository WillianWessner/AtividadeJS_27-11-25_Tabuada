function gerarTabuada() {
    const multiplicandoInput = document.getElementById('multiplicando');
    const maxMultiplicadorInput = document.getElementById('maxMultiplicador');
    const resultadoDiv = document.getElementById('resultado-tabuada')

    let listaHTML = '';

    const multiplicando = parseInt(multiplicandoInput.value);
    const maxMultiplicador = parseInt(maxMultiplicadorInput.value);

    // Validação
    if (isNaN(multiplicando) || multiplicando < 1 || isNaN(maxMultiplicador) || maxMultiplicador < 1) {
        resultadoDiv.innerHTML = '<div class="list-group-item list-group-item-danger">Por favor, insira números válidos maiores que zero.</div>';
        return;
    }

    // do 1 até o multiplicador máximo
    for (let i = 1; i <= maxMultiplicador; i++) {
        const resultado = multiplicando * i;

        // Usamos a classe 'list-group-item' do Bootstrap para formatar cada linha
        const linha = `<div class="list-group-item">${multiplicando} x ${i} = ${resultado}</div>`;

        listaHTML += linha;
    }

    if (listaHTML === '') {
        resultadoDiv.innerHTML = `<div class="list-group-item text-muted">Nenhuma tabuada gerada.</div>`;
    } else {
        resultadoDiv.innerHTML = listaHTML
    }







}
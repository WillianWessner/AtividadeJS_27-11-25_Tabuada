// FUNÇÃO PRINCIPAL: Acionada pelo botão no HTML
function gerarTabuada() {
    // -----------------------------------------------------------------
    // BLOC A: CAPTURA DO DOM E LIMPEZA
    // -----------------------------------------------------------------
    const multiplicandoInput = document.getElementById('multiplicando');
    const maxMultiplicadorInput = document.getElementById('maxMultiplicador');
    const resultadoContainer = document.getElementById('resultado-container');

    // Limpa resultados anteriores
    resultadoContainer.innerHTML = '';

    // -----------------------------------------------------------------
    // BLOC B: VALIDAÇÃO DE ENTRADA
    // -----------------------------------------------------------------
    const multiplicando = parseInt(multiplicandoInput.value);
    const maxMultiplicador = parseInt(maxMultiplicadorInput.value);

    if (isNaN(multiplicando) || isNaN(maxMultiplicador) || maxMultiplicador < 1) {
        resultadoContainer.innerHTML = `
            <div class="p-4 bg-red-100 text-red-700 rounded-lg">
                ❌ Por favor, insira números válidos e maiores que zero (1+).
            </div>
        `;
        return;
    }

    // -----------------------------------------------------------------
    // BLOC C: LAÇO DE REPETIÇÃO E GERAÇÃO DA LISTA
    // -----------------------------------------------------------------

    let listaHTML = '<ul>';

    // O Loop 'for' fará a repetição do cálculo e formatação
    // 'i' começa em 1, continua enquanto for menor ou igual ao Máximo Multiplicador,
    // e aumenta em 1 a cada ciclo (i++).
    for (let i = 1; i <= maxMultiplicador; i++) {

        const resultado = multiplicando * i;
        const linha = `<li>${multiplicando} x ${i} = ${resultado}</li>`;
        
        // Adiciona a linha HTML construída à nossa lista total
        listaHTML += linha;
    }

listaHTML += '</ul>'; // Fecha a lista não ordenada </ul>

    // Exibe a lista gerada no container de resultados
    resultadoContainer.innerHTML = listaHTML;
}
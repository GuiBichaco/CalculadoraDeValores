// Funções do layout novo 

function appendToDisplay(value) {
     // Adiciona o valor ao campo de exibição
    document.getElementById('display').value += value;
}

function calculate() {
     // Calcula a expressão no campo de exibição
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    // Limpa o campo de exibição
    document.getElementById('display').value = '';
    
}

function calculatePercentage() {
    try {
        // Calcula a porcentagem da expressão no campo de exibição
        const expression = document.getElementById('display').value;
        const result = eval(expression) / 100;
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
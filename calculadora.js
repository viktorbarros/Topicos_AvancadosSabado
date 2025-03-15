// Função de calculadora
function calcular() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const operacao = prompt("Escolha uma operação: +, -, *, /");

    let resultado;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Erro: Divisão por zero!");
                return;
            }
            break;
        default:
            alert("Operação inválida!");
            return;
    }

    alert(`O resultado é: ${resultado}`);
}

// Chamar a função calculadora
calcular();

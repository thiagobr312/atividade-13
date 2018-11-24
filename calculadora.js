function calcular(num1, num2, OPERACAO) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    resultado = 0;

    if (OPERACAO == 'ADICAO') {
        resultado = (num1 + num2);
    } else if (OPERACAO == 'SUBTRACAO') {
        resultado = (num1 - num2);
    } else if (OPERACAO == 'MULTIPLICACAO') {
        resultado = (num1 * num2);
    } else if (OPERACAO == 'DIVISAO') {
        resultado = (num1 / num2);
    }
    return resultado;
}

function btnCalcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacao = document.getElementById("operacao").value;


    if (operacao === "Selecione") {
        alert("Informe uma operação");
        return;
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + calcular(num1, num2, operacao);
}
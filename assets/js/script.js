function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura)) {
        resultadoDiv.textContent = 'Por favor, insira valores válidos.';
        resultadoDiv.className = 'error';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2';
    } else if (imc >= 40) {
        classificacao = 'Obesidade grau 3';
    }

    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    resultadoDiv.className = 'success';
}

function obtenerMayorNumero(numeros) {
    let mayorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > mayorNumero) {
            mayorNumero = numeros[i]
        };

    }
    return mayorNumero;
};

function obtenerMenorNumero(numeros) {
    let menorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    return menorNumero;
}

function obtenerPromedio(numeros) {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i]
    };
    return (sumaTotal / numeros.length).toFixed(2);
}   

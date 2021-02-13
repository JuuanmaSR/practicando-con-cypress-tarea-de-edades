function probarValidarCantidadDeIntegrantes() {
    console.assert(
        validarCantidadIntegrantes(2) === ``,
        `Validar cantidad de integrantes no funciono con un valor correcto`
    );

    console.assert(
        validarCantidadIntegrantes(0) === `El campo cantidad de integrantes no puede valer cero`,
        `Validar cantidad de integrantes no funciono con un valor cero`
    );

    console.assert(
        validarCantidadIntegrantes(0.5) === `El campo cantidad de integrantes no puede tener decimales`,
        `Validar cantidad de integrantes no funciono con un valor con decimales`
    );

    console.assert(
        validarCantidadIntegrantes(-1) === `El campo cantidad de integrantes no puede tener numeros negativos`,
        `Validar cantidad de integrantes no funciono con un valor negativo`
    );
};
probarValidarCantidadDeIntegrantes();

function probarValidarEdadIntegrante() {
    console.assert(
        validarErroresEdadesEnCero(1) === `Los campos edad integrante no pueden valer cero o estar vacios`,
        `Validar errores de edades en cero no funciono conteniendo errores`
    );

    console.assert(
        validarErroresEdadesEnNumerosNegativos(1) === `Los campos edad integrante no pueden tener numeros negativos`,
        `Validar errores de edades con numeros negativos no funciono conteniendo errores`
    );

    console.assert(
        validarErroresEdadesEnDecimales(1) === `Los campos edad integrantes no pueden tener decimales`,
        `Validar errores de edades con numeros con decimales no funciono conteniendo errores`
    );

    console.assert(
        validarErroresEdadesEnCero(0) === ``,
        `Validar errores de edades en cero no funciono sin errores`
    );

    console.assert(
        validarErroresEdadesEnNumerosNegativos(0) === ``,
        `Validar errores de edades con numeros negativos no funciono sin errores`
    );

    console.assert(
        validarErroresEdadesEnDecimales(0) === ``,
        `Validar errores de edades con numeros con decimales no funciono sin errores`
    );
};
probarValidarEdadIntegrante();
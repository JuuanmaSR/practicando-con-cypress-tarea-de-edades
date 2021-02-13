const $formPrimerPaso = document.querySelector(`#ingreso-cantidad-integrantes`);




function validarCantidadIntegrantes($cantidadIntegrantes) {

    if ($cantidadIntegrantes === 0) {
        return `El campo cantidad de integrantes no puede valer cero`
    }

    if ($cantidadIntegrantes < 0) {
        return `El campo cantidad de integrantes no puede tener numeros negativos`
    };

    if (!/^[0-9]+$/.test($cantidadIntegrantes)) {
        return `El campo cantidad de integrantes no puede tener decimales`
    };
    return ``;

};

function validarPrimerFormulario() {
    let $cantidadIntegrantes = $formPrimerPaso[`cantidad-integrantes`].value;
    let cantidadIntegrantes = Number($cantidadIntegrantes);

    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    const errores = {
        "cantidad-integrantes": errorCantidadIntegrantes
    };
    borrarErroresAcumulados();
    manejarErrores(errores);


};


function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector(`#errores-mostrados`);

    keys.forEach(function (key) {
        const error = errores[key]
        if (error) {
            let $error = document.createElement(`li`);
            $error.className = `errores-mostrados`;
            $error.innerText = error;
            $errores.appendChild($error);

            $formPrimerPaso[key].className = `error`;

        } else {
            $formPrimerPaso[key].className = ``;
        }


    });
    
};

function borrarErroresAcumulados() {
    acumuladorDeErroresCeros = 0;
    acumuladorDeErroresDecimales = 0;
    acumuladorDeErroresNumerosNegativos = 0;
    const $erroresAcumulados = document.querySelectorAll(`.errores-mostrados`);

    $erroresAcumulados.forEach(function (error) {
        error.remove();
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const $formSegundoPaso = document.querySelector(`#calculador-de-edades-por-integrante`);

let acumuladorDeErroresCeros = 0;
let acumuladorDeErroresNumerosNegativos = 0;
let acumuladorDeErroresDecimales = 0;



function validarErroresEdadesEnCero(acumuladorDeErroresCeros) {
    if (acumuladorDeErroresCeros != 0) {
        return `Los campos edad integrante no pueden valer cero o estar vacios`
    };
    return ``;
};
function validarErroresEdadesEnNumerosNegativos(acumuladorDeErroresNumerosNegativos) {
    if (acumuladorDeErroresNumerosNegativos != 0) {
        return `Los campos edad integrante no pueden tener numeros negativos`
    };
    return ``;
};
function validarErroresEdadesEnDecimales(acumuladorDeErroresDecimales) {
    if (acumuladorDeErroresDecimales != 0) {
        return `Los campos edad integrantes no pueden tener decimales`
    };
    return ``;
}

function manejarErroresSegundoFormulario() {
    const edades = document.querySelectorAll(`.integrantes input`);
    let contadorDeErrores = 0;

    for (let i = 0; i < edades.length; i++) {
        if (edades[i].value == 0) {
            edades[i].className = `error`
            acumuladorDeErroresCeros++;
            contadorDeErrores++;
            continue;
        } else {
            edades[i].className = ``
        };
        if (edades[i].value < 0) {
            edades[i].className = `error`
            acumuladorDeErroresNumerosNegativos++;
            contadorDeErrores++;
            continue;
        } else {
            edades[i].className = ``
        };
        if (!/^[0-9]+$/.test(edades[i].value)) {
            edades[i].className = `error`
            acumuladorDeErroresDecimales++;
            contadorDeErrores++;
        } else {
            edades[i].className = ``
        };

    };

    if (contadorDeErrores === 0) {
        ocultarErrores();
        mostrarResultado();
    }else{
        ocultarResultado()
        mostrarErrores();
    }
        
    

};

function mostrarErroresSegundoFormulario() {

    const erroresEnCero = validarErroresEdadesEnCero(acumuladorDeErroresCeros);
    const erroresEnDecimales = validarErroresEdadesEnDecimales(acumuladorDeErroresDecimales);
    const erroresEnNegativos = validarErroresEdadesEnNumerosNegativos(acumuladorDeErroresNumerosNegativos);

    const errores = {
        camposConErrorCeros: erroresEnCero,
        camposConErrorDecimales: erroresEnDecimales,
        camposConErrorNegativos: erroresEnNegativos
    };

    const keys = Object.keys(errores);
    const mostrarErrores = document.querySelector(`#errores-mostrados`);

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            const $error = document.createElement(`li`);
            $error.className = `errores-mostrados`;
            $error.innerText = error;

            mostrarErrores.appendChild($error);
        };
    });

};

function validarSegundoFormulario() {


    borrarErroresAcumulados()
    manejarErroresSegundoFormulario()
    mostrarErroresSegundoFormulario()



};

function ocultarErrores() {
    let mostrarErrores = document.querySelector(`#errores-mostrados`);
    mostrarErrores.className = `oculto`;

};

function mostrarErrores(){
    let mostrarErrores = document.querySelector(`#errores-mostrados`);
    mostrarErrores.className = ``;
};
/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//**BOTONES**//
document.querySelector(`#siguiente-paso`).onclick = function (event) {
    const $cantidadIntegrantes = document.querySelector(`#cantidad-de-integrantes`).value;
    const cantidadIntegrantes = Number($cantidadIntegrantes);

    $formPrimerPaso.onsubmit = validarPrimerFormulario();

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);


    event.preventDefault();



}

document.querySelector(`#resetear`).onclick = resetear;

document.querySelector(`#calcular`).onclick = function (event) {


  borrarErroresAcumulados();
    const edades = obtenerEdadesIntegrantes();
    mostrarEdad(`mayor`, obtenerMayorNumero(edades));
    mostrarEdad(`menor`, obtenerMenorNumero(edades));
    mostrarEdad(`promedio`, obtenerPromedio(edades));
    
   
    $formSegundoPaso.onsubmit = validarSegundoFormulario();

    event.preventDefault();
};
//**BOTONES**//

//**SECTOR CREAR**//
function crearIntegrante(indice) {
    const $div = document.createElement(`div`);
    $div.className = `integrantes`;

    const $label = document.createElement(`label`);
    $label.textContent = `Edad del integrante # ${indice + 1}`;
    const $input = document.createElement(`input`);
    $input.type = `number`;

    $div.appendChild($label);
    $div.appendChild($input);
    const $integrantes = document.querySelector(`#integrantes`);
    $integrantes.appendChild($div);

}


function crearIntegrantes(cantidadIntegrantes) {

    if (/^[0-9]+$/.test(cantidadIntegrantes)) {


        if (cantidadIntegrantes >= 1) {
            mostrarBotonCalcular();
        }



        for (let i = 0; i < cantidadIntegrantes; i++) {
            crearIntegrante(i);
        }
    } 
};
//**SECTOR CREAR**//

//**SECTOR MOSTRAR Y OBTENER**//
function mostrarBotonCalcular() {
    const $botonCalcular = document.querySelector(`#calcular`);
    $botonCalcular.className = ``
};
function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll(`.integrantes input`);
    const $edades = [];
    for (let i = 0; i < $integrantes.length; i++) {

        $edades.push(Number($integrantes[i].value));
    };
    return $edades;
}
function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad `).textContent = valor;
}
function mostrarResultado() {
    let $resultado = document.querySelector(`#analisis`);
    $resultado.className = ``;
}

//**SECTOR MOSTRAR Y OBTENER**//

//**SECTOR OCULTAR Y BORRAR**//
function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll(`.integrantes`);
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }

};


function ocultarBotonCalcular() {
    const $botonCalcular = document.querySelector(`#calcular`);
    $botonCalcular.className = `oculto`;
}

function ocultarResultado() {
    let $resultado = document.querySelector(`#analisis`);
    $resultado.className = `oculto`;
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalcular();
    ocultarResultado();
    borrarErroresAcumulados();
};

//**SECTOR OCULTAR Y BORRAR**//


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

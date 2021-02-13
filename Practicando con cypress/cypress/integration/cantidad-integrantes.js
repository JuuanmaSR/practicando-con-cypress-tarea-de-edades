const urlCantidadIntegrantes = "http://192.168.1.5:8080";

context(`cantidad de integrantes`, () => {
    before(() => {
        cy.visit(urlCantidadIntegrantes);
    });

    describe('Ingresando cantidad de integrantees.', () => {

        it(`Asegurar que cuando se ingrese la cantida de integrantes aparescan los inputs.`, () => {
            cy.get(`#cantidad-de-integrantes`).type(2);
            cy.get(`#siguiente-paso`).click();
            cy.get(`#calculador-de-edades-por-integrante`).find(`#integrantes`).find(`.integrantes`).should(`have.length`, 2);
        });

        it(`Asegurar que cuando se eingrese la cantidad de integrantes aparesca el boton calcular.`, () => {
            cy.get(`#calcular`).should(`be.visible`);
        });
    });
    describe(`Ingresar edad de los integrantes.`, () => {

        it(`Asegurar que cuando se ingrese la edad de los integrantes y se parete "calcular"
         se muetre la informacion solicitada.`, () => {

            cy.get(`.integrantes input`).eq(0).type(25);
            cy.get(`.integrantes input`).eq(1).type(34);
            cy.get(`#calcular`).click();
            cy.get(`#analisis`).should(`be.visible`);
        });
    });

    describe(`Apretar boton resetear`, () => {
        it(`Asegurar que cuando se presione el boton resetear
         se borren los resultados, los input, el boton calcular.`, () => {
            cy.get(`#resetear`).click();
            cy.get(`#integrantes`).should(`not.be.visible`);
            cy.get(`#analisis`).should(`not.be.visible`);
            cy.get(`#calcular`).should(`not.be.visible`);
        });
    });
});
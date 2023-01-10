const faker = require('faker-br');

const ELEMENTS = {

    buttonAccessCheckout: "[data-test='checkout']",
    inputFirstNameCustomer: "[data-test='firstName']",
    inputLastNameCustomer: "[data-test='lastName']",
    inputPostalCode: "[data-test='postalCode']",
    buttonNextStep: "[data-test='continue']",
    buttonFinishOrder: "[data-test='finish']",
    textOrderCreated: "#checkout_complete_container"

}


class Checkout {

    accessCheckout(){
    cy.get(ELEMENTS.buttonAccessCheckout).click()
    }

    insertDataCustomer(){
     cy.get(ELEMENTS.inputFirstNameCustomer).type(faker.name.firstName())
     cy.get(ELEMENTS.inputLastNameCustomer).type(faker.name.lastName())
     cy.get(ELEMENTS.inputPostalCode).type("04764040")
    }

    nextStepCheckout(){
        cy.get(ELEMENTS.buttonNextStep).click()
    }

    finishOrder(){
        cy.get(ELEMENTS.buttonFinishOrder).click()
    }

    validateOrderCreated(){
        cy.get(ELEMENTS.textOrderCreated).should('contain', 'THANK YOU FOR YOUR ORDER')
    }
}

export default new Checkout();

const ELEMENTS = {
    inputUser: "[data-test='username']",
    inputPassword: "[data-test='password']",
    buttonAccessLogin: "[data-test='login-button']"

}


class Login {

    authentication(typeUser){
            cy.get(ELEMENTS.inputUser).type(Cypress.env(typeUser).user, { log: false })
            cy.get(ELEMENTS.inputPassword).type(Cypress.env(typeUser).password, { log: false })
            cy.get(ELEMENTS.buttonAccessLogin).click()
    }

}
export default new Login();

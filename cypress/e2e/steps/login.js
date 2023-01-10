import {Given as Dado, When as Quando, Then as Então} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/login"

Dado("que acesso a loja virtual", () => {
   cy.visit(Cypress.env('baseUrl'));
})

Quando("informo credencias validas para autenticacao na plataforma", () => {
    loginPage.authentication("userValid")
})
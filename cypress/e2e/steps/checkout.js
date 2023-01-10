import {When as Quando, Then as Então} from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../../support/pages/checkout"


Quando("prosseguir para o checkout e informar as dados solicitados", () => {
   checkoutPage.accessCheckout()
   checkoutPage.insertDataCustomer()
   checkoutPage.nextStepCheckout()
})

Quando("finalizar o pedido", () => {
    checkoutPage.finishOrder()
})

Então("verifico que o pedido foi gerado com sucesso", () => {
    checkoutPage.validateOrderCreated()
})
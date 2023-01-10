import {Given as Dado, When as Quando, Then as Então} from "@badeball/cypress-cucumber-preprocessor";
import productsPage from "../../support/pages/products"

Quando("adicionar {string} produtos no carrinho", (qtdProdutos) => {
    productsPage.addProduct(qtdProdutos)
})


Quando("remover {string} produtos do carrinho", (qtdProdutos) => {
    productsPage.removeProduct(qtdProdutos)
})
import { When as Quando, Then as Então } from '@badeball/cypress-cucumber-preprocessor'
import cartPage from '../../support/pages/cart'

Quando('acessar o carrinho', () => {
  cartPage.accessCart()
})

Então('verifico que a quantidade de produtos no carrinho é igual a {string}', (qtdProduct) => {
  cartPage.validateQtdProductInCart(qtdProduct)
})

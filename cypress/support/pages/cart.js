const ELEMENTS = {

  iconAccessCart: '#shopping_cart_container',
  iconQtdProducts: '.shopping_cart_badge'

}

class Checkout {
  accessCart () {
    cy.get(ELEMENTS.iconAccessCart).click()
  }

  validateQtdProductInCart (qtdProducts) {
    cy.get(ELEMENTS.iconQtdProducts).invoke('text').then(($qtd) => {
      expect($qtd).to.equal(qtdProducts)
    })
  }
}

export default new Checkout()


const ELEMENTS = {
    buttonAddProductCart: ".btn_inventory",

}


class Products {

    addProduct(qtd){
        for (var i = 0; i < qtd; i++) {
            cy.get(ELEMENTS.buttonAddProductCart).eq(i).click()
        }
    }

    removeProduct(qtd){
        for (var i = 0; i < qtd; i++) {
            cy.get(ELEMENTS.buttonAddProductCart).eq(i).click()
        }
    }
}

export default new Products();

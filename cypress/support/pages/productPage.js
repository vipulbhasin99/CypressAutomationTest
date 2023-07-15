/// <reference types ='cypress'/>

class ProductPage {
  getQuantityDropdown() {
    return cy.get("#quantity");
  }

  getAddToBasketBtn() {
    return cy.get("#add-to-cart-button");
  }

  increaseQuantity(qty) {
    this.getQuantityDropdown().select(qty);
  }

  addToBasket() {
    this.getAddToBasketBtn().click();
  }
}

export default new ProductPage();

/// <reference types ='cypress'/>
import searchResultsPage from "../../support/pages/searchResultsPage";

class CartPage {
  getGotoBasketBtn() {
    return cy.get('a[data-csa-c-content-id="sw-gtc_CONTENT"]');
  }

  getQuantity() {
    return cy.get(".a-dropdown-prompt");
  }

  goToBasket() {
    this.getGotoBasketBtn().click();
  }

  areItemsAdded() {
    searchResultsPage.getSelectedProductLink().should("be.visible");
  }

  isQuantityIncreasedto(qty) {
    this.getQuantity().should("have.text", qty);
  }
}

export default new CartPage();

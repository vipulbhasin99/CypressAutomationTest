/// <reference types ='cypress'/>

class HomePage {
  getDeliverToLink() {
    return cy.get("#nav-global-location-popover-link");
  }

  getEnterPINCodeInput() {
    return cy.get("#GLUXZipUpdateInput");
  }

  getApplyBtn() {
    return cy.get("#GLUXZipUpdate-announce");
  }

  getContinueBtn() {
    return cy.get(".a-popover-footer > span > span > span");
  }

  getSearchInput() {
    return cy.get(".nav-search-field>input");
  }

  getSearchBtn() {
    return cy.get("#nav-search-submit-button");
  }

  setDeliveryLocation(location) {
    this.getDeliverToLink().click();
    cy.wait(2000);
    this.getEnterPINCodeInput().type(location);
    cy.wait(2000);
    this.getApplyBtn().click({ force: true });
    cy.wait(2000);
    this.getContinueBtn().click({ force: true });
  }

  searchFor(searchItem) {
    cy.wait(2000);
    this.getSearchInput().type(searchItem);
    cy.wait(2000);
    this.getSearchBtn().click();
  }
}

export default new HomePage();

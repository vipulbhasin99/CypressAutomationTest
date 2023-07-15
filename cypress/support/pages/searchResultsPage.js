/// <reference types ='cypress'/>

class SearchResultsPage {
  getRejectCokkiesLink() {
    return cy.get("#sp-cc-rejectall-link");
  }

  getSortDropdown() {
    return cy.get("select[name='s']");
  }

  getSelectedProductLink() {
    return cy.get('div[data-asin="B07DY15BXJ"]');
  }

  sortBy(text) {
    this.getRejectCokkiesLink().then(($el) => {
      if (Cypress.dom.isVisible($el)) {
        this.getRejectCokkiesLink().click({ force: true });
      }
    });
    cy.log(text);
    this.getSortDropdown().select(text, { force: true });
  }

  selectProduct() {
    cy.wait(2000);
    this.getSelectedProductLink().click();
  }
}

export default new SearchResultsPage();

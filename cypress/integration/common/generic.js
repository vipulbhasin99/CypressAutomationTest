import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I am on Amazon UK homepage", () => {
  cy.visit(Cypress.env("baseurl"));
});

/// <reference types="Cypress" />
import { defineStep } from "cypress-cucumber-preprocessor/steps";
import "cypress-iframe";

Given(/^I go to "([^"]*)"$/, (url) => {
  cy.visit(url);
});

When(/^I check "([^"]*)"$/, (args1) => {
  cy.get("#checkBoxOption1")
    .check(args1)
    .should("be.checked")
    .and("have.value", args1);
});

When(/^I uncheck "([^"]*)"$/, (args1) => {
  cy.get("#checkBoxOption1").uncheck(args1).should("not.be.checked");
});

When(/^I check "([^"]*)"$/, (args1) => {
  cy.get("#checkBoxOption1")
    .check(args1)
    .should("be.checked")
    .and("have.value", args1);
});

When(/^I check "([^"]*)" and "([^"]*)"$/, (args1, args2) => {
  cy.get("input[type='checkbox']").check([args1, args2]);
});

Then(/^I select "([^"]*)" from dropdown$/, (args1) => {
  cy.get("select").select(args1).should("have.value", args1);
});

Then(
  /^I select "([^"]*)" from dynamic dropdown by typing "([^"]*)"$/,
  (args1, args2) => {
    cy.get("#autocomplete").type(args2);

    cy.get(".ui-menu-item div").each(($el) => {
      if ($el.text() === args1) {
        $el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", args1);
  }
);

Then(/^I verify whether element should be visible or not$/, () => {
  cy.get("#displayed-text").should("be.visible");
  cy.get("#hide-textbox").click();
  cy.get("#displayed-text").should("not.be.visible");
  cy.get("#show-textbox").click();
  cy.get("#displayed-text").should("be.visible");
});

Then(/^I click "([^"]*)" button$/, (args1) => {
  cy.get(`input[value="${args1}"]`).check().should("be.checked");
});

When(/^I click on alert button$/, () => {
  cy.get("#alertbtn").click(); //auto-accepts alert

  // to get alert text - cypress doesnt have inbuilt command for this, but it
  // has a facility to listen to browser events
  // When any alert is open, there is an event called window:alert which gets triggered when alert is launched
  //cy.on is the command which listens for cypress events
  //cy.on takes 2 args, (fireEvent, output)

  cy.on("window:alert", (str) => {
    // this event will trigger the alert
    expect(str).to.equal(
      "Hello , share this practice page and share your knowledge"
    );
  });
});

When(/^I click on confirm button$/, () => {
  cy.get("#confirmbtn").click(); //auto-accepts alert

  cy.on("window:confirm", (str) => {
    expect(str).to.equal("Hello , Are you sure you want to confirm?");
  });
});

When(/^I click on switch button$/, () => {
  cy.get("#opentab").invoke("removeAttr", "target").click();

  //   cy.origin("https://www.qaclickacademy.com/", () => {
  //     cy.url().should("include", "qaclickacademy");

  //     cy.go("back");
  //   });
});

When(/^I verify the "([^"]*)" book price from a table$/, (args1) => {
  cy.get("tr td:nth-child(2)").each(($cell) => {
    const text = $cell.text();
    if (text.includes("Python")) {
      cy.wrap($cell).next().should("have.text", "25");
    }
  });
});

When(/^I mouse hover over the button$/, () => {
  // cypress doesnt support mouse hover. We have to use jquery to use this.
  cy.get(".mouse-hover-content").invoke("show"); // show is a jquery method which shoes all the hidden elemets
  cy.contains("Top").click();
  cy.url().should("contain", "top");
});

When(/^I click on new window button$/, () => {
  cy.get("#opentab").then((e1) => {
    const url = e1.prop("href");
    cy.visit(url);
    cy.url().should("contain", "qaclickacademy");
    cy.origin(url, () => {
      cy.get("div.sub-menu-bar a[href*='about']").click();
    });
  });
});

When(/^I click on a button within a frame$/, () => {
  cy.frameLoaded("#courses-iframe");

  cy.iframe().find("a[href*='mentorship']").eq(0).click();
});

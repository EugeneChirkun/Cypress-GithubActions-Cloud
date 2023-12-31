/// <reference types='Cypress' />

describe("Cypress web security", () => {
  it("Proceed from one domain to another", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });

  it("Origin command", () => {
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });

    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });

    cy.visit("http://www.selectors.webdriveruniversity.com/");
  });
});

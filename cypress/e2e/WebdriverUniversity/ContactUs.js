/// <reference types='Cypress' />

describe("Test Contact Us form via WebdriverUniversity", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  });

  it.only("Should be able to successfully submit Contact Us form", () => {
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.get('[name = "first_name"]').type("John");
    cy.get('[name="last_name"]').type("Deer");
    cy.get('[name="email"]').type("johnny.d@testmail.com");
    cy.get('[name="message"]').type("My test message");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to successfully submit Contact Us form", () => {
    cy.get('[name = "first_name"]').type("John");
    cy.get('[name="last_name"]').type("Deer");
    cy.get('[name="message"]').type("My test message");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error:");
  });
});

/// <reference types='Cypress' />

describe("Test Contact Us form via WebdriverUniversity", () => {
  beforeEach(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  });

  it("Should be able to successfully submit Contact Us form", () => {
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.get('[name = "first_name"]').type(data.firstName);
    cy.get('[name="last_name"]').type(data.lastName);
    cy.get('[name="email"]').type(data.email);
    cy.get('[name="message"]').type(data.messageText);
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to successfully submit Contact Us form", () => {
    cy.get('[name = "first_name"]').type(data.firstName);
    cy.get('[name="last_name"]').type(data.lastName);
    cy.get('[name="message"]').type(data.messageText);
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error:");
  });
});

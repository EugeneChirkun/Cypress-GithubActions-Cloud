/// <reference types='Cypress' />

describe("Test Contact Us form via WebdriverUniversity", () => {
  beforeEach(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
    cy.visit(
      Cypress.env("webdriverUniversityHomePage") + "/Contact-Us/contactus.html"
    );
  });

  it("Should be able to successfully submit Contact Us form", () => {
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.webdriverUniversityContactUsFormSubmit(
      Cypress.env("firstName"),
      data.lastName,
      data.email,
      data.messageText,
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to successfully submit Contact Us form", () => {
    cy.webdriverUniversityContactUsFormSubmit(
      data.firstName,
      data.lastName,
      " ",
      data.messageText,
      "body",
      "Error:"
    );
  });
});

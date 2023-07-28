/// <reference types="Cypress" />
describe("Handling file upload via Webdriveruniversity page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Upload file and verify", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click;

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Your file has now been uploaded!");
    });
  });

  it("No file upload", () => {
    cy.get("#submit-button").click;

    cy.on("window:alert", (str) => {
      expect(str).to.equal("You need to select a file to upload!");
    });
  });
});

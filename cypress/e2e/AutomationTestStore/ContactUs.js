/// <reference types='Cypress' />

describe("Test Contact Us form via Automation Test Store", {
  retries: {
    runMode: 0,
    openMode: 0
  }
}, () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });

  it("Should be able to successfully submit Contact Us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then(function (linkText) {
        console.log("Clicked on link with text: " + linkText.text());
      });

    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.firstName);
      cy.get("#ContactUsFrm_email").type(user.email);
      cy.get("#ContactUsFrm_enquiry").type(user.userMessage);
    });
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});

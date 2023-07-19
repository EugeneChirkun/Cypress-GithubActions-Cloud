/// <reference types='Cypress' />

describe("Test Contact Us form via Automation Test Store", () => {
  it.only("Should be able to successfully submit Contact Us form", () => {
    cy.visit("https://automationteststore.com/");
    // cy.xpath('//a[contains(@href, \'contact\')]').click();
    cy.get("a[href$='contact']")
      .click()
      .then(function (linkText) {
        console.log("Clicked on link with text: " + linkText.text());
      });
    cy.get("#ContactUsFrm_first_name").type("Johnatan");
    cy.get("#ContactUsFrm_email").type("john.test.mail@test.com");
    cy.get("#ContactUsFrm_enquiry").type("Test message");
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});

/// <reference types='Cypress' />

describe("Handling WebdriverUniversity checkboxes", () => {
  beforeEach(()=> {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  })
  it("Check and validate checkboxes", () => {
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.checked");
    cy.get("@option-1").uncheck().should("not.be.checked");
  });

  it("Multiple checkboxes, check all", () => {
    cy.get('[type=\'checkbox\']').as("options");
    cy.get("@options").check().should("be.checked");
    cy.get("@options").uncheck().should("not.be.checked");
  });

  it("Multiple checkboxes, check by value", () => {
    cy.get('[type=\'checkbox\']').as("options");
    cy.get("@options").check('option-1').should("be.checked");
    cy.get("@options").check(['option-2', 'option-4']).should("be.checked");
  });
});

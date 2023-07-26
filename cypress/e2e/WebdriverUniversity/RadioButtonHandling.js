/// <reference types='Cypress' />

describe("Handling WebdriverUniversity radio buttons", () => {
  beforeEach(()=> {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });

  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find('[type="radio"]').as("radiobuttons");
    cy.get("@radiobuttons").eq(0).check().should("be.checked");
    cy.get("@radiobuttons").eq(1).check().should("be.checked");
    cy.get("@radiobuttons").eq(0).should("not.be.checked");
  });

  it("Validate state of the specific radio buttons", () => {
    cy.get("#radio-buttons-selected-disabled")
      .find("[type='radio']")
      .as("radiobuttons2");
    //   First approach
    cy.get("@radiobuttons2").eq(0).should("not.be.checked");
    cy.get("@radiobuttons2").eq(1).should("not.be.enabled");
    cy.get("@radiobuttons2").eq(2).should("be.checked");
    cy.get("@radiobuttons2").eq(0).check();
    cy.get("@radiobuttons2").eq(0).should("be.checked");
    cy.get("@radiobuttons2").eq(2).should("not.be.checked");
    cy.get("@radiobuttons2").eq(2).check();
    // Second approach
    cy.get('[value="lettuce"]').should("not.be.checked");
    cy.get('[value="cabbage"]').should("not.be.enabled");
    cy.get('[value="pumpkin"]').should("be.checked");
    cy.get('[value="lettuce"]').check();
    cy.get('[value="lettuce"]').should("be.checked");
    cy.get('[value="pumpkin"]').should("not.be.checked");
  });
});

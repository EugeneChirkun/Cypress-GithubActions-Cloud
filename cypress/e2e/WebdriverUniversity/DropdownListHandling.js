/// <reference types='Cypress' />

describe("Handling WebdriverUniversity dropdown lists", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });

  it("Check specific values via select dropdown lists", () => {
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("javascript").contains("JavaScript");
  });

  it("Dropdown lists challenge", () => {
    cy.get("#dropdowm-menu-2").select("TestNG").should("have.value", "testng");
    cy.get("#dropdowm-menu-2").select("JUnit").should("have.value", "junit");
  });
});

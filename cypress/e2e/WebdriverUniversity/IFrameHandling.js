/// <reference types='Cypress' />

describe("Handling iFrames", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#iframe").invoke("removeAttr", "target").click();
  });

  it("Handling WebdriverUniversity iFrame and modal", () => {
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find(".modal-body").as("modalBody");

    cy.get("@modalBody").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range"
      );
    });
  });
});

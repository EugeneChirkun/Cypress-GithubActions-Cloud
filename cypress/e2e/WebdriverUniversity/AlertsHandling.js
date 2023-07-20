/// <reference types='Cypress' />

describe("Handling alerts and popups", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate js confirm alert box works correctly when clicking OK", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Challenge: Validate js confirm alert box works correctly when clicking CANCEL", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Validate js confirm alert box using a stub", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    const myStub = cy.stub();
    cy.on("window:confirm", myStub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(myStub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});

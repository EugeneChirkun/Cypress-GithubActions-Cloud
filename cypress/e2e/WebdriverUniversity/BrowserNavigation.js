/// <reference types='Cypress' />

describe("Validate WebdriverUniversity homepage links ", () => {
  it.only("Confirm link redirects to the correct pages", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({force:true});
    cy.url().should('include', 'Contact-Us');

    cy.go('back');
    cy.reload();
    cy.go('forward');
    cy.url().should('include', 'Contact-Us');
    cy.go('back');

    cy.get("#login-portal").invoke("removeAttr", "target").click({force:true});
    cy.url().should('include', 'Login-Portal');
    cy.go('back');

    cy.get("#to-do-list").invoke("removeAttr", "target").click({force:true});
    cy.url().should('include', 'To-Do-List');
    cy.go('back');
    cy.url().should('include', 'http://www.webdriveruniversity.com/');
  });
});

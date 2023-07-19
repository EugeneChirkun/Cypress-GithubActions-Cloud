/// <reference types='Cypress' />

describe("Verifying variables, Cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    //Will fail
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    //   makeupLink.click();

    //Works, but not good approach
    // const skinCareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // skinCareLink.click();

    //Good approach
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    //Will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    //Will work
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log('Found header text: ' + headerText);
      expect(headerText).is.eq('Makeup');
    });
  });

  it.only("Validating properties of Contact Us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');
    
    // Jquery
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      const firstNameText = text.find('#field_11').text();
      expect(firstNameText).to.contain('First name:');

      // Closure
      cy.get('#field_11').then(fnText => {
        cy.log(fnText.text());
        cy.log(fnText);
      })
    });
  });
});

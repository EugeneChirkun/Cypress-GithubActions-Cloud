/// <reference types='Cypress' />

describe("Iteration through elements", () => {
  it("Log information about all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to shopping cart", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());

      if ($el.text().includes('Curls to straight Shampoo')) {
        cy.wrap($el).click();
        cy.get('.cart').click();
      }
    });
  });
});

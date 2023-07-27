/// <reference types='Cypress' />

describe("Iteration through elements. Hair care products", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information about all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to shopping cart", () => {
    cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add another specific product to shopping cart", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
});

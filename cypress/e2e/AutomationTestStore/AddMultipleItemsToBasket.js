/// <reference types='Cypress' />

describe("Add multiple items to the shopping cart", () => {
  before(() => {
    cy.fixture("products").then((products) => {
      globalThis.products = products;
    });
  });

  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific item to the shopping cart", () => {
    globalThis.products.productName.forEach((element) => {
      cy.addProductToCart(element);
    });
  });
});

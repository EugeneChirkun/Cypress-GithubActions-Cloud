/// <reference types='Cypress' />

describe("Working with aliases", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("produchThumbnail");
    cy.get("@produchThumbnail").its("length").should("be.gt", 5);
    cy.get("@produchThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Alias challenge", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as('produchThumbnail');

    cy.get("@produchThumbnail").should('have.length', 16);
    cy.get("@produchThumbnail").find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
  });
});

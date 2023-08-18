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

    cy.get(".thumbnail").as("produchThumbnail");

    cy.get("@produchThumbnail").should("have.length", 16);
    cy.get("@produchThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("produchThumbnail");
    cy.get("@produchThumbnail").find('.oneprice').invoke('text').as('itemPrice');
    cy.get("@produchThumbnail").find('.pricenew').invoke('text').as('saleItemPrice');
    
    var itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
        var itemPriceTotal = 0;
        var itemPriceArr = $linkText.split('$');
        var i;
        for(i = 0; i < itemPriceArr.length; i++) {
            cy.log(itemPriceArr[i]);
            itemPriceTotal += Number(itemPriceArr[i]);
        }
        itemsTotal += itemPriceTotal;
        cy.log('Non-sale items total is: ' + itemPriceTotal);
    });

    cy.get('@saleItemPrice').then($linkText => {
        var saleItemPriceTotal = 0;
        var saleItemPriceArr = $linkText.split('$');
        var i;
        for(i = 0; i < saleItemPriceArr.length; i++) {
            cy.log(saleItemPriceArr[i]);
            saleItemPriceTotal += Number(saleItemPriceArr[i]);
        }
        itemsTotal += saleItemPriceTotal;
        cy.log('Sale items total is: ' + saleItemPriceTotal);
    })
    .then(() => {
        cy.log('All items total is: ' + itemsTotal); 
        expect(itemsTotal).to.equal(660.5);
    })
  });
});

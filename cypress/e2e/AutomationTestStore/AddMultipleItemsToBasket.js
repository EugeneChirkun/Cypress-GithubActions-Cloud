import StoreHomePage from "../../support/PageObjects/AutomationStore/StoreHomePage";
import HairCarePage from "../../support/PageObjects/AutomationStore/HairCarePage";
/// <reference types='Cypress' />

describe("Add multiple items to the shopping cart", () => {
const storeHomePage = new StoreHomePage();
const hairCarePage = new HairCarePage();
  before(() => {
    cy.fixture("products").then((products) => {
      globalThis.products = products;
    });
  });

  beforeEach(() => {
    storeHomePage.accessHomePage();
    storeHomePage.clickOnHairCareLink();
  });

  it("Add specific item to the shopping cart", () => {
    hairCarePage.addHairCareProductsToCart();
    // globalThis.products.productName.forEach((element) => {
    //   cy.addProductToCart(element);
    // });
    // cy.get('.dropdown-toggle > .fa').click();
  });
});

class HairCarePage {
    openHairCarePage() {

    }

    addHairCareProductsToCart() {
        globalThis.products.productName.forEach((element) => {
            cy.addProductToCart(element);
          });
          cy.get('.dropdown-toggle > .fa').click();
    }
  }
  
  export default HairCarePage;
  
class HairCarePage {
    openHairCarePage() {

    }

    addHairCareProductsToCart() {
        globalThis.products.productName.forEach((element) => {
            cy.addProductToCart(element).then(()=> {
                // debugger;
            });
          });
          cy.get('.dropdown-toggle > .fa').click().debug();
    }
  }
  
  export default HairCarePage;
  
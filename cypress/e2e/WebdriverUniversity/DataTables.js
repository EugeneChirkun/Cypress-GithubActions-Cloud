/// <reference types="Cypress" />
describe("Working with data tables on WebdriverUniversity", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let totalAge = 0;
      cy.get('#thumbnail-1 td').each(($el, index, $list)=> {
        userDetails[index] = $el.text();
      }).then(()=> {
        var i;
        for(i = 0; i < userDetails.length; i++) {
            if(Number(userDetails[i])) {
                totalAge += Number(userDetails[i])
            }
        }
        cy.log('Total age is: ' + totalAge);
        expect(totalAge).to.eq(322);
      });
    });

    it("Locate and assert the age of a given user", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list)=> {
            const text = $el.text();
            if(text.includes('Woods')) {
                expect($el.next().text()).to.eq('80');
            }
          });
    });
  });
  
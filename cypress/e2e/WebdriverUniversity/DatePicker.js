/// <reference types="Cypress" />
describe("Working with date pickers on WebdriverUniversity", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  });

  it("Select date from date picker", () => {
    var date = new Date();
    date.setDate(date.getDate() + 70);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();
    cy.log(
      "Year " + futureYear + ", month " + futureMonth + " and day " + futureDay
    );

    cy.get("#datepicker").click();

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get(".day").contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDay();
  });
});

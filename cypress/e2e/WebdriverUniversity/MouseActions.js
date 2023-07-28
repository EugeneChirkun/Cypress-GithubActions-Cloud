/// <reference types='Cypress' />

describe("Handling WebdriverUniversity mouse actions", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });

  it("Drag and drop", () => {
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("Double click", () => {
    cy.get("#double-click").dblclick();
  });

  it("Click and hold", () => {
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});

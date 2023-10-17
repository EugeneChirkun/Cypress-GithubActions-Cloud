/// <reference types='Cypress' />

describe("JSON objects", () => {
  it("JSON object examples", () => {
    const usersExample = {
      firstName: "John",
      lastName: "Adams",
      age: "35",
      students: [
        { firstName: "Tomas", lastName: "Anderson", age: "25" },
        { firstName: "Darell", lastName: "Williams", age: "41" },
        { firstName: "Alan", lastName: "Reznor", age: "31" },
      ],
    };

    cy.log(usersExample.students[0].firstName);
  });
});

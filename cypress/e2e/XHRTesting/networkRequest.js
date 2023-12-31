/// <reference types='Cypress' />

describe("Network requests", () => {
    let message = "Unable to find comment!";

    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests");
    });

    it("GET request", () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*"
        }).as("getComment");

        cy.get('.network-btn').click();

        cy.wait("@getComment").its("response.statusCode").should("eq", 200);
    });

    it("GET request mocked", () => {
        cy.intercept({
                method: "GET",
                url: "**/comments/*"
            },
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: "Mocked response",
                    email: "test@test.com",
                    body: "Hello, I'm here!"
                }
            }).as("getComment");

        cy.get('.network-btn').click();

        cy.wait("@getComment").its("response.statusCode").should("eq", 200);
    });

    it("POST request", () => {
        cy.intercept("POST", "/comments").as("postComment");

        cy.get('.network-post').click();

        cy.wait("@postComment").should(({request, response}) => {
            console.log(request);
            expect(request.body).to.include("email");
            console.log(response);
            expect(response.body).to.have.property("name", "Using POST in cy.intercept()");
        });
    });

    it.only("PUT request mocked", () => {
        cy.intercept({
                method: "PUT",
                url: "**/comments/*"
            },
            {
                statusCode: 404,
                body: {
                    error: message,
                    delay: 500
                }

            }).as("putComment");

        cy.get('.network-put').click();
        cy.wait("@putComment");
        cy.get('.network-put-comment').should("contain", message);
    });
})
import HomePage from "../../support/PageObjects/WebdriverUni/HomePage";
import ContactUsPage from "../../support/PageObjects/WebdriverUni/ContactUsPage";
/// <reference types='Cypress' />

describe("Test Contact Us form via WebdriverUniversity", () => {
  const homePage = new HomePage();
  const contactUsPage = new ContactUsPage();

  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    homePage.visitHomePage();
    homePage.clickOnContactUsButton();
  });

  it("Should be able to successfully submit Contact Us form", () => {
    contactUsPage.contactFormSubmission(
      data.firstName,
      data.lastName,
      data.email,
      data.messageText,
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to successfully submit Contact Us form", () => {
    const contactUsPage = new ContactUsPage();
    contactUsPage.contactFormSubmission(
      data.firstName,
      data.lastName,
      " ",
      data.messageText,
      "body",
      "Error:"
    );
  });
});

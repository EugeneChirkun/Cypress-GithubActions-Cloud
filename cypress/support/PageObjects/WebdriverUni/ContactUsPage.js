class ContactUsPage {
  contactFormSubmission(
    firstName,
    lastName,
    email,
    messageText,
    $selector,
    textToLocate
  ) {
    cy.get('[name = "first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('[name="message"]').type(messageText);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
  }
}

export default ContactUsPage;

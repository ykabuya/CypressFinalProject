// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    import selectors from '../support/selectors.js'
Cypress.Commands.add('clickOnHomeTab', () => {
    cy.get(selectors.Home_tab).should("be.visible").invoke('text').should('eq', 'Home')
    cy.get(selectors.Home_tab).click().url().should("eq", "https://consumersenergymanagement.ca/")
    cy.get("h1").contains('Furnace Rental Toronto – We make it easy for you.')


})
Cypress.Commands.add('clickOnAboutTab', () => {
    cy.get(selectors.About_tab).should("be.visible").should("have.text", "About")
    cy.get(selectors.About_tab).click().url().should("eq", "https://consumersenergymanagement.ca/about-us/")
    cy.get("h1").contains('About Consumers Energy Management Inc.')

})
Cypress.Commands.add('clickOnProductsTab', () => {
    cy.get(selectors.Products_tab).should("be.visible").contains("Products")
    cy.get(selectors.Products_tab).click().url().should("eq", "https://consumersenergymanagement.ca/products/")
    cy.get("h1").contains('Products')

})
Cypress.Commands.add('clickOnServicesTab', () => {
    cy.get(selectors.Services_tab).should("be.visible").invoke('text').should("contain","Services")
    cy.get(selectors.Services_tab).click().url().should("eq", "https://consumersenergymanagement.ca/services/")
    cy.get("h1").contains('Services')

})
Cypress.Commands.add('clickOnToolsTab', () => {
    cy.get(selectors.Tools_tab).should("be.visible").invoke('text').should("contain","Tools")
    cy.get(selectors.Tools_tab).click().url().should("eq", "https://consumersenergymanagement.ca/tools-resources/")
    cy.get("h1").contains('Tools & Resources')

})
Cypress.Commands.add('clickOnPromotionsTab', () => {
    cy.get(selectors.Promotions_tab).should("be.visible").invoke('text').should("eq","Promotions")
    cy.get(selectors.Promotions_tab).click().url().should("eq", "https://consumersenergymanagement.ca/promotions/")
    cy.get("h1").contains('Promotions')

})
Cypress.Commands.add('clickOnCareersTab', () => {
    cy.get(selectors.Careers_tab).should("be.visible").invoke('text').should("eq","Careers")
    cy.get(selectors.Careers_tab).click().url().should("eq", "https://consumersenergymanagement.ca/careers/")
    cy.get("h1").contains('Careers')

})
Cypress.Commands.add('clickOnBlogTab', () => {
    cy.get(selectors.Blog_tab).should("be.visible").invoke('text').should("eq","Blog")
    cy.get(selectors.Blog_tab).click().url().should("eq", "https://consumersenergymanagement.ca/blog/")
    cy.get("h1").contains('Blog')

})
Cypress.Commands.add('clickOnFAQsTab', () => {
    cy.get(selectors.FAQs_tab).should("be.visible").invoke('text').should("eq","FAQs")
    cy.get(selectors.FAQs_tab).click().url().should("eq", "https://consumersenergymanagement.ca/faq/")
    cy.get("h1").contains('Frequently Asked Questions')

})
Cypress.Commands.add('clickOnContactTab', () => {
    cy.get(selectors.Contact_tab).should("be.visible").invoke('text').should("eq","Contact")
    cy.get(selectors.Contact_tab).click().url().should("eq", "https://consumersenergymanagement.ca/contact-us/")
    cy.get("h1").contains('Contact Us')

}) 
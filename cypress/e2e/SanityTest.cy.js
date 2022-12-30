///<reference types="Cypress"/>

// import selectors from '../support/selectors.js'
// import commands from '../support/commands.js'

describe('Main Page Sanity testing',{defaultCommandTimeout: 50000}, () => {
  beforeEach('navigate to the main page', () => {
    cy.visit('/')
    
  })
  it('verify correct URL',()=>{
    cy.url().should('eq', 'https://consumersenergymanagement.ca/')
  })
  it('verify clicking on Home tab', () => {
    
    cy.clickOnHomeTab()
  })
  it('verify clicking on About tab', () => {
    
    cy.clickOnAboutTab()

  })
  it('verify clicking on Products tab', () => {
    
    cy.clickOnProductsTab()

  })
  it('verify clicking on Services tab', () => {
    
    cy.clickOnServicesTab()

  })
  it('verify clicking on Tools tab', () => {
    
    cy.clickOnToolsTab()

  })
  it('verify clicking on Promotions tab', () => {
    
    cy.clickOnPromotionsTab()

  })
  it('verify clicking on Careers tab', () => {
    
    cy.clickOnCareersTab()

  })
  it('verify clicking on Blog tab', () => {
    
    cy.clickOnBlogTab()

  })
  it('verify clicking on FAQs tab', () => {
    
    cy.clickOnFAQsTab()

  })
  it('verify clicking on Contact tab', () => {
    
    cy.clickOnContactTab()

  })
})


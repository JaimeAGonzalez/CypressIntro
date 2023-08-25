/// <reference types="Cypress"/>

it.only("Categories query", ()=> {
  // Get categories
  cy.visit("https://reverb.com/")
  cy.get(".reverb-header__logo").should("be.visible")
  cy.get(".category-flyout-header__view-more").trigger('mouseover')
  cy.get(".header-dropdown__contents > button:nth-child(1)").should('be.visible')
  
  // Guitar categories
  cy.get(".header-dropdown__contents > button:nth-child(1)").click()
  cy.get("#category-header-guitars").should('have.text', 'Guitars')
  cy.get(".category-flyout__subhead a[href='/c/electric-guitars/']").trigger('mouseover')
  cy.get(".category-flyout__subhead a[href='/c/electric-guitars/']").click
  
  // Electric guitars
  cy.visit("https://reverb.com/c/electric-guitars/")
  cy.get(".cms-centered-page-head__title").should('include.text', 'Electric')

})



/// <reference types="Cypress"/>

it.only("Electric Guitar selection", ()=> {
  // elements
  const desireField = 'Electric'
  const randomElement = Math.floor(Math.random() * 11)

  // Electric guitars
  cy.visit("https://reverb.com/c/electric-guitars/")
  cy.get(".cms-centered-page-head__title").should('include.text', desireField)
  
  // Choose
  cy.get(".csp-square-card__titleblock").then(element => {
    cy.wrap(element).should("include.text", desireField)
})

  // Chose random one
  cy.get(".csp-square-card__titleblock").eq(randomElement).click()
  cy.get(".csp2-header__image").should('be.visible')
  cy.get("span[itemprop='name']").first().should('contain.text', desireField)
}
)

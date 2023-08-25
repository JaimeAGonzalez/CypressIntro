/// <reference types="Cypress"/>

it.only("Electric Guitar selection", ()=> {
  const desireField = 'Fender'

  // Electric guitars
  cy.visit("https://reverb.com/c/electric-guitars/")
  cy.get(".cms-centered-page-head__title").should('include.text', 'Electric')
  
  // Chose solid type of elctric guitar
  cy.get(".cms-facet__link[href='/c/electric-guitars/solid-body'] > div:nth-child(2)").first().invoke("text")
  .then(text => {
    expect(text).to.equal("Solid Body")
  })
  cy.get(".cms-facet__link[href='/c/electric-guitars/solid-body']").first().click()

  // See more guitars
  cy.get(".overflowing-row__control.overflowing-row__control--right").first().click()
  cy.get(".csp-square-card__titleblock").eq(10).invoke("text")
  .then(text => {
    expect(text).to.equal("Fender Limited Edition Tom DeLonge Signature StratocasterElectric GuitarsSolid Body")
})

  // Choose
  cy.get(".csp-square-card__titleblock").eq(10).click()
  cy.get(".csp2-header__title").should('include.text', desireField)
  cy.url().should("eq", "https://reverb.com/p/fender-limited-edition-tom-delonge-signature-stratocaster")
}
)

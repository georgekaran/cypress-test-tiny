/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('Kitchen Sink').should('be.visible');

    cy.document().selectFile('example.json');
  })
})

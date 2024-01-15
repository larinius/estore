describe('Home page title is correct', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').contains('Product Catalog')
  })
})
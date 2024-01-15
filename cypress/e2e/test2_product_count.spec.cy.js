describe('Product Grid Count', () => {
  it('ensures the count of items with class "products-grid"', () => {
    cy.visit('/')

    cy.get('.products-grid').should('be.visible')

    cy.get('.product-item').should('have.length', 6)
  })
})



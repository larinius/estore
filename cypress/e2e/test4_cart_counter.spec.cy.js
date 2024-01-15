describe('Count Products in Cart', () => {
  it('selects the first 3 products and checks the cart counter and products in cart', () => {
    cy.visit('/')
    cy.get('.products-grid').should('be.visible')
    
    const limit = 3;

    for (let i = 0; i < limit; i++) {
      cy.get('.product-item').eq(i).click()
      cy.get('.product-card').should('be.visible')
      cy.get('.add-to-cart-btn').should('be.visible').click()
      cy.go('back')
    }

    cy.get('.cart-products-count').should('have.text', `${limit}` );

    cy.get('.cart-icon').click()
    
    cy.get('h1').should('include.text', 'Cart')

    cy.get(".product-item").should('have.length', limit)
  });
});

describe('Product page is opens, add to cart text is correct', () => {
  it('checks the product page', () => {
    cy.visit('/')
    cy.get('.products-grid').should('be.visible')
    const product = cy.get('.product-item').first()
    product.should('be.visible')
    product.click()
    cy.get('.product-card').should('be.visible')
    cy.get('h1').should('include.text', 'Fjallraven')
    
    
    const addToCartBtn = cy.get('.add-to-cart-btn')
    addToCartBtn.should('be.visible')

    addToCartBtn.then((button) => {
      const buttonText = button.text().trim().toLowerCase();
      expect(buttonText).to.include('add to cart');
    });

    addToCartBtn.click()
    cy.wait(1000)

    addToCartBtn.then((button) => {
      const buttonText = button.text().trim().toLowerCase();
      expect(buttonText).to.include('in cart');
    });

  })
})

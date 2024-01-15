describe('Submit Chekout', () => {
  it('add a product to the cart, and submit order', () => {
    cy.visit('/product/1')
    cy.get('.add-to-cart-btn').should('be.visible').click()
    cy.get('.cart-icon').click() 
    cy.get('h1').should('include.text', 'Cart')
    cy.get('.product-item').should('have.length', "1")
    cy.get('.proceed-to-checkout-btn').click()
    cy.get('h1').should('include.text', 'Checkout')

    cy.get('[name="firstName"]').type('John')
    cy.get('[name="lastName"]').type('Smith')
    cy.get('[name="email"]').type('john.smith@example.com')
    cy.get('[name="phone"]').type('+380981234567')

    cy.get('.submit-order-btn').click()

    cy.wait(3000)

    cy.get('h1').should('include.text', 'Thank You for the purchase!')

  });
});

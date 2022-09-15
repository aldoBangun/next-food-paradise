describe('Navigation Add Recipe', () => {
  it('should navigate to the  page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="/recipe/add"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/recipe/add')

    // The new page should contain an h1 with "About page"
    cy.get('h2').contains('Add Your Recipe')
  })
})
describe('Test Authentication', () => {
  it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    const { email, password } = {
      email: Cypress.env('email'),
      password: Cypress.env('password'),
    };

    cy.visit('http://localhost:3000/login');

    cy.get('input[name=Email]').type(email);

    // {enter} causes the form to submit
    cy.get('input[name=Password]').type(`${password}{enter}`);

    // we should be redirected to /home
    cy.url().should('include', 'http://localhost:3000/');

    // our auth cookie should be present
    cy.getCookies().should('exist');

    // UI should reflect this user being logged in
    cy.get('h1').should('contain', 'logged in');
  });
});

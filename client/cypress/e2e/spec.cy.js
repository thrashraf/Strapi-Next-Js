describe('visit homepage', () => {
  it('visit the homepage', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('Navigate to details page', () => {
  it('clicks the link', () => {
    cy.visit('http://localhost:3000');

    cy.contains(
      'How to design a product that can grow itself 10x in year'
    ).click();
  });
});

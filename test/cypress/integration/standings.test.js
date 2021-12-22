describe('Standings page tests', () => {
  it('should show standings for years provided', () => {
    cy.intercept('GET', '/auth/token/verify', {
      statusCode: 200
    });
    cy.visit('/');
    cy.visit('/standings');
    dataCyRadio('standings-options-group').first().should('be.checked');
  });
});

function dataCyRadio(dataCyId) {
  return cy.dataCy(dataCyId).then(($quasarRadio) => {
    return cy.get('input:radio', {
      withinSubject: $quasarRadio,
    });
  });
}
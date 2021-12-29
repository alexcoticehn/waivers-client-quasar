describe('Standings page tests', () => {
  it('should show standings for years provided', () => {
    cy.intercept('GET', '/auth/token/verify', {
      statusCode: 200
    });
    cy.intercept('GET', 'jailors/api/standings', {
      fixture: 'standings.json'
    })
    cy.intercept('GET', 'jailors/api/teams', {
      fixture: 'teams.json'
    })
    cy.visit('/');
    cy.dataCy('menu-toggle').click();
    cy.dataCy('standings-menu-link').click();
    dataCyRadio('standings-options-group').first().should('be.checked');
    cy.dataCy('yearly-standings-table').should('be.visible');
    cy.dataCy('aggregate-standings-table').should('not.exist');
    dataCyRadio('standings-options-group').check('aggregate', { force: true });
    cy.dataCy('yearly-standings-table').should('not.exist');
    cy.dataCy('aggregate-standings-table').should('be.visible');
  });
});

function dataCyRadio(dataCyId) {
  return cy.dataCy(dataCyId).then(($quasarRadio) => {
    return cy.get('input:radio', {
      withinSubject: $quasarRadio,
    });
  });
}
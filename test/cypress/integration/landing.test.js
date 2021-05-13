// <reference path="cypress" />
/// <reference path="../support/index.d.ts" />

// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project
describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show correct title', () => {
    cy.title().should('include', "Sailor Jerry's");
  });

  it('should login successfully', () => {
    cy.intercept('POST', '/users/login', {
      statusCode: 200
    });
    cy.get('[data-cy=username-input]')
      .type('acoticehn');
    cy.get('[data-cy=password-input]')
      .type('password');
    cy.get('[data-cy=login-form]')
      .submit();
    cy.url().should('eql', Cypress.config().baseUrl + 'roster');
  });

  it(('should reject failed login'), () => {
    cy.intercept('POST', '/users/login', {
      statusCode: 401,
      body: {
        errors: {
          message: 'Login failed'
        }
      }
    })
    cy.get('[data-cy=username-input]')
      .type('acoticehn');
    cy.get('[data-cy=password-input]')
      .type('password');
    cy.get('[data-cy=login-form]')
      .submit();
    cy.url().should('eql', Cypress.config().baseUrl);
  });
});

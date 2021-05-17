// <reference path="cypress" />
/// <reference path="../support/index.d.ts" />

describe('Manual login tests', () => {
  beforeEach(() => {
    cy.visit('/');
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
    });
    cy.get('[data-cy=username-input]')
      .type('acoticehn');
    cy.get('[data-cy=password-input]')
      .type('password');
    cy.get('[data-cy=login-form]')
      .submit();
    cy.url().should('eql', Cypress.config().baseUrl);
  });
});

describe('Auto Login', () => {
  it(('should automatically log user in'), () => {
    cy.intercept('GET', '/auth/token/verify', {
      statusCode: 200
    });
    cy.visit('/');
    cy.url().should('eql', Cypress.config().baseUrl + 'roster');
  })
});

describe('Forgot Password Link', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it(('should take user to forgot password page'), () => {
    cy.get('[data-cy=forgot-password-link]').click();
    cy.url().should('eql', Cypress.config().baseUrl + 'forgot');
  })
})

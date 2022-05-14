describe('Password Reset Tests', () => {
    it('should successfully redirect to roster page after reset', () => {
        cy.intercept('POST', '/users/reset/verify', {
            statusCode: 200
        });
        cy.intercept('PATCH', '/users/reset/confirm', {
            statusCode: 200
        });
        cy.visit('/reset/123');
        cy.get('[data-cy=password-input]').each(($el) => {
            cy.wrap($el).type('new_password');
        })
        cy.get('[data-cy=reset-password-form]')
          .submit();
        cy.url().should('eql', Cypress.config().baseUrl + 'roster');
    });

    it('should stay on same page if reset fails', () => {
        cy.intercept('POST', '/users/reset/verify', {
            statusCode: 200
        });
        cy.intercept('PATCH', '/users/reset/confirm', {
            statusCode: 401
        });
        cy.visit('/reset/123');
        cy.get('[data-cy=password-input]').each(($el) => {
            cy.wrap($el).type('new_password');
        })
        cy.get('[data-cy=reset-password-form]')
          .submit();
        cy.url().should('eql', Cypress.config().baseUrl + 'reset/123');
    });

    it('should redirect to landing page if link invalid', () => {
        cy.intercept('POST', '/users/reset/verify', {
            statusCode: 401
        });
        cy.intercept('GET', '/auth/token/verify', {
            statusCode: 404
        });
        cy.visit('/reset/123');
        cy.url().should('eql', Cypress.config().baseUrl);
    });

})
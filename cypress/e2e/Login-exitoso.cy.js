describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://staging.fortesza.com/login')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#txt-email-or-user').clear('erasmotorres09@gmail.com');
    cy.get('#txt-email-or-user').type('erasmotorres09@gmail.com');
    cy.get('#txt-password').clear('esFortesza21*');
    cy.get('#txt-password').type('esFortesza21*');
    cy.get('.mat-button-wrapper').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-menu-trigger > .md').click();
    cy.get(':nth-child(8) > .mat-focus-indicator').click();
    /* ==== End Cypress Studio ==== */
  })
})
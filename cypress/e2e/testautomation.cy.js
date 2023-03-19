describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://staging.fortesza.com/register')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.text-session > .cursor').click();
    cy.get('#txt-email-or-user').clear('erasmotorres09@gmail.com');
    cy.get('#txt-email-or-user').type('erasmotorres09@gmail.com');
    cy.get('#txt-password').clear();
    cy.get('#txt-password').type('esFortesza21*');
    cy.get('#txt-password').click();
    cy.get('#btn-sign-in-page').click();
    cy.wait(60000)
    cy.get('.mat-menu-trigger > .md').click();
    cy.get(':nth-child(2) > .mat-focus-indicator').click();
    cy.get('.mat-button-wrapper > :nth-child(2)').click();
    cy.wait(60000)
    cy.get('[ng-reflect-router-link="/dashboard/user-profile"] > span').click();
    cy.wait(50000)
    cy.get('app-contact.ng-star-inserted').click();
    cy.get('#mat-input-5').clear();
    cy.get('#mat-input-5').type('Sonia');
    cy.get('#mat-input-6').clear();
    cy.get('#mat-input-6').type('Suarez');
    cy.get('#mat-input-7').clear();
    cy.get('#mat-input-7').type('3123016932');
    cy.get('[fxlayoutalign="center"] > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('[fxlayoutalign="center"] > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('.mat-button-wrapper > :nth-child(2)').click();
    cy.get('.mat-menu-content > :nth-child(4) > span').click();
    /* ==== End Cypress Studio ==== */
  })
})
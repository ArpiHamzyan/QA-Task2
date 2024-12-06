describe('Login Test Suite', () => {
    it('Login', () => {
        cy.visit('https://playground.testingart.com');
        cy.login();
    
        cy.url().should('eq', 'https://playground.testingart.com/');

        cy.get('#root > div:nth-child(2) > div.MuiBox-root.css-1j64xyi > h1')
          .should('be.visible')
          .and('contain', 'Welcome'); 

        cy.get('h1').then(($header) => {
            expect($header.text()).to.include('Welcome to Automation Testing Playground');
        });

        cy.contains('Logout').should('be.visible');
    });

});

describe('Login Test Suite', () => {
    const url = 'https://the-internet.herokuapp.com/login';
    const validUsername = 'tomsmith';
    const validPassword = 'SuperSecretPassword!';
    const invalidUsername = 'invalidUser';

    before(() => {
        cy.log('**Before Hook: Setting up the test suite**');
    });

    beforeEach(() => {
        cy.log('**BeforeEach Hook: Navigating to login page**');
        cy.visit(url);
    });

    afterEach(() => {
        cy.log('**AfterEach Hook: Cleaning up after the test**');
    });

    after(() => {
        cy.log('**After Hook: Test suite execution completed**');
    });

    it('should log in successfully with valid credentials', () => {
        cy.log('**Test Case 1: Logging in with valid credentials**');

        cy.wait(2000);

        cy.get('#username').type(validUsername);

        cy.wait(2000);

        cy.get('#password').type(validPassword);

        cy.wait(2000);

        cy.get('button[type="submit"]').click();

        cy.wait(2000);

        cy.get('#content > div').should('be.visible').then(() => {
            cy.log('Successfully entered the page!');
        });

        cy.wait(2000);
    });

    it('should display an error message for invalid username', () => {
        cy.log('**Test Case 2: Attempting login with invalid username**');

        cy.get('#username').type(invalidUsername);

        cy.wait(2000);

        cy.get('#password').type(validPassword);

        cy.wait(2000);

        cy.get('button[type="submit"]').click();

        cy.wait(2000);

        cy.get('.flash.error').should('be.visible').and('contain.text', 'Your username is invalid!');

        cy.wait(2000);

        cy.log('Error message displayed for invalid login attempt.');

        cy.wait(2000);
    });
});

describe('Fetch POC', () => {
    it('click button', () => {
        cy.visit('http://localhost:3000/');
        cy.get('button').click();
        cy.contains('OK');
    });
})
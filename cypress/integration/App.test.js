describe('<App/>', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('Renders without crashing', () => {
        cy.get('h1').contains('React To Do');
    });

    describe('The default UI', () => {
        it('Renders two default todo items', () => {
            cy.get('.ToDoItem').should('have.length', 2);
        });

        it('Has an input field', () => {
            cy.get('input').should('have.length', 1);
        });

        it('Has an add button', () => {
            cy.get('.ToDo-Add').should('have.length', 1);
        });
    });

    describe('Adding items', () => {
        it('When the add button is pressed, if the input field is empty, prevent item from being added', () => {
            cy.get('.ToDo-Add').click();
        });

        it('When the add button is pressed, if the input field has text, it creates a new todo item', () => {
            cy.get('input')
                .type('Create more tests')
                .should('have.value', 'Create more tests');
            cy.get('.ToDo-Add').click();
            cy.get('.ToDoItem').should('have.length', 3);
        });
    });

    describe('Deleting items', () => {
        it('When the delete button is pressed for the first todo item, it removes the entire item', () => {
            cy.get(':nth-child(1) > .ToDoItem-Delete').click();
        });
        it('means that because the first toDoItem was deleted, the first toDoItem should now be buy milk', () => {
            cy.get(':nth-child(1) > .ToDoItem').contains('buy milk');
        });
    });
});

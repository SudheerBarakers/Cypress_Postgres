describe('Cypress with Postgres', () => {

    it('Database Test', () => {

        cy.task("SqlQueryPS", "select * from employee").then((res) => {
            console.log(res)
        })

    })

})
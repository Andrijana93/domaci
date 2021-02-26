
describe("Loign negativ test", () => {
    it('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('Click on login button', () => {
        cy.get("a[href='/login']").click()
    })
    
    it('Login without password', () => {
        cy.get('#email').type('strgulc.andrijana@gmail.com')
        cy.get('#password').type()
        cy.get('button').click()
    })
    
    it('Login with incorrect email', () => {
        cy.get('#email').clear().type('strgul.andrijana@gmail.com')
        cy.get('#password').clear().type('andrijana93')
        cy.get('button').click()
    })

    it('Login with incorrect email type', () => {
        cy.get('#email').clear().type('strgul.andrijanagmail.com')
        cy.get('#password').clear().type('andrijana93')
        cy.get('button').click()
    })

    it('Login with incorrect password less than 8 characters', () => {
        cy.get('#email').clear().type('strgulc.andrijana@gmail.com')
        cy.get('#password').clear().type('andr93')
        cy.get('button').click()
    })

    it('Login with incorrect password, 8 characters but no numbers ', () => {
        cy.get('#email').clear().type('strgulc.andrijana@gmail.com')
        cy.get('#password').clear().type('andrijana')
        cy.get('button').click()
    })

    })

   
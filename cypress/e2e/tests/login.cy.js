import Login from '../pageObjects/loginModule/login'
//import Homepage from '.cypress/integration/pageObjects/hompage/homepage'
const unique_id = Math.floor(Math.random() * 999999);
const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
beforeEach(function () {

    cy.fixture('config').as('config')

})

describe('login-test cases', () => {
    const register1 = new Login()

    it("Verify user is not able to login if email and password not provided", function () {
        cy.visit('/')
        register1.visit_homepage_and_close_popup()
        register1.login_btn().click()
        register1.submit_btn().click()
            cy.wait(10000)
        cy.contains("Email is required")
    })
    it("Verify user is not able to login if email not provided", function () {
        cy.visit('/')
        register1.visit_homepage_and_close_popup()
        register1.login_btn().click()
        register1.password().type(this.config.password)
            register1.submit_btn().click()
            cy.wait(10000)
        cy.contains("Email is required")
    })
    it("Verify user is not able to login if password not provided", function () {
        cy.visit('/')
        register1.visit_homepage_and_close_popup()
        register1.login_btn().click()
        register1.email().type(newUserEmail)
            register1.submit_btn().click()
            cy.wait(10000)
        cy.contains("Password is required")
    })
    it("Verify user is not able to login with wrong email", function () {
        cy.visit('/')
        register1.visit_homepage_and_close_popup()
        register1.login_btn().click()
        register1.email().type('wrong' + this.config.email)
        register1.password().type(this.config.password)
        register1.submit_btn().click()
        register1.auth_error().should('be.visible')
        register1.logout_btn().should('not.exist')
    })
    it("Verify user is not able to login with wrong password", function () {
        cy.visit('/')
        register1.visit_homepage_and_close_popup()
        register1.login_btn().click()
        register1.email().type('wrong' + this.config.email)
        register1.password().type(this.config.password)
         register1.submit_btn().click()
        register1.auth_error().should('be.visible')
        register1.logout_btn().should('not.exist')

    })
    it("verify new user is able to login with Email and password", function () {

        Cypress.env('newUserEmail', newUserEmail)

        cy.visit('/')

        cy.fixture('config').then((config) => {
            register1.visit_homepage_and_close_popup()
            cy.wait(2000)
            register1.login_btn().click()
            cy.wait(3000)
            register1.email().type(this.config.email)
            register1.password().type(this.config.password)
            register1.submit_btn().click()
            cy.wait(17000)
            register1.logout_btn().should('be.visible')
            cy.wait(3000)

        })

    })
    })
    //test comment
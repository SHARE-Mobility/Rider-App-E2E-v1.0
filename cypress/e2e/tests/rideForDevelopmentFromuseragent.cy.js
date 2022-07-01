/*import login from '../pageObjects/loginModule/login'

let userID = 0
let userAgentID = 0
let userAgentEmail = ""
let developmentUserEmail = ""

describe("Test Useragent creation", function () {
    const log = new login()

    before("Create a user for Developement", () => {

        let identifier = Math.floor(Math.random() * 999999);
        developmentUserEmail = "ridewithsharetest+" + identifier + "@gmail.com"
        cy.log("User email generated: " + developmentUserEmail)
        cy.createUserAgent(developmentUserEmail, Cypress.env('role_user'), Cypress.env('Development_ID'))
        cy.getUserIDByEmail(developmentUserEmail)
        userID = Cypress.env('userID')
        cy.log("User created with ID for development: " + userID)
    })


    it("Create new user agent for Development", function () {
        const unique_id = Math.floor(Math.random() * 999999)
        userAgentEmail = "useragent+" + unique_id + "@gmail.com"
        cy.log("User Agent email for developement: " + userAgentEmail)
        cy.createUserAgent(userAgentEmail, Cypress.env('role_user_agent'),
            Cypress.env('Development_ID'), [Cypress.env('userID')])

        cy.log("ID:" + cy.getUserIDByEmail(userAgentEmail))
        cy.log("ID:" + Cypress.env('userID'))
        userAgentID = Cypress.env('userID')
        cy.log("User Agent created with ID for developement: " + userAgentID)
    })

    // it("Create a one way trip ride from user Agent", function () {
    //     log.visit_homepage_and_close_popup()

    //     cy.login(userAgentEmail, "test")
    //     cy.wait(3000)

    //     cy.Ride("Pickup-Automation", "Dropoff-Automation", false)
    // })


    // it("Create a complete round trip ride from user Agent", function () {
    //     log.visit_homepage_and_close_popup()

    //     cy.login(userAgentEmail, "test")
    //     cy.wait(3000)

    //     cy.Ride("Pickup-Automation", "Dropoff-Automation", true)
    // })


    it("Create a complete round trip ride with PROMO CODE from user Agent", function () {
        log.visit_homepage_and_close_popup()

        cy.login(userAgentEmail, "test")
        cy.wait(3000)

        if (!Cypress.env("isProd")) {
           cy.addCreditCardInProfile() 
            cy.Ride("Pickup-Automation", "Dropoff-Automation", true, "DEVP")
        }
    })


    it("Create a one way trip ride with PROMO CODE from user Agent", function () {
        log.visit_homepage_and_close_popup()

        cy.login(userAgentEmail, "test")
        cy.wait(3000)

        if (!Cypress.env("isProd")) {
            cy.addCreditCardInProfile() 
            cy.Ride("Pickup-Automation", "Dropoff-Automation", false, "DEVP")
        }
    })


    it("delete development user agent and user", () => {
        cy.deleteUserbyID(developmentUserEmail)
        cy.log("Development User deleted having id " + developmentUserEmail)
        cy.deleteUserbyID(userAgentEmail)
        cy.log("Development User Agent deleted having id" + userAgentEmail)

    })
})*/
/*import login from '../pageObjects/loginModule/login'
import LandingScreen from '../pageObjects/loginModule/landingScreen'

let userID = 0
let userAgentID = 0
let userAgentEmail = ""
let userEmail = ""

beforeEach(function () {

    cy.fixture('config').as('config')

})

describe("Test Useragent creation", function () {
    const log = new login()
    before("Create a user for hillard Senior", () => {

        let unique_id = Math.floor(Math.random() * 999999);
        userEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
        cy.log("User email: " + userEmail)
        cy.createUserAgent(userEmail, Cypress.env('role_user'), Cypress.env('Dublin_Senior'))
        cy.getUserIDByEmail(userEmail)
        userID = Cypress.env('userID')
        cy.log("User created with ID: " + userID)
    })


    it("Create new user agent for Dublin senior", function () {
        const unique_id = Math.floor(Math.random() * 999999)
        userAgentEmail = "useragent+" + unique_id + "@gmail.com"
        cy.log("email: " + userAgentEmail)
        cy.createUserAgent(userAgentEmail, Cypress.env('role_user_agent'),
            Cypress.env('Dublin_Senior'), [Cypress.env('userID')])

        cy.log("ID:" + cy.getUserIDByEmail(userAgentEmail))
        cy.log("ID:" + Cypress.env('userID'))
        userAgentID = Cypress.env('userID')
        cy.log("User Agent created with ID: " + userAgentID)
    })
    it("Create a complete round trip ride from user Agent", function () {
        log.visit_homepage_and_close_popup()

        cy.login(userAgentEmail, "test")
        cy.wait(3000)
        cy.Ride("Pickup-Automation", "Dropoff-Automation", true)
    })
    it("Create a one way trip ride from user Agent", function () {
        log.visit_homepage_and_close_popup()

        cy.login(userAgentEmail, "test")
        cy.wait(3000)
        cy.Ride("Pickup-Automation", "Dropoff-Automation", false)
    })

    it("delete user agent and user", () => {
        cy.deleteUserbyID(userEmail)
        cy.log("User deleted")
        cy.deleteUserbyID(userAgentEmail)
        cy.log("User Agent deleted")

    })
})*/
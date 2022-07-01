/*import Login from '../pageObjects/loginModule/login'
import LandingScreen from '../pageObjects/loginModule/landingScreen'

beforeEach(function () {

    cy.fixture('config').as('config')
})

describe("Landing Screen Test Cases", function () {
    const log = new Login()
    const land = new LandingScreen()
    it("Verify user is able see/swiple pop up", function () {
        //Open website
        cy.visit('/')
        cy.wait(7000)
        // land.swipe_screen1().should('be.visible')
        // land.swipe_right().click()
        // land.swipe_screen2().should('be.visible')
        // cy.wait(2000)
        // land.swipe_right().click()
        // land.swipe_screen3().should('be.visible')
        // cy.wait(2000)
        // land.swipe_right().click()
        // land.create_account_btn().should('be.visible')
        land.close_popup_btn().click()

    })
    it("Verify user is able to see destination, pickup, date and time fields", function () {

        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
              cy.wait(2000)
            }
          });
        land.pickup().should('be.visible')
        land.destination().should('be.visible')
        land.date().should('be.visible')
        land.time().should('be.visible')

    })

})*/
/// <refernce types="cypress"/>
//import selfRide from '../pageObjects/profile/Selfpaidride'
/*import LandingScreen from '../pageObjects/loginModule/landingScreen'
import login from '../pageObjects/loginModule/login'
import Homepage from '../pageObjects/hompage/homepage'
import signup from '../pageObjects/loginModule/Signup'
//import selfpaid from '../pageObjects/selfpaid'



beforeEach(function () {
    cy.fixture('config').as('config')
})
describe("Verify Selfpaid Ride", function () {
    const log = new login()
    const land = new LandingScreen()
    const homepage = new Homepage()
    const register = new signup()
    var password = "test"
    let emailToCheck = ""
    it("complete a one way ride for using card", function () {
        var getCurrentDay = (new Date().getDate()) + 1;
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
          if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
            land.close_popup_btn().click()
            cy.wait(2000)
          }
        });
        cy.wait(3000)
        cy.login(Cypress.env('newUserEmail'), this.config.password)
        // cy.login(Cypress.env('newUserEmail'), this.config.password)
        cy.wait(3000)
    
        register.profile().should('be.visible').click()
    
        cy.get('body').then((body) => {
          if (body.find('[data-cy=organizations-dropdown]').length == 0) {
            register.profile().should('be.visible').click()
            cy.wait(2000)
          }
        });
    
        register.organization_dropdown().click().then(() => {
          cy.contains("[role=option]", Cypress.env("Dublin_Seniorr_Org_Name")).click()
          register.organization_dropdown().should("contain.text", Cypress.env("Dublin_Seniorr_Org_Name"))
          cy.get('body').then((body) => {
            if (body.find('#accept-btn').length > 0) {
              cy.get('#accept-btn').click();
              cy.wait(4000)
            }
          });
          homepage.homepage_logo().should("be.visible").click()
          cy.wait(3000)
        })
        cy.Ride("Pickup-Automation", "Dropoff-Automation", false)
      })
    
    
      /*it("complete a round trip  using card ", function () {
        var getCurrentDay = (new Date().getDate()) + 1;
    
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
          if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
            land.close_popup_btn().click()
            cy.wait(2000)
          }
        });
        cy.wait(3000)
        cy.login(Cypress.env('newUserEmail'), this.config.password)
        cy.wait(3000)
        register.profile().should('be.visible').click()
        cy.wait(2000)

        register.organization_dropdown().click().then(() => {
          cy.contains("[role=option]", Cypress.env("Dublin_Seniorr_Org_Name")).click()
          register.organization_dropdown().should("contain.text", Cypress.env("Dublin_Seniorr_Org_Name"))
          cy.get('body').then((body) => {
            if (body.find('#accept-btn').length > 0) {
              cy.get('#accept-btn').click();
            }
          });
          homepage.homepage_logo().should("be.visible").click()
          cy.wait(3000)
        })
        cy.Ride("Pickup-Automation", "Dropoff-Automation", true)
        
      })*/



//})




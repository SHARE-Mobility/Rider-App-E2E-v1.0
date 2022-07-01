/// <refernce types="cypress"/>
//import selfRide from '../pageObjects/profile/Selfpaidride'
/*import LandingScreen from '../pageObjects/loginModule/landingScreen'
import login from '../pageObjects/loginModule/login'
//import Login from '../pageObjects/loginModule/login'
import Homepage from '../pageObjects/hompage/homepage'
import signup from '../pageObjects/loginModule/Signup'
import selfpaid from '../pageObjects/selfpaid'
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
    it("complete a one way ride using card", function () {
      cy.visit("/")
        var getCurrentDay = (new Date().getDate()) + 1;
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
          if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
            land.close_popup_btn().click()
            cy.wait(2000)
          }
        });
        cy.wait(3000)
        cy.login(this.config.email, this.config.password)
        cy.wait(7000)
          //homepage.homepage_logo().should("be.visible").click()
          cy.wait(10000)
        cy.Ride("Pickup-Automation", "Dropoff-Automation",selfpaid, false)
        cy.wait (7000)
        homepage.homepage_logo().should("be.visible").click()
      })
        it("complete a round trip using card ", function () {
        var getCurrentDay = (new Date().getDate()) + 1;
        cy.visit("/")
        var getCurrentDay = (new Date().getDate()) + 1;
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
          if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
            land.close_popup_btn().click()
            cy.wait(2000)
          }
          cy.wait(3000)
        cy.login(this.config.email, this.config.password)
        cy.wait(7000)
          //homepage.homepage_logo().should("be.visible").click()
          cy.wait(3000)
        });
        cy.Ride("Pickup-Automation", "Dropoff-Automation", true)
        cy.wait(7000)
        homepage.homepage_logo().should("be.visible").click()
        /*log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
          if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
            land.close_popup_btn().click()
            cy.wait(2000)
          }
        });
        cy.wait(3000)
        cy.login(this.config.email, this.config.password)
        cy.wait(4000)
        homepage.homepage_logo().should("be.visible").click()
        cy.wait(3000)
         homepage.homepage_logo().should("be.visible").click()
          cy.wait(3000)
          homepage.pickup_address().click()
           cy.wait(2000)
          triprequest.pickup_address().type("PickupAutomation")
            cy.wait(500)
            homepage.pickup_address().type("{downarrow}{enter}")
            homepage.destination_address()().click()
            cy.wait(2000)
             homepage.destination_address().type("Dropof")
              cy.wait(500)
              homepage.dropoffLocation().type("{enter}")
              homepage.date().should("be.visible").click()
              cy.wait(2000)
  // homepage.date_value(getCurrentDay).should("be.visible").first().click()
              cy.get('body').then((body) => {
              if (body.find('.rdtToday').length == 0) {
                homepage.date().should("be.visible").click()
              cy.wait(2000)
    }
  });
              homepage.date_value_enabled().should("be.visible").first().click()

              cy.get('body').then((body) => {
              if (body.find('[data-cy="depart-time-input"]').length > 0) {
      cy.get('[data-cy="depart-time-input"]').click();
    } else {
      homepage.pickup_time().should("be.visible").click()
      homepage.select_dropdown_value(1).should("be.visible").click()
    }

  });


        
      })
})
*/



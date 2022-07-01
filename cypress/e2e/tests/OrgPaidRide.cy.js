/*import LandingScreen from '../pageObjects/loginModule/landingScreen'
import login from '../pageObjects/loginModule/login'
import Homepage from '../pageObjects/hompage/homepage'
import signup from '../pageObjects/loginModule/Signup'


beforeEach(function () {
  cy.fixture('config').as('config')
})

describe("Hillard Organization Paid Ride Test Cases", function () {
  const log = new login()
  const land = new LandingScreen()
  const homepage = new Homepage()
  const register = new signup()
  var password = "test"
  let emailToCheck = ""

  before(function () {
    // if (Cypress.env("Invitation_accepted") == false) {
    //accept invitation for the company
    cy.log("Invitation not accepted. Make a new user and accepting its invitation")
    cy.visit('/')
    log.visit_homepage_and_close_popup()
    cy.fixture('config').then((config) => {
      const unique_id = Math.floor(Math.random() * 999999)
      const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
      password = config.password
      Cypress.env('newUserEmail', newUserEmail)
      emailToCheck = Cypress.env('newUserEmail')
      //log.visit_homepage_and_close_popup()
      //calls signup from commands.js
      cy.Signup(newUserEmail, config.password)

      if (Cypress.env("isProd")) {
        cy.log("is Production. Call Production API.")
        //gets access token for new user[commands.js]
        cy.getAccessTokenByOrg(Cypress.env("apiProdURL"), Cypress.env("Hilliard_Senior"))

      } else {
        cy.getAccessTokenByOrg(Cypress.env("apiURL"), Cypress.env("Hilliard_Senior"))
      }
    })

    land.logout_btn().should('be.visible').click({ force: true })
    cy.wait(3000)
    // }
  })

  it.only("complete a one way ride for Hilliard Using Organization Paid", function () {
    var getCurrentDay = (new Date().getDate()) + 1;
    cy.visit('/')
    log.visit_homepage_and_close_popup()
    /*cy.get('body').then((body) => {
      if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
        land.close_popup_btn().click()
        cy.wait(2000)
      }*/
   // });
   /* cy.wait(3000)
    cy.login(Cypress.env('newUserEmail'), this.config.password)
    //2654
    cy.wait(9000)
   // cy.get('[data-cy="close-btn"] > .sc-gtssRu > .sc-eGJXgd').click()
    cy.wait(13000)
    register.profile().should('be.visible').click({force:true})
    cy.get('body').then((body) => {
      if (body.find('[data-cy=organizations-dropdown]').length == 0) {
        register.profile().should('be.visible').click()
        cy.wait(2000)
      }
    });
    register.organization_dropdown().click({force:true}).then(() => {
      cy.contains("[role=option]", Cypress.env("Hilliard_Senior_Org_Name")).click()
      register.organization_dropdown().should("contain.text", Cypress.env("Hilliard_Senior_Org_Name"))
      cy.get('body').then((body) => {
        //accepts invitation for new org
        if (body.find('#accept-btn').length > 0) {
          cy.get('#accept-btn').scrollIntoView().click({ force: true });
        }
      });
      homepage.homepage_logo().should("be.visible").click()
      cy.wait(2000)
    })

    //calls ride method from commands.js method
    // Pass promo code as 4th attribute with false for one way ride
    // cy.Ride("1313 Hilliard Rome Rd, Columbus, OH 43228, USA",
    //   "1444 Rentra Drive, Columbus, OH 43228, USA", false)
    cy.Ride("Pickup-Automation", "Dropoff-Automation", false)
  })

  it("complete a round trip for Hilliard Using Organization Paid ", function () {
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
    // // cy.get('body').then((body) => {
    // //   if (body.find('[data-cy=organizations-dropdown]').length == 0) {
    // //     register.profile().should('be.visible').click()
    // //     cy.wait(2000)
    // //   }
    // });
    register.organization_dropdown().click().then(() => {
      cy.contains("[role=option]", Cypress.env("Hilliard_Senior_Org_Name")).click()
      register.organization_dropdown().should("contain.text", Cypress.env("Hilliard_Senior_Org_Name"))
      cy.get('body').then((body) => {
        if (body.find('#accept-btn').length > 0) {
          cy.get('#accept-btn').click();
        }
      });
      homepage.homepage_logo().should("be.visible").click()
      cy.wait(2000)
    })

    //calls ride method from commands.js method
    // Pass promo code as 4th attribute with true for complete ride
    cy.Ride("Pickup-Automation", "Dropoff-Automation", true)

    // cy.Ride("1313 Hilliard Rome Rd, Columbus, OH 43228, USA",
    //   "1444 Rentra Drive, Columbus, OH 43228, USA", true, "TEST")
  })


  after(function () {
    //replace email with unicode for API and then delete user
    emailToCheck = emailToCheck.replace("+", "%2B")
    cy.deleteUserbyID(emailToCheck)

  })
})*/

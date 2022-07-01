/*import LandingScreen from '../pageObjects/loginModule/landingScreen'
import login from '../pageObjects/loginModule/login'
import Homepage from '../pageObjects/hompage/homepage'
import signup from '../pageObjects/loginModule/Signup'



beforeEach(function () {
  cy.fixture('config').as('config')
})

describe("Verify Dublin Senior Ride With Points", function () {
  const log = new login()
  const land = new LandingScreen()
  const homepage = new Homepage()
  const register = new signup()
  var password = "test"
  let emailToCheck = ""

  // before(function () {
  //     if (Cypress.env("Invitation_accepted") == false) {
  //         //accept invitation for the company
  //         cy.log("Invitation not accepted. Make a new user and accepting its invitation")
  //         cy.fixture('config').then((config) => {
  //             const unique_id = Math.floor(Math.random() * 999999)
  //             const newUserEmail = unique_id + config.email
  //             password = config.password
  //             Cypress.env('newUserEmail', newUserEmail)
  //             log.visit_homepage_and_close_popup()
  //             cy.Signup(newUserEmail, config.password)
  //             cy.getAccessTokenByOrg(Cypress.env("Dublin_Senior"))
  //         })

  //         land.logout_btn().should('be.visible').click()
  //     }
  // })

  before(function () {
    // if (Cypress.env("Invitation_accepted") == false) {
    //accept invitation for the company

    cy.log("Invitation not accepted. Make a new user and accepting its invitation")
    log.visit_homepage_and_close_popup()
    cy.fixture('config').then((config) => {
      const unique_id = Math.floor(Math.random() * 999999)
      const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
      password = config.password
      Cypress.env('newUserEmail', newUserEmail)
      emailToCheck = Cypress.env('newUserEmail')
      log.visit_homepage_and_close_popup()
      //calls signup from commands.js
      cy.Signup(newUserEmail, config.password)

      if (Cypress.env("isProd")) {
        cy.log("is Production. Call Production API.")
        //gets access token for new user[commands.js]
        cy.getAccessTokenByOrg(Cypress.env("apiProdURL"), Cypress.env("Dublin_Senior"))

      } else {
        cy.getAccessTokenByOrg(Cypress.env("apiURL"), Cypress.env("Dublin_Senior"))
      }
    })

    land.logout_btn().should('be.visible').click({ force: true })
    cy.wait(3000)
    // }
  })

  it("complete a one way ride for Dublin Senior using Points", function () {
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


  it("complete a round trip for Dublin Senior using Points", function () {
    var getCurrentDay = (new Date().getDate()) + 1;

    log.visit_homepage_and_close_popup()
    cy.get('body').then((body) => {
      if (body.find('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
        land.close_popup_btn().click()
        cy.wait(2000)
      }
    });
    cy.wait(3000)
    // cy.login("333rfatima9@ridewithshare.com", this.config.password)
    cy.login(Cypress.env('newUserEmail'), this.config.password)
    cy.wait(3000)
    register.profile().should('be.visible').click()
    // cy.get('body').then((body) => {
    //     if (body.find('[data-cy=organizations-dropdown]').length == 0) {
    //         register.profile().should('be.visible').click()
    cy.wait(2000)
    // }

    // });

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
  })


  after(function () {
    //replace email with unicode for API and then delete user
    emailToCheck = emailToCheck.replace("+", "%2B")
    cy.deleteUserbyID(emailToCheck)

  })
})*/
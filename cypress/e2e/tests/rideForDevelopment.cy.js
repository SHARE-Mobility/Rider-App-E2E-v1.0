// import LandingScreen from '../pageObjects/loginModule/landingScreen'
// import login from '../pageObjects/loginModule/login'
// import Homepage from '../pageObjects/hompage/homepage'
// import signup from '../pageObjects/loginModule/Signup'


// beforeEach(function () {
//   cy.fixture('config').as('config')
// })

// describe("Ride Test Cases for Development", function () {
//   const log = new login()
//   const land = new LandingScreen()
//   const homepage = new Homepage()
//   const register = new signup()
//   let emailToCheck = ""
//   var password = "test"

//   before(function () {
//     // if (Cypress.env("Invitation_accepted") == false) {
//     cy.log("Invitation not accepted. Make a new user and accepting its invitation")
//     cy.fixture('config').then((config) => {
//       const unique_id = Math.floor(Math.random() * 999999)
//       const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
//       password = config.password
//       Cypress.env('newUserEmail', newUserEmail)
//       emailToCheck = Cypress.env('newUserEmail')
//       log.visit_homepage_and_close_popup()
//       // calls signup method from commands.js
//       cy.Signup(newUserEmail, config.password)

//       if (Cypress.env("isProd")) {
//         // assign the access token to new user based on organization ID provided

//         cy.log("is Production. Call Production API.")
//         cy.getAccessTokenByOrg(Cypress.env("apiProdURL"), Cypress.env("Development_ID"))
//       } else {
//         cy.getAccessTokenByOrg(Cypress.env("apiURL"), Cypress.env("Development_ID"))
//       }
//     })

//     land.logout_btn().should('be.visible').click({ force: true })
//     cy.wait(3000)
//     // }
//   })

//   it.only("complete a one way ride for Development", function () {
//     log.visit_homepage_and_close_popup()
//     // const newUserEmail = "rfatima+5458@ridewithshare.com"
//     // cy.login(newUserEmail, "test")
//     //login from commands.js method

//     cy.login(Cypress.env('newUserEmail'), "test")
//     cy.wait(3000)

//     register.profile().should('be.visible').click()
//     cy.get('body').then((body) => {
//       if (body.find('[data-cy=organizations-dropdown]').length == 0) {
//         register.profile().should('be.visible').click()
//         cy.wait(2000)
//       }
//     });
//     register.organization_dropdown().click().then(() => {
//       cy.contains("[role=option]", Cypress.env("Development_Org_Name")).click()
//       register.organization_dropdown().should("contain.text", Cypress.env("Development_Org_Name"))
//       cy.get('body').then((body) => {
//         //accept invitation from organziation
//         if (body.find('#accept-btn').length > 0) {
//           cy.get('#accept-btn').click();
//         }
//       });
//       homepage.homepage_logo().should("be.visible").click()
//       cy.wait(2000)
//     })
//     // isProd varible defined in config.js based on this parameter it calls prod api's
//     if (!Cypress.env("isProd")) {
//       //calls ride method from commands.js method
//       // False for oneway trip
//       cy.Ride("pickup", "dropoff", false)
//     }
//   })

//   it.only("complete a round trip for Development", function () {
//     log.visit_homepage_and_close_popup()
//     cy.login(Cypress.env('newUserEmail'), "test")
//     cy.wait(3000)

//     register.profile().should('be.visible').click()
//     cy.get('body').then((body) => {
//       if (body.find('[data-cy=organizations-dropdown]').length == 0) {
//         register.profile().should('be.visible').click()
//         cy.wait(2000)
//       }
//     });
//     register.organization_dropdown().click().then(() => {
//       cy.contains("[role=option]", Cypress.env("Development_Org_Name")).click()
//       register.organization_dropdown().should("contain.text", Cypress.env("Development_Org_Name"))
//       cy.get('body').then((body) => {
//         if (body.find('#accept-btn').length > 0) {
//           cy.get('#accept-btn').scrollIntoView().click({ force: true });
//         }
//       });
//       homepage.homepage_logo().should("be.visible").click()
//       cy.wait(2000)
//     })

//     if (!Cypress.env("isProd")) {
//       //calls ride method from commands.js method
//       // true for complete trip
//       cy.Ride("pickup", "dropoff", true)
//     }

//   })


//   it("complete a one way ride for Development with Promo code", function () {
//     log.visit_homepage_and_close_popup()
//     // const newUserEmail = "rfatima+5458@ridewithshare.com"
//     // cy.login(newUserEmail, "test")
//     cy.login(Cypress.env('newUserEmail'), "test")
//     cy.wait(3000)

//     register.profile().should('be.visible').click()
//     cy.get('body').then((body) => {
//       if (body.find('[data-cy=organizations-dropdown]').length == 0) {
//         register.profile().should('be.visible').click()
//         cy.wait(2000)
//       }
//     });
//     register.organization_dropdown().click().then(() => {
//       cy.contains("[role=option]", Cypress.env("Development_Org_Name")).click()
//       register.organization_dropdown().should("contain.text", Cypress.env("Development_Org_Name"))
//       if (!Cypress.env("isProd")) { cy.addCreditCardInProfile() }

//       cy.get('body').then((body) => {
//         if (body.find('#accept-btn').length > 0) {
//           cy.get('#accept-btn').click();
//           //adding payment info
//           if (!Cypress.env("isProd")) { cy.addCreditCardInProfile() }
//         }
//       });
//       homepage.homepage_logo().should("be.visible").click()
//       cy.wait(2000)
//     })
//     if (!Cypress.env("isProd")) {
//       //calls ride method from commands.js method
//       // Pass promo code as 4th attribute
//       cy.Ride("pickup", "dropoff", false, "DEVP")
//     }
//   })

//   it("complete a round trip for Development with Promo code", function () {
//     log.visit_homepage_and_close_popup()
//     cy.login(Cypress.env('newUserEmail'), "test")
//     cy.wait(3000)

//     register.profile().should('be.visible').click()
//     cy.get('body').then((body) => {
//       if (body.find('[data-cy=organizations-dropdown]').length == 0) {
//         register.profile().should('be.visible').click()
//         cy.wait(2000)
//       }
//     });
//     register.organization_dropdown().click().then(() => {
//       cy.contains("[role=option]", Cypress.env("Development_Org_Name")).click()
//       register.organization_dropdown().should("contain.text", Cypress.env("Development_Org_Name"))
//       cy.get('body').then((body) => {
//         if (body.find('#accept-btn').length > 0) {
//           cy.get('#accept-btn').scrollIntoView().click({ force: true });
//         }
//       });
//       homepage.homepage_logo().should("be.visible").click()
//       cy.wait(2000)
//     })

//     if (!Cypress.env("isProd")) {
//       cy.Ride("pickup", "dropoff", true, "DEVP")
//     }

//   })


//   after(function () {
//     //replace email with unicode for API and then delete user

//     emailToCheck = emailToCheck.replace("+", "%2B")
//     cy.deleteUserbyID(emailToCheck)

//   })
// })

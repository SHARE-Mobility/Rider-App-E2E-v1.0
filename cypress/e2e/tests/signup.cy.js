// import signup from '../pageObjects/loginModule/Signup'
// import LandingScreen from '../pageObjects/loginModule/landingScreen'
// import Login from '../pageObjects/loginModule/login'

// beforeEach(function () {

//     cy.fixture('config').as('config')

// })

// describe("Signup Test Cases", function () {
//     const register = new signup()
//     const land = new LandingScreen()
//     let emailToCheck = ""
//     it("Verify user lands on sign up popup on when signup buton is clicked", function () {
//         cy.visit('/')
//         land.close_popup_btn().click()

//         register.signup().click()
//         register.Create_account_btn().should('be.visible')
//         register.close_popup_btn().click()
//     })


//     it("Verify user is not able to signup if first name not provided", function () {
//         cy.visit('/')
//         land.close_popup_btn().click()

//         register.signup().click()
//         register.lastname().type(this.config.lastname)
//         register.password().type(this.config.password)
//         register.email().type(this.config.email)
//         register.phone().type(this.config.phone)
//         register.Create_account_btn().click()
//         cy.contains("First name is required")
//     })
//     it("Verify user is not able to signup if last name not provided", function () {
//         cy.visit('/')
//         land.close_popup_btn().click()

//         register.signup().click()
//         register.firstname().type(this.config.firstname)
//         register.password().type(this.config.password)
//         register.email().type(this.config.email)
//         register.phone().type(this.config.phone)
//         register.Create_account_btn().click()
//         cy.contains("Last name is required")
//     })
//     it("Verify user is not able to signup if email not provided", function () {
//         cy.visit('/')
//         land.close_popup_btn().click()

//         register.signup().click()
//         register.lastname().type(this.config.lastname)
//         register.password().type(this.config.password)
//         register.firstname().type(this.config.firstname)
//         register.phone().type(this.config.phone)
//         register.Create_account_btn().click()
//         cy.contains("Email is required")
//     })
//     it("Verify user is not able to signup if phone not provided", function () {
//         cy.visit('/')
//         land.close_popup_btn().click()

//         register.signup().click()
//         register.lastname().type(this.config.lastname)
//         register.password().type(this.config.password)
//         register.email().type(this.config.email)
//         register.firstname().type(this.config.phone)
//         register.Create_account_btn().click()
//         cy.contains("Phone is required")
//     })
//     it("Verify user is not able to signup if password not provided", function () {
//         cy.visit('/')
//         land.close_popup_btn().click()

//         register.signup().click()
//         register.lastname().type(this.config.lastname)
//         register.firstname().type(this.config.password)
//         register.email().type(this.config.email)
//         register.phone().type(this.config.phone)
//         register.Create_account_btn().click()
//         cy.contains("Password is required")
//     })


//     it("Verify user signup with all details", function () {
//         //generate new unique id to use in test
//         const unique_id = Math.floor(Math.random() * 999999);
//         const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
//         Cypress.env('newUserEmail', newUserEmail)

//         cy.visit('/')
//         land.close_popup_btn().click()

//         cy.fixture('config').then((config) => {
//             register.signup().click()
//             register.email().type(newUserEmail)
//             register.password().type(config.password)
//             register.lastname().type(config.lastname)
//             register.firstname().type(config.firstname)
//             register.phone().type(config.phone)

//             register.Create_account_btn().click()
//             cy.wait(10000)
//             cy.get('body').then((body) => {
//                 if (body.find('#logout-button').length == 0) {
//                     cy.log("logout-button NOT FOUND.Wait for 5 secs")
//                     cy.wait(5000)
//                 }
//             })
//             //register.Create_account_btn().should("be.enabled").click()       //press submit button
//            // cy.wait(7000)

//            // cy.get('body').then((body) => {
//               //  if (body.find('[name="address"]').length == 0) {
//                 //    cy.log("ADDRESS FIELD NOT FOUND.CLICK ADDRESS INPUT AGAIN")
//                 //    register.Create_account_btn().should("be.enabled").click()       //press submit button
//                  //   cy.wait(5000)
//               //  }
//            // });

//            // register.signup_address_field().should("be.visible").type(config.address, setTimeout = 6000)
//            // register.update_btn().click()
//            // cy.wait(5000)
//             //land.logout_btn().should('be.visible').click()
//             //replace email with unicode for API and then delete user
//             emailToCheck = Cypress.env('newUserEmail')
//             emailToCheck = emailToCheck.replace("+", "%2B")
//             // cy.deleteUserbyID(emailToCheck)
//             // cy.log("UserID: " + Cypress.env('userID'))
//             // cy.deleteUserbyID(Cypress.env('userID'))
//             // cy.log("User having email: " +Cypress.env('newUserEmail') + " deleted")
//         })
//     })



//     it("Delete newly created user", function () {
//         // Delete user using api in commands.js
//         // cy.deleteUserbyID(emailToCheck)
//         // cy.log("User having email: " +Cypress.env('newUserEmail') + " deleted")
//     })
// })
/*import signup from '../pageObjects/loginModule/Signup'
import LandingScreen from '../pageObjects/loginModule/landingScreen'
import login from '../pageObjects/loginModule/login'
import Homepage from '../pageObjects/hompage/homepage'


beforeEach(function () {
    //called before every test
    cy.fixture('config').as('config')

})
const unique_id = Math.floor(Math.random() * 999999)
const newUserEmail = "ridewithsharetest" + unique_id + "@gmail.com"
const newUserEmailDubin = "ridewithsharetestDublin" + unique_id + "@gmail.com"

describe("Invitation Test Cases", function () {
    const register = new signup()
    const land = new LandingScreen()
    const log = new login()
    const homepage = new Homepage()

    let emailToCheck = ""

    it("Assign organizations to a new user- hilliar senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });

        cy.fixture('config').then((config) => {
            // const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
            Cypress.env('newUserEmail', newUserEmail)
            emailToCheck = Cypress.env('newUserEmail')
            //call signup method from commands.js
            cy.Signup(newUserEmail, config.password)
        })
        // generate and assign access token to new user  
        cy.getAccessToken(Cypress.env("apiURL"))
    })

    it("Verify organization in profile- hilliard senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });

        cy.login(Cypress.env('newUserEmail'), this.config.password)
        cy.wait(9000)
        register.profile().should('be.visible').click()
        register.organization_dropdown().click().then(() => {
            // checks value of organization drop down
            cy.contains("[role=option]", Cypress.env("Hilliard_Senior_Org_Name")).click()
            register.organization_dropdown().should("contain.text", Cypress.env("Hilliard_Senior_Org_Name"))
        })
    })

    it("Accept organization from profile- hilliard senior", function () {

        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(2000)

        cy.login(Cypress.env('newUserEmail'), this.config.password)

        register.profile().should('be.visible').click()
        register.organization_dropdown().click().then(() => {
            cy.contains("[role=option]", Cypress.env("Hilliard_Senior_Org_Name")).click()
            // register.profile_slider().scrollTo("top")
            //accepts invitation of new organization
            register.accept_btn().scrollIntoView().should("be.visible").click({ force: true })
            cy.wait(3000)
            cy.log(Cypress.env("Hilliard_Senior_Org_Name") + "Invitation Accepted")
            homepage.homepage_logo().should("be.visible").click()
            Cypress.env("Invitation_accepted", true)
        })
    })

    it("Validate address of new assigned organizations- hilliard senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(2000)

        cy.login(Cypress.env('newUserEmail'), this.config.password)
        homepage.homepage_logo().should("be.visible").click()
        cy.wait(7000)
        //verifies that location from accepted organization is visible on homepage
        homepage.first_address_card_org().should("be.visible").click()
        cy.log(homepage.first_address_card_org().text)
        homepage.first_address_card_org().contains(Cypress.env("Hilliard_Senior_Org_Name"))
        homepage.get_address_card_by_index(1).contains(Cypress.env("Hilliard_Senior_Org_Name"))
    })

    it("Delete User after assignement- hilliard senior", function () {
        //deletes newly created user after verifying
        emailToCheck = emailToCheck.replace("+", "%2B")
        cy.deleteUserbyID(emailToCheck)

    })

    //===========================Dublin senior===================================================//



    it("Assign organizations to a new user - Dublin senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        const unique_id = Math.floor(Math.random() * 999999)

        cy.fixture('config').then((config) => {
            const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
            emailToCheck = Cypress.env('newUserEmail')
            Cypress.env('newUserEmail', newUserEmail)
            cy.Signup(newUserEmail, config.password)
        })
        cy.getAccessToken(Cypress.env("apiURL"))
    })

    it("Verify organization in profile - Dublin senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.login(Cypress.env('newUserEmail'), this.config.password)

        register.profile().should('be.visible').click()
        register.organization_dropdown().click().then(() => {
            cy.contains("[role=option]", Cypress.env("Dublin_Seniorr_Org_Name")).click()
            register.organization_dropdown().should("contain.text", Cypress.env("Dublin_Seniorr_Org_Name"))
        })
    })

    it("Accept organization from profile - Dublin senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.login(Cypress.env('newUserEmail'), this.config.password)

        register.profile().should('be.visible').click()
        register.organization_dropdown().click().then(() => {
            cy.contains("[role=option]", Cypress.env("Dublin_Seniorr_Org_Name")).click()
            // register.profile_slider().scrollTo("top")
            register.accept_btn().scrollIntoView().should("be.visible").click({ force: true })
            cy.wait(3000)
            cy.log(Cypress.env("Dublin_Seniorr_Org_Name") + "Invitation Accepted")
            homepage.homepage_logo().should("be.visible").click()
            Cypress.env("Invitation_accepted", true)
        })
    })

    it("Validate address of new assigned organizations - Dublin senior", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.login(Cypress.env('newUserEmail'), this.config.password)
        homepage.homepage_logo().should("be.visible").click()
        cy.wait(3000)
        homepage.first_address_card_org().should("be.visible").click()
        cy.log(homepage.first_address_card_org().text)
        homepage.first_address_card_org().contains(Cypress.env("Dublin_Seniorr_Org_Name"))
        homepage.get_address_card_by_index(1).contains(Cypress.env("Dublin_Seniorr_Org_Name"))
    })

    it("Delete User after assignement - Dublin senior", function () {
        emailToCheck = emailToCheck.replace("+", "%2B")
        cy.deleteUserbyID(emailToCheck)

    })
    //================================== AAA -Roundtown  ============================================//


    it("Assign organizations to a new user - AAA", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        const unique_id = Math.floor(Math.random() * 999999)

        cy.fixture('config').then((config) => {
            const newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
            emailToCheck = Cypress.env('newUserEmail')
            Cypress.env('newUserEmail', newUserEmail)
            cy.Signup(newUserEmail, config.password)
        })
        cy.getAccessToken(Cypress.env("apiURL"))
    })

    it("Verify organization in profile - AAA", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        // if (Cypress.env("isProd")) {
        //     cy.log("is Production. Call Production API.")
        // cy.getAccessTokenByOrg(Cypress.env("apiProdURL"), 188)
        //   } else {
        cy.getAccessTokenByOrg(Cypress.env("apiURL"), Cypress.env("AAA_Roundtown_ID"))
        //   }

        cy.login(Cypress.env('newUserEmail'), this.config.password)

        register.profile().should('be.visible').click()
        register.organization_dropdown().click().then(() => {

            cy.contains("[role=option]", Cypress.env("AAA_Roundtown_Org_Name")).click()
            register.organization_dropdown().should("contain.text", Cypress.env("AAA_Roundtown_Org_Name"))
        })
    })

    it("Accept organization from profile - AAA", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.login(Cypress.env('newUserEmail'), this.config.password)

        register.profile().should('be.visible').click()
        register.organization_dropdown().click().then(() => {
            cy.contains("[role=option]", Cypress.env("AAA_Roundtown_Org_Name")).click()
            // register.profile_slider().scrollTo("top")
            register.accept_btn().scrollIntoView().should("be.visible").click({ force: true })
            cy.wait(3000)
            cy.log(Cypress.env("AAA_Roundtown_Org_Name") + "Invitation Accepted")
            homepage.homepage_logo().should("be.visible").click()
            Cypress.env("Invitation_accepted", true)
        })
    })

    it("Validate address of new assigned organizations - AAA", function () {
        log.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"]').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.login(Cypress.env('newUserEmail'), this.config.password)
        homepage.homepage_logo().should("be.visible").click()
        cy.wait(3000)
        homepage.first_address_card_org().should("be.visible").click()
        cy.log(homepage.first_address_card_org().text)
        homepage.first_address_card_org().contains(Cypress.env("AAA_Roundtown_Org_Name"))
        homepage.get_address_card_by_index(1).contains(Cypress.env("AAA_Roundtown_Org_Name"))
    })

    it("Delete User after assignement - AAA", function () {
        emailToCheck = emailToCheck.replace("+", "%2B")
        cy.deleteUserbyID(emailToCheck)

    })
})*/
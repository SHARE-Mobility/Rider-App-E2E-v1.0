class signup {
    signup() {
        return cy.get('[data-cy="nav-signup-link"]')
    }
    // organization_dropdown() {
    //     // return cy.get('#options')
    //     return cy.get('[data-cy=organizations-dropdown]')
    // }
    firstname() {
        return cy.get('[data-cy="first-name"]')
    }
    lastname() {
        return cy.get('[data-cy="last-name"]')
    }
    email() {
        return cy.get('[data-cy="email"]')
    }
    password() {
        return cy.get('[data-cy="password"]')
    }
    phone() {
        return cy.get('[data-cy="phone"]')
    }
    Create_account_btn() {
        return cy.get('[data-cy="submit-btn"]')
    }
    employee() {
        return cy.get('input')
    }
    save_btn() {
        return cy.get('#submit-btn')
    }
    save_address_btn() {
        return cy.get('#update-btn')
    }

    logout_btn() {
        return cy.get('[data-cy="nav-logout-link"]')
    }
    login_btn() {
        return cy.get('[data-cy="nav-login-link"]')
    }
    submit_btn() {
        return cy.get('[data-cy="submit-btn"]')
    }
    membership_conexxus_btn() {
        return cy.get('[data-cy="306-input"]')
    }
    membership_starcare_btn() {
        return cy.get('[data-cy="307-input"]')
    }

    membership_radio_btn() {
        return cy.get('input[type="radio"].sc-jHNhIU.bwHCEF')
    }
    employee_popup(){
        return cy.get('[name="areYouANewEmployeePleaseTypeYesOrNo"]')
    }
    frequent_location(){
        return cy.get('[placeholder="Type address to save"]')
    }
    frequent_location_text(){
    return cy.get('#suggestion-text')
    }
    address() {
        return cy.get('#type-address > .sc-cOigif > .sc-pNWxx > .sc-jrsJCI > .sc-kEqYlL')
    }
    profile() {
        return cy.get('[data-cy=nav-profile-link]')
    }
    close_popup_btn() {
        return cy.get('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ')
    }
    signup_link(){
        return(cy.get('[data-cy="nav-signup-link"]'))
    }
    address_card(){
        return cy.get(cy.get('.slick-active > :nth-child(1) > [data-cy="address-card"]'))
    }
    address_card_name(){
        return cy.get('[data-cy="address-name"]')
    }
    address_card_address(){
        return cy.get('[data-cy="complete-address"] > .address')
    }
    homepage_logo() {
        return cy.get(".sc-dlMBXb")
    }

    visit_homepage_and_close_popup() {
        cy.visit('/')
       /* return cy.get('body').then((body) => {
         if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
            cy.get('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').scrollIntoView().click({ force: true });
          cy.wait(4000)*/
    
            }
        //});
        close_employee_popup(){
            return cy.get('[data-cy="special-needs-save-btn"]').click({force:true})
        }
        //  return this.popup_cancel_btn().click()

        accept_btn() {
            return cy.get('#accept-btn')
        }
    
        signup_address_field() {
            return cy.get('[name="address"]')
        }
    
        profile() {
            return cy.get('[data-cy=nav-profile-link]')
        }
    
        organization_dropdown() {
            // return cy.get('#options')
            return cy.get('[data-cy=organizations-dropdown]')
        }
    
        organization_dropdown_values() {
            return this.organization_dropdown().find('[role=option]')
        }
    
        profile_slider() {
            return cy.get(".sc-glgZvJ")
        }
    }

//}
export default signup
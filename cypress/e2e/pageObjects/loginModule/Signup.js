class signup {
    signup() {
        return cy.get('[data-cy="nav-signup-link"]')
    }

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
        return cy.get('#submit-btn')
    }

    close_popup_btn() {

        return cy.get('[data-cy="close-btn"]')
    }

    update_btn() {
        return cy.get('#update-btn')
    }

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
export default signup
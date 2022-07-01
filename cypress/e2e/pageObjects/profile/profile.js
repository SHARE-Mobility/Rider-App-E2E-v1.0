class Profile {
    profile() {
        return cy.get('[data-cy=nav-profile-link]')
    }

    organization_dropdown() {
        return cy.get('[data-cy=organizations-dropdown]')
    }

    organization_dropdown_values() {
        return this.organization_dropdown().get('.Dropdown-option')
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

        return cy.get('#close-button')
    }

    update_btn() {
        return cy.get('#update-btn')
    }

    add_payment_method_btn(){
        return cy.get('[data-cy=add-payment-methods]')
    }

    card_name_field(){
        return cy.get('#card-name > .sc-jrsJCI > .sc-kEqYlL')
    }

    card_number_field(){
        return cy.get('.card-number > .__PrivateStripeElement > iframe')
    }

    card_expiry_field(){
        return cy.get('.card-expiry > .__PrivateStripeElement > iframe')
    }

    card_cvc_field(){
        return cy.get('.card-cvc > .__PrivateStripeElement > iframe')
    }

    payment_method_zipcode_field(){
        return cy.get(':nth-child(3) > .sc-pNWxx > .sc-jrsJCI > .sc-kEqYlL')
    }

    save_btn(){
        return cy.get("#save-btn")
    }
}
export default Profile
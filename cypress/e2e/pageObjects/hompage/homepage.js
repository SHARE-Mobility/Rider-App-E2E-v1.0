class Homepage {

    homepage_logo() {
        return cy.get(".sc-dlMBXb")
    }

    all_address_cards() {
        return cy.get("#card-container")
    }

    first_address_card_org() {
        return cy.get(".slick-active > :nth-child(1) > #card-container")

    }

    get_address_card_by_index(index) {
        const selector = "[data-index='" + index + "'] > :nth-child(1) > #card-container"
        return cy.get(selector)
    }

    get_address_card_org_by_index(index) {
        return this.get_address_card_by_index(index).get(" .sc-hJJJNB > .sc-gVPaQZ > .sc-ieKCbG")
    }

    active_card() {
        return cy.get(".slick-active")
    }

    
    pickup_address() {
        return cy.get("[name='pickupAddress']")
    }
    destination_address() {
        return cy.get('[name="destinationAddress"]')
    }
    date() {
        return cy.get('[data-cy="depart-date-input"]')
    }

    date_value(value) {
        return cy.get('[data-value="' + value + '"]')
    }

    date_value_today() {
        return cy.get('.rdtToday')
    }

    date_value_enabled() {
        return cy.get('td:not(.rdtDisabled)')
    }

    return_date() {
        return cy.get('[data-cy="return-date-input"]')
    }

    pickup_time() {
        return cy.get('.valid-depart-times')
    }

    return_time() {
        return cy.get('.valid-return-times')
    }

    select_dropdown_value(index) {
        return cy.get('.Dropdown-option:nth-of-type(' + index + ')')
    }
    find_ride_btn() {
        return cy.get('[data-cy="find-rides-btn"]')
    }
    ride_type() {
        return cy.get('[data-cy="is-round-trip-switch"]')
    }
    dropdown_list_items() {
        return cy.get('#suggestion-menu')
    }

    dropdown_list_item_by_index(index) {
        return cy.get("#suggestion:nth-of-type(" + index + ")")
    }

    select_trip_btn() {
        return cy.get('#select-trip')
    }

    return_trip_btn() {
        return cy.get('#return-trip #select-trip')
    }


    confirm_btn() {
        return cy.get('#confirm-btn > .label')
    }
    got_it_btn() {
        return cy.get("#got-it-btn")
    }
    ride_description() {
        return cy.get('h4')
    }
    book_btn() {
        return cy.get('#book-btn')
    }

    payment_method_point() {
        return cy.get("#points > #ctrl")
    }

    payment_method_credit_card() {
        return cy.get('#selfPaid > #ctrl')
    }
    select_payment_method_arrow(){
        return cy.get('.dqBnGi > .svg-inline--fa > path')
    }
    promo_code_field() {
        return cy.get('input[name="promoCode"]')
    }

    apply_btn() {
        return cy.get('#apply-btn')
    }
    extra_seat_dropdown_by_index(index) {
        return cy.get(":nth-child(" + index + ") > .sc-ojhmt > .Dropdown-root > .Dropdown-control")
    }

}

export default Homepage
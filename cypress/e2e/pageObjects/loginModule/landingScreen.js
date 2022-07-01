class landingScreen{


    swipe_screen1(){

        return  (cy.get('[data-cy="welcome-slider-title"]').contains('DISCOVER MOBILITY OPTIONS'),
         cy.get('[data-cy="welcome-slider-sub-title"]').contains('Discover free and discounted rides that are Your Access Pass to Mobility.')
        )
    }

    swipe_screen2(){

        return  (cy.get('[data-cy="welcome-slider-title"]').contains('PLAN THE TRIPS YOU MAKE THE MOST'),
         cy.get('[data-cy="welcome-slider-sub-title"]').contains('Book rides to work, the grocery store, library, and the places you go regularly.')
        )
    }

    swipe_screen3(){

        return  (cy.get('[data-cy="welcome-slider-title"]').contains('SAVE BIG WHEN YOU SHARE'),
         cy.get('[data-cy="welcome-slider-sub-title"]').contains('When you use shared mobility, you save time and money. The world gets less CO2. Create your free account to get started.')
        )
    }

    swipe_right(){

        return cy.get('.slick-next')
    }

    swipe_left(){

        return cy.get('.slick-prev')
    }

    create_account_btn(){

        return cy.get('[data-cy="create-account-btn"]')
    }

    close_popup_btn(){

        return cy.get('[data-cy="close-btn"]')
    }
    close_popup_btn_ride(){
        return cy.get('[data-cy=close-btn] > .sc-gtssRu > .sc-bXevSJ')
    }

    logout_btn(){

        return cy.get('#logout-button')
    }

    pickup(){

        return cy.get('[data-cy=pickup-address-input] > .sc-cOigif > .sc-pNWxx > .sc-jrsJCI > .sc-kEqYlL')
        
    }

    destination(){

        return cy.get('[data-cy=destination-address-input] > .sc-cOigif > .sc-pNWxx > .sc-jrsJCI > .sc-kEqYlL')
    }

    date(){

        return cy.get('[data-cy=depart-date-input]')
    }

    time(){
        return cy.get('[data-cy=depart-time-input]')
        
    }
}
export default landingScreen
class Promocode {

    promocodeSideMenuLink(){
        return cy.get(":nth-child(3) > ul > :nth-child(6) > .SideBarLink > a")
    }

    addBtn(){
        return cy.get(".pull-right > .btn")
    }

    promocode(){
        return cy.get(":nth-child(3) > :nth-child(1) > .form-group > .form-control")
    }

    value(){
        return cy.get(":nth-child(3) > :nth-child(2) > .form-group > .form-control")
    }

    riderusage(){
        return cy.get(":nth-child(5) > :nth-child(1) > .form-group > .form-control")
    }

    maxUsage(){
        return cy.get(":nth-child(5) > :nth-child(2) > .form-group > .form-control")
    }

    saveBtn(){
        return cy.get(".modal-footer > .btn-primary")
    }

    type(){
        return cy.get(":nth-child(1) > .ng-select > .ng-select-container")
    }
    expiryDate(){
        return cy.get(".form-control-wrapper > .form-control")
    }
    sideMenutoggleBtn(){
        return cy.get('.d-lg-flex > svg')
    }

  
    organizationDropdown(){
        return cy.get(".modal-body > :nth-child(2) > .ng-select > .ng-select-container")
    }    
    // (){
    //     return cy.get("")
    // }

  
    getRowByText(name){
        return cy.contains(name).parent('tr')
    }

    
    deletePopupOkBtn(){
        return cy.get('.modal-body > .btn-primary')
    }

    deletePopupCancelBtn(){
        return cy.get('.btn-dark')
    }
}
export default Promocode
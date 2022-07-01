class Login{
    email() {
        return cy.get('[data-cy="email"]')
    }
password() {
        return cy.get('[data-cy="password"]')
    }
login_btn() {
    return cy.get('[data-cy="nav-login-link"]')
}
submit_btn() {
    return cy.get('[data-cy="submit-btn"]')
}
logout_btn() {
    return cy.get('[data-cy="nav-logout-link"]')
}
auth_error(){

    return cy.contains('The specified credentials are invalid.')
}
visit_homepage_and_close_popup() {
           return cy.get('[data-cy="close-btn"] > .sc-gtssRu > .sc-eGJXgd').click({ force: true });
           
        }
  
    //  return this.popup_cancel_btn().click()
    }
export default Login
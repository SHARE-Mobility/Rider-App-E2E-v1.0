// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import signup from '../e2e/pageObjects/loginModule/Signup'

Cypress.Commands.add('deleteOrgUser', (ID, userID) => {
  const deleteURL = "https://staging-api.ridewithshare.com/organizations/" + ID + "/users/" + userID;
  URL = "https://api.ridewithshare.com"

  return cy.request({

    method: 'POST',
    url: URL + '/users/login',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      "email": "dispatch@ridewithshare.com",
      "password": "dis123!"
    }
  }).then(function (response) {
    // gets x-auth from with admin rights 
    const token = response.headers["x-auth"]
    Cypress.env('Token', token)
    cy.log(Cypress.env('Token'))
    return cy.request({
      method: 'DELETE',
      url: URL + '/users/' + userID,
      headers: {
        "x-auth": Cypress.env('Token')
      },
    }).then(function (JsonData) {
      //verify status
      expect(JsonData).property('status').to.equal(202)
    })

  })
})

Cypress.Commands.add('deleteUserbyID', (email) => {
  // a = 'https://staging-api.ridewithshare.com/users/login'
  email = email.replace("+", "%2B")

  const URL = Cypress.env("apiURL")
  // URL = "https://api.ridewithshare.com"
  cy.log("Search ID for user having Email: " + email)

  return cy.request({

    method: 'POST',
    url: URL + '/users/login',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      "email": "dispatch@ridewithshare.com",
      "password": "dis123!"
    }
  }).then(function (response) {
    // gets x-auth from with admin rights 
    const token = response.headers["x-auth"]
    Cypress.env('Token', token)
    cy.log(Cypress.env('Token'))

    // send call to find user based on email
    return cy.request({
      method: 'GET',
      url: URL + '/user/find' + '?email_phone=' + email,
      headers: {
        "x-auth": Cypress.env('Token')
      },
      body: {
        "email_phone": email
      }
    }).then(function (JsonData) {
      //verify data returned
      expect(JsonData).property('status').to.equal(200)
      expect(JsonData.body).property('id').to.not.be.oneOf([null, ""])
      const respBody = JsonData.body;
      const userID = respBody['id']
      // set userID for use in other tests
      Cypress.env('userID', userID)
      // return new Promise(resolve => {
      //   Cypress.env('userID', userID)
      //   resolve(userID)
      // })

      //send call to delete user by UserID
      return cy.request({
        method: 'DELETE',
        url: URL + '/users/' + userID,
        headers: {
          "x-auth": Cypress.env('Token')
        },
        body: {
          "email_phone": email
        }
      }).then(function (JsonData) {
        //verify status
        expect(JsonData).property('status').to.equal(202)
      })
    })
  })
})


Cypress.Commands.add('deleteUserbyOrg', (email) => {
  // a = 'https://staging-api.ridewithshare.com/users/login'
  email = email.replace("+", "%2B")

  const URL = Cypress.env("apiURL")
  
  // URL = "https://api.ridewithshare.com"
  cy.log("Search ID for user having Email: " + email)

  return cy.request({

    method: 'POST',
    url: URL + '/users/login',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      "email": "dispatch@ridewithshare.com",
      "password": "dis123!"
    }
  }).then(function (response) {
    // gets x-auth from with admin rights 
    const token = response.headers["x-auth"]
    Cypress.env('Token', token)
    cy.log(Cypress.env('Token'))

    // send call to find user based on email
    return cy.request({
      method: 'GET',
      url: URL + '/user/find' + '?email_phone=' + email,
      headers: {
        "x-auth": Cypress.env('Token')
      },
      body: {
        "email_phone": email
      }
    }).then(function (JsonData) {
      //verify data returned
      expect(JsonData).property('status').to.equal(200)
      expect(JsonData.body).property('id').to.not.be.oneOf([null, ""])
      const respBody = JsonData.body;
      const userID = respBody['id']
      const orgID = (respBody['organizationIds'])[0]
      cy.log("User org id is : " + orgID)
      cy.wait(10000)
      Cypress.env('userID', userID)
      Cypress.env('orgID', orgID)
      return cy.request({
        method: 'DELETE',
        url: "https://api.ridewithshare.com/organizations/" + orgID + "/users/" + userID,
        headers: {
          "x-auth": Cypress.env('Token')
        },
        body: {
          "email_phone": email
        }
      }).then(function (JsonData) {
        //verify status
        expect(JsonData).property('status').to.equal(204)
      })
    })
  })
})

Cypress.Commands.add('login', (email, password) => {

  //if already login then logged out that user
  cy.get('body').then((body) => {
    if (body.find('#logout-button').length > 0) {
      cy.get('#logout-button').click();
    }
  });
  cy.get('[data-cy="nav-login-link"]').should('be.visible').click({ force: true })
  cy.get('[data-cy=email]').should('be.visible').type(email)
  cy.get('[data-cy=password]').should('be.visible').type(password)
  cy.get('#submit-btn').should('be.visible').click()
  cy.wait(2000)
  //fill all the mandatory details and then click submit
  cy.get('body').then((body) => {
    if (body.find('#submit-btn').length > 0) {
      if (body.find('#submit-btn').is(":disabled")) {
        return
      } else {

        cy.get('#submit-btn').click();
      }
    }
  });
  cy.wait(5000)

})


Cypress.Commands.add('Signup', (email) => {
  const register = new signup()

  register.visit_homepage_and_close_popup()

  cy.fixture('config').then((config) => {
    register.firstname().type(config.firstname)
    register.lastname().type(config.lastname)
    register.email().type(email)
    register.password().type(config.password)
    register.phone().type(config.phone)

    cy.get('body').then((body) => {
      if (body.find('input[type="radio"].sc-jHNhIU.bwHCEF').length > 0) {
        register.membership_radio_btn().first().click()
        cy.wait(3000)
      }
    });
    register.save_btn().click()
    cy.wait(6000)
    cy.get('body').then((body) => {
      if (body.find('[name="areYouANewEmployeePleaseTypeYesOrNo"]').length > 0) {
        register.employee_popup().type("YES")
        cy.wait(6000)
      }
    });
    cy.get('body').then((body) => {
      if (body.find('[placeholder="Type address to save"]').length > 0) {
        register.frequent_location().type(config.frequentAddress)
        register.frequent_location_text().click()
        cy.wait(6000)
      }
    });
    cy.get('body').then((body) => {
      if (body.find('#update-btn').length > 0) {
        register.save_address_btn().click()
      }
    });
    cy.get('body').then((body) => {
      if (body.find('#submit-btn').length > 0) {
        register.save_btn().click()
      }
    }); register.logout_btn().should('be.visible')
    //cy.contains('Your Plans').should('be.visible')
    cy.wait(10000)
    // register.close_employee_popup()
    // cy.wait(3000)
    // register.address_card_name().first().should('be.visible')
    // register.address_card_address().first().should('be.visible')

    cy.wait(3000)

    //register.close_employee_popup()

  })

})

Cypress.Commands.add('getAccessToken', (URL) => {
  // a = 'https://staging-api.ridewithshare.com/users/login'

  // selects api url bassed on isprod boolean variable
  if (Cypress.env("isProd")) {
    cy.log("is Production. Call Production API.")
    URL = Cypress.env("apiProdURL")

  } else {
    URL = Cypress.env("apiURL")
  }
  return cy.request({

    method: 'POST',
    url: URL + '/users/login',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      "email": "dispatch@ridewithshare.com",
      "password": "dis123!"
    }
  }).then(function (response) {

    const token = response.headers["x-auth"]
    Cypress.env('Token', token)
    cy.log(Cypress.env('Token'))

    // send call to get invitation for AAA
    cy.request({
      method: 'POST',
      url: URL + '/organizations/' + Cypress.env("AAA_Roundtown_ID") + '/invites',
      headers: {
        'x-auth': Cypress.env('Token'),
        "Content-Type": "application/json"
      },
      body: {
        "toEmail": Cypress.env('newUserEmail'),
        "role": "User"
      }
    }).then(function (response) {
      cy.log("API Logs -" + Cypress.env('newUserEmail') + " Assigned to AAA_Roundtown having id " + Cypress.env("AAA_Roundtown_ID"))
    })


    // send call to get invitation for Hillard
    cy.request({
      method: 'POST',
      url: URL + '/organizations/' + Cypress.env('Hilliard_Senior') + '/invites',
      headers: {
        'x-auth': Cypress.env('Token'),
        "Content-Type": "application/json"
      },
      body: {
        "toEmail": Cypress.env('newUserEmail'),
        "role": "User"
      }
    }).then(function (response) {
      cy.log("API Logs -" + Cypress.env('newUserEmail') + " Assigned to Hilliard_Senior having id " + Cypress.env('Hilliard_Senior'))
    })

    // send call to get invitation for Dublin Senior
    cy.request({
      method: 'POST',
      url: URL + '/organizations/' + Cypress.env('Dublin_Senior') + '/invites',
      headers: {
        'x-auth': Cypress.env('Token'),
        "Content-Type": "application/json"
      },
      body: {
        "toEmail": Cypress.env('newUserEmail'),
        "role": "User"
      }
    }).then(function (response) {
      cy.log("API Logs -" + Cypress.env('newUserEmail') + " Assigned to Dublin_Senior having id " + Cypress.env('Dublin_Senior'))
    })
  })
})


Cypress.Commands.add('getAccessTokenByOrg', (URL, orgName) => {

  // send call to get invitation based on organization ID
  return cy.request({

    method: 'POST',
    url: URL + '/users/login',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      "email": Cypress.env('Admin_UserName'),
      "password": Cypress.env('Admin_Password')
    }
  }).then(function (response) {

    const token = response.headers["x-auth"]
    Cypress.env('Token', token)
    cy.log("Token generated for Organization:\n" + Cypress.env('Token'))

    cy.request({
      method: 'POST',
      url: URL + '/organizations/' + orgName + '/invites',
      headers: {
        'x-auth': Cypress.env('Token'),
        "Content-Type": "application/json"
      },
      body: {
        "toEmail": Cypress.env('newUserEmail'),
        "role": "User"
      }
    }).then(function (response) {
      cy.log("API Logs -" + Cypress.env('newUserEmail') + " Assigned to Company having id " + orgName)
    })
  })
})


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
import 'cypress-file-upload';
import 'cypress-localstorage-commands';
import Homepage from '../e2e/pageObjects/hompage/homepage';
import landingScreen from '../e2e/pageObjects/loginModule/landingScreen';
import login from '../e2e/pageObjects/loginModule/login';
import signup from '../e2e/pageObjects/loginModule/Signup';
import Profile from '../e2e/pageObjects/profile/profile';
import profile from '../e2e/pageObjects/profile/profile';


Cypress.Commands.add('login', (email, password) => {

  //if already login then logged out that user
  cy.get('body').then((body) => {
    if (body.find('#logout-button').length > 0) {
      cy.get('#logout-button').click();
    }
  });
  cy.get('[data-cy="nav-login-link"]').should('be.visible').click()
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

Cypress.Commands.add('Signup', (email, password) => {
  const register = new signup()
  // const config = cy.fixture('config').as('config')
  cy.fixture('config').then((config) => {
    //checks fixture data exist and type email and password
    register.signup().click()
    register.email().type(email)
    register.password().type(password)
    register.lastname().type(config.lastname)
    register.firstname().type(config.firstname)
    register.phone().type(config.phone)

    //press create button
    register.Create_account_btn().click()
    cy.wait(8000)
    cy.get('body').then((body) => {
      if (body.find('#logout-button').length == 0) {
        cy.log("logout-button NOT FOUND. Wait for 5 secs")
        cy.wait(5000)
      }
    })
    // cy.get('#close-btn').click()
    //close second popup
    cy.wait(3000)
    cy.get('body').then((body) => {
      if (body.find('#close-btn').length > 0) {
        cy.get('#close-btn').click();
      }
    });
    cy.get('body').then((body) => {
      if (body.find('#close-icon').length > 0) {
        cy.get('#close-icon').click();
      }
    });
    // cy.get('#close-icon').click()

  })

})

Cypress.Commands.add('deleteUserbyID', (email) => {
  // a = 'https://staging-api.ridewithshare.com/users/login'
  email = email.replace("+", "%2B")
  // selects api url bassed on isprod boolean variable
  if (Cypress.env("isProd")) {
    cy.log("is Production. Call Production API.")
    URL = Cypress.env("apiProdURL")

  } else {
    URL = Cypress.env("apiURL")
  }
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
        "email_phone": "rfatima9@ridewithshare.com"
      }
    }).then(function (JsonData) {
      //verify data returned
      expect(JsonData).property('status').to.equal(200)
      expect(JsonData).property('id').to.not.be.oneOf([null, ""])
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
          "email_phone": "rfatima9@ridewithshare.com"
        }
      }).then(function (JsonData) {
        cy.wait(10000)
        //verify status
        expect(JsonData).property('status').to.equal(202)
      })
    })
  })
})

// Cypress.Commands.add('deleteUserbyID', (userID) => {
//   // a = 'https://staging-api.ridewithshare.com/users/login'
//   if (Cypress.env("isProd")) {
//     cy.log("is Production. Call Production API.")
//     URL = Cypress.env("apiProdURL")

//   } else {
//     URL = Cypress.env("apiURL")
//   }
//   cy.log("Delete user having ID: " + userID)

//   return cy.request({

//     method: 'POST',
//     url: URL + '/users/login',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: {
//       "email": "dispatch@ridewithshare.com",
//       "password": "dis123!"
//     }
//   }).then(function (response) {

//     const token = response.headers["x-auth"]
//     Cypress.env('Token', token)
//     cy.log(Cypress.env('Token'))

//     return cy.request({
//       method: 'DELETE',
//       url: URL + '/users/'+userID,
//       headers: {
//         "x-auth": Cypress.env('Token')
//       },
//       body: {
//         "email_phone": "rfatima9@ridewithshare.com"
//       }
//     }).then(function (JsonData) {
//       expect(JsonData).property('status').to.equal(202)
//     })
//   })
// })

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

Cypress.Commands.add('Ride', (pickup, dropoff, type, promo_code,selfpaid) => {
  // first 3 params are required else it will fail test

  const homepage = new Homepage()
  var getCurrentDay = (new Date().getDate()) + 1;

 //cy.get("#card-container").as('alladdress')
 cy.wait(10000) 
 //homepage.homepage_logo().should("be.visible").click()
  cy.wait(100000)
  homepage.pickup_address().should("be.visible").type(pickup).
  //cy.wait(2000)
  //cy.get('body').then(($body) => {
    //const val = $body.children(":contains(" + pickup + ")")
    //if (val.length == 0) {
     // cy.log("pickup location is wrong. Reselecting location.")
     // homepage.pickup_address().should("be.visible").clear().type(pickup)
     // cy.wait(2000)
    //}
  //});
  homepage.dropdown_list_item_by_index(1).should("be.visible").click()
  homepage.ride_description().click()
  homepage.destination_address().should("be.visible").type(dropoff)
  cy.wait(2000)
  cy.get('body').then((body) => {
    if (body.find('#suggestion:nth-of-type(1)').length == 0) {
      homepage.destination_address().should("be.visible").clear().type(dropoff)
      cy.wait(2000)
    }
  });
  homepage.dropdown_list_items().should("be.visible")
  homepage.dropdown_list_item_by_index(1).should("be.visible").click()
  homepage.ride_description().click()

  if (type == true) {
    homepage.ride_type().click()
    homepage.return_date().should("be.visible").click()
    // homepage.date_value((getCurrentDay + 1)).should("be.visible").last().click()
    cy.get('body').then((body) => {
      if (body.find('.rdtToday').length == 0) {
        homepage.return_date().should("be.visible").click()
        cy.wait(2000)
      }
    });
    homepage.date_value_enabled().should("be.visible").last().click()
  }
  
  homepage.date().should("be.visible").click()
  cy.wait(2000)
  // homepage.date_value(getCurrentDay).should("be.visible").first().click()
  cy.get('body').then((body) => {
    if (body.find('.rdtToday').length == 0) {
      homepage.date().should("be.visible").click()
      cy.wait(2000)
    }
  });
  homepage.date_value_enabled().should("be.visible").first().click()

  cy.get('body').then((body) => {
    if (body.find('[data-cy="depart-time-input"]').length > 0) {
      cy.get('[data-cy="depart-time-input"]').click();
    } else {
      homepage.pickup_time().should("be.visible").click()
      homepage.select_dropdown_value(1).should("be.visible").click()
    }
  });

  if (type == true) {
    cy.get('body').then((body) => {
    if (body.find('[data-cy="return-time-input"]').length > 0) {
      cy.get('[data-cy="return-time-input"]').click();
    } else {
      homepage.return_time().should("be.visible").click()
      homepage.select_dropdown_value(3).should("be.visible").click()
    }
  });

}
  homepage.find_ride_btn().should("be.enabled").click()
  cy.wait(12000)

  cy.get('body').then((body) => {
    if (body.find('#select-trip').length == 0) {
      homepage.find_ride_btn().should("be.enabled").click()
      cy.wait(13000)
    }
  });
  homepage.select_trip_btn().first().click()
  if (type == true) {
    homepage.return_trip_btn().last().click()
  } homepage.confirm_btn().click()
  cy.wait(5000)

  // homepage.extra_seat_dropdown_by_index(1).click()
  // homepage.select_dropdown_value(2).should("be.visible").click()
  // homepage.extra_seat_dropdown_by_index(2).click()
  // homepage.select_dropdown_value(2).should("be.visible").click()

  homepage.book_btn().then(($btn) => {
    if ($btn.is(":disabled")) {
      cy.wait(10000)
      cy.get('body').then((body) => {
        if (body.find('#points > #ctrl').length > 0) {
          homepage.payment_method_point().click({ force: true })
          cy.wait(6000)
        }
      });
      // if (cy.get('#points').find('#ctrl').length > 0) {
      // homepage.payment_method_point().click({ force: true })
      // cy.wait(3000)
      // }
    }
  })
if (selfpaid){
  selfpaid.select_payment_method_arrow().click()({force:true})
  cy.wait(7000)
}
homepage.book_btn().should("be.enabled").click()
cy.wait(8000)
homepage.got_it_btn().should("be.visible").click()
cy.wait(4000)
  if (promo_code) {
    homepage.payment_method_credit_card().click({ force: true })
    cy.wait(7000)
    homepage.promo_code_field().type(promo_code)
    homepage.apply_btn().click({ force: true })
    cy.wait(5000)
    homepage.apply_btn().should('have.text', 'AVAILED')
  }
  cy.wait(10000)

  //homepage.book_btn().should("be.enabled").click()

  // cy.get('body').then((body) => {
  //   if (body.find('#got-it-btn').length == 0) {
  //     homepage.book_btn().should("be.enabled").click()
  //     cy.wait(3000)
  //   }
  // });

  //homepage.got_it_btn().should("be.visible").click()
})

Cypress.Commands.add('generateRandomEmail', () => {
  let unique_id = Math.floor(Math.random() * 999999);
  var newUserEmail = "ridewithsharetest+" + unique_id + "@gmail.com"
  cy.log("Email generated:" + newUserEmail)
  Cypress.env('newUserEmail', newUserEmail)
})
/*Cypress.Commands.add('Selfpaidride', ("Pickup-Automation", "Dropoff-Automation",selfpaid ) => {
  if (selfpaid){
    selfpaid.select_payment_method_arrow().click()({force:true})
    cy.wait(4000)
    cy.wait(3000)
    selfpaid.().click
    homepage.book_btn().should("be.enabled").click()
  cy.wait(6000)
  homepage.got_it_btn().should("be.visible").click()
  cy.wait(4000)
  }
})*/
Cypress.Commands.add('addCreditCardInProfile', () => {
  cy.log("Add Credit Card Info...")
  const register = new signup()
  const profile = new Profile()
  register.profile().should('be.visible').click()
  profile.add_payment_method_btn().should('be.enabled').click()
  cy.wait(5000)
  profile.card_name_field().type("Dummy Name")
  profile.card_number_field().its('0.contentDocument.body').find('.InputElement').type("4242424242424242")
  profile.card_expiry_field().its('0.contentDocument.body').find('.InputElement').type("1225")
  profile.card_cvc_field().its('0.contentDocument.body').find('.InputElement').type("555")
  profile.payment_method_zipcode_field().type("334455")
  profile.save_btn().should("be.enabled").click()
  cy.wait(5000)
})


Cypress.Commands.add('createUserAgent', (email, type, organizationId, riders) => {
  // selects api url bassed on isprod boolean variable
  cy.log("email in comand : " + email)
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
    // gets x-auth from with admin rights 
    const token = response.headers["x-auth"]
    Cypress.env('Token', token)
    cy.log(Cypress.env('Token'))

    // send call to find user based on email
    return cy.request({
      method: 'POST',
      url: URL + '/admin/users',
      headers: {
        "x-auth": Cypress.env('Token')
      },
      body: {
        "email": email,
        "name": "Edeel Rider",
        "password": "test",
        "notifyByEmail": true,
        "notifyBySMS": true,
        "notifyByMessage": false,
        "phoneNumber": "3303966434",
        "smsNumber": "3303966434",
        "OrganizationUsers": [
          {
            "organizationId": organizationId,
            "role": type,
            "organization": {
              "id": organizationId
            }
          }
        ],
        "userAgentRiders": riders,
        "detail": {
          "address": "",
          "birthday": "",
          "city": "",
          "driverLicenseNumber": "",
          "driverLicenseState": "",
          "notes": "",
          "phone": "",
          "specialneeds": [],
          "state": "",
          "zip": "",
          "addresses": []
        },
        "deviceToken": null,
        "email": email,
        "balance": "0.00",
        "lat": "0.00",
        "lng": "0.00",
        "name": "jua",
        "photo": "",
        "password": "test",
        "notifyByEmail": true,
        "notifyBySMS": true,
        "notifyByMessage": false,
        "phoneNumber": "",
        "smsNumber": "",
        "superAdmin": false,
        "group": "",

        "createdBy": 51
      }
    }).then(function (JsonData) {
      //verify data returned
      expect(JsonData).property('status').to.equal(200)
      const respBody = JsonData.body;
    })
  })
})


Cypress.Commands.add('getUserIDByEmail', (email) => {
  // a = 'https://staging-api.ridewithshare.com/users/login'

  // selects api url bassed on isprod boolean variable
  email = email.replace("+", "%2B")

  if (Cypress.env("isProd")) {
    cy.log("is Production. Call Production API.")
    URL = Cypress.env("apiProdURL")

  } else {
    URL = Cypress.env("apiURL")
  }
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
        "email_phone": "rfatima9@ridewithshare.com"
      }
    }).then(function (JsonData) {
      //verify data returned
      expect(JsonData).property('status').to.equal(200)
      expect(JsonData.body).property('id').to.not.be.oneOf([null, ""])
      const respBody = JsonData.body;
      const userID = respBody['id']
      Cypress.env('userID', userID)
      return userID
    })
  })
})
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    "baseUrl": "https://staging-rider.ridewithshare.com/",
    viewportWidth: 1366,
    viewportHeight: 720,
  retries:2
  },
  "env": {
    "Admin_UserName": "dispatch@ridewithshare.com",
    "Admin_Password": "dis123!",
    "Token": "",
    "isProd": false,
    "apiStgURL": "https://staging-api.ridewithshare.com",
    "apiProdURL": "https://api.ridewithshare.com",
    "apiURL": "https://staging-api.ridewithshare.com",
    "Hilliard_Senior": 113,
    "AAA_Roundtown_ID": 73,
    "Dublin_Senior": 37,
    "Development_ID": 73,
    "Hilliard_Senior_Org_Name": "Hilliard ",
    "AAA_Roundtown_Org_Name": "Development",
    "Dublin_Seniorr_Org_Name": "Dublin ",
    "Development_Org_Name": "Development",
    "Invitation_accepted": false,
    "role_user_agent": "User Agent",
    "role_user": "User"
  },
});
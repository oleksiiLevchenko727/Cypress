const { defineConfig } = require("cypress");
module.exports = {
  e2e: {
    baseUrl: "https://qauto2.forstudy.space",
    env: {
       authUser: "guest",
       authPassword: "welcome2qauto",
       userEmail: "sfasdf@gmail.com",
       userPassword: "sdfdsfa#$34ER"
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true

}
};


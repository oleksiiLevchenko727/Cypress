const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://lms.ithillel.ua/",
    setupNodeEvents(on, config) {
      
    },
  },
});

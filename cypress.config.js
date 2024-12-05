const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
    
    base: {
      back: "http://localhost:3000/",
      front: "https://front.serverest.dev/home/"
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: true,
      json: false
    }
  },
  projectId: "7micw6"
});

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}",
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videoCompression: 45,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      firstName: "Sarah",
      webdriverUniversityHomePage: "http://www.webdriveruniversity.com"
    },
    baseUrl: "http://www.webdriveruniversity.com"
  },
})

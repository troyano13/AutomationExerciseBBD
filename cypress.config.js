const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

require('dotenv').config();

module.exports = defineConfig({
  projectId: 'czmwdg',
  defaultCommandTimeout: 20000, 
  video: false, 
  viewportWidth: 1500, 
  viewportHeight: 800, 
  reporter: 'mochawesome', 
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    saveAllAttempts: true,
    ignoreVideos: true,
  },
  e2e: {
    baseUrl: 'https://automationexercise.com/', 
    specPattern: 'cypress/e2e/features/**/*.feature',  
    async setupNodeEvents(on, config) {
     
      await addCucumberPreprocessorPlugin(on, config);

     
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);  

      return config;
    },
  },

    // environment variables
    env: {
      url: process.env.URL,
      USER_EMAIL_ADMIN: process.env.USER_EMAIL_ADMIN,
      USER_PASSWORD: process.env.USER_PASSWORD,
    },
  
  stepDefinitions: 'cypress/e2e/stepsDefinitions/**/*',
});

exports.config = {

  baseUrl: "https://valor-software.com/ngx-bootstrap/#/",

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    './demo/e2e/features/*.feature'
  ],

  cucumberOpts: {
    require: ['./demo/e2e/step_definitions/*.steps.ts']
  },

  onPrepare: () => {
  require('ts-node').register({project: 'demo/e2e'});
  const chai = require('chai');
  const chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  browser.driver.manage().window().maximize();
  browser.waitForAngularEnabled(false)
  }
}

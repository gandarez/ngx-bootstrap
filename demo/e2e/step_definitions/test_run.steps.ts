import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LandingPo } from '../pages/landing.po';
import { safeClick } from '../shared/helpers/wd-helper';
import { GettingStartedPo } from '../pages/gettingStarted.po';

defineSupportCode(({Given, When, Then}) => {
  const landingPage: LandingPo = new LandingPo();
  const gettingStartedPage: GettingStartedPo = new GettingStartedPo();

  Given(/^I am on the landing page$/, () => {
    browser.get('http://valor-software.com/ngx-bootstrap/#/');
  });

  When(/^I click on Get Started Button$/, () => {
    return safeClick(landingPage.getStartedBtn);
  });

  Then(/^I am redirected to Getting Started page$/, () => {
    return landingPage.assertCurrentUrlEqual(landingPage.pageUrl);
  });

  Then(/^I see Angular icon$/, () => {
    return gettingStartedPage.assertElementDisplayed(gettingStartedPage.angularLogo);
  });
});

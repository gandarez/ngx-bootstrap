import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LandingPo } from '../pages/landing.po';
import { safeClick, waitForVisible } from '../shared/helpers/wd-helper';
import { GettingStartedPo } from '../pages/gettingStarted.po';

defineSupportCode(({Given, When, Then}) => {
  const landingPage: LandingPo = new LandingPo();
  const gettingStartedPage: GettingStartedPo = new GettingStartedPo();

  Given(/^I am on the landing page$/, async () => {
   await browser.get(landingPage.pageUrl);
  });

  When(/^I click on Get Started button$/, async () => {
    await safeClick(landingPage.getStartedBtn);
  });

  Then(/^I am redirected to Getting Started page$/, async () => {
    await waitForVisible(gettingStartedPage.angularLogo);
    await gettingStartedPage.assertCurrentUrlEnds(gettingStartedPage.pageUrl);
  });

  Then(/^I see Angular icon$/, async () => {
    await gettingStartedPage.assertElementDisplayed(gettingStartedPage.angularLogo);
  });

  When(/^I click on GitHub button$/, async () => {
    await safeClick(landingPage.githubBtn);
  });
});

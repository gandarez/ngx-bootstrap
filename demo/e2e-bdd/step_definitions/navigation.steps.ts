import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LandingPo } from '../pages/landing.po';
import { checkPageRedirect, clickOnElemWithText, safeClick, waitForVisible } from '../shared/helpers/wd-helper';
import { GettingStartedPo } from '../pages/gettingStarted.po';
import { AccordionPo } from '../pages/accordion.po';

defineSupportCode(({Given, When, Then}) => {
  const landingPage: LandingPo = new LandingPo();
  const gettingStartedPage: GettingStartedPo = new GettingStartedPo();
  const accordion: AccordionPo = new AccordionPo();

  Given(/^I am on the Landing page$/, async () => {
    await browser.get(landingPage.pageUrl);
  });

  When(/^I click on Get Started button$/, async () => {
    await safeClick(landingPage.getStartedBtn);
  });

  Then(/^I am redirected to (.*) page$/, async (compName: string) => {
    const page = await checkPageRedirect(compName);
    await waitForVisible(page.contentTitle);
    await page.assertCurrentUrlEqual(page.pageUrl);
  });

  // Then(/^I am redirected to Getting Started page$/, async () => {
  //   await waitForVisible(gettingStartedPage.angularLogo);
  //   await gettingStartedPage.assertCurrentUrlEqual(gettingStartedPage.pageUrl);
  // });

  Then(/^I see Angular icon$/, async () => {
    await gettingStartedPage.assertElementDisplayed(gettingStartedPage.angularLogo);
  });

  When(/^I can click on GitHub button$/, async () => {
    await landingPage.assertElementToBeClickable(landingPage.githubBtn);
  });

  Then(/^It links to ngx-bootstrap repository$/, async () => {
    await landingPage.assertElementAttrEqual(landingPage.githubBtn, 'href', landingPage.githubRepoUrl);
  });

  Given(/^I am on the Getting Started page$/, async () => {
    await browser.get(gettingStartedPage.pageUrl);
  });

  When(/^I click on "(.*)" link in left navigation menu$/, async (componentName: string) => {
    await clickOnElemWithText(gettingStartedPage.selectorForLeftNav, componentName);
  });

  Then(/^I am redirected to Accordion page$/, async () => {
    await waitForVisible(accordion.contentTitle);

    await accordion.assertCurrentUrlEqual(accordion.pageUrl);
  });

  Then(/^I see Accordion demo content$/, async () => {
    await accordion.assertElementDisplayed(accordion.pageContent);
  });
});

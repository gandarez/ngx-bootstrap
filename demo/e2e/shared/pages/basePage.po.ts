import { $, $$, browser, ElementArrayFinder, ElementFinder } from 'protractor';
import { expect } from 'chai';

export class BasePagePo {
  headerLogo: ElementFinder = $('.logo');
  headerIconBtns: ElementArrayFinder = $$('.header-list>li');
  searchInput: ElementFinder = $('[name*="search"]');
  bsVersionBtns: ElementArrayFinder = $$('.bootstrap-version .btn');
  leftSideNavigationBtns: ElementArrayFinder = $$('.sidebar-list>li');

  async assertCurrentUrlEqual(template: string) {
    await expect(browser.getCurrentUrl()).to.eventually.equal(template);
  }

  async assertCurrentUrlEnds(text: string) {
    const currentUrl = await browser.getCurrentUrl();

    expect(currentUrl.endsWith(text)).to.equal(true);
  }

  async assertElementDisplayed(elementFinder: ElementFinder) {
    await expect(elementFinder.isDisplayed()).to.eventually.equal(true);
  }
}

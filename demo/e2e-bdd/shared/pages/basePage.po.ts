import { $, $$, browser, ElementArrayFinder, ElementFinder } from 'protractor';
import { expect } from 'chai';

export class BasePo {
  headerLogo: ElementFinder = $('.logo');
  headerIconBtns: ElementArrayFinder = $$('.header-list>li');
  searchInput: ElementFinder = $('[name*="search"]');
  bsVersionBtns: ElementArrayFinder = $$('.bootstrap-version .btn');
  selectorForLeftNav = '.sidebar-list>li';
  pageUrl: string;
  contentTitle: ElementFinder;

  async assertCurrentUrlEqual(template: string) {
    await expect(browser.getCurrentUrl()).to.eventually.equal(template);
  }

  async assertElementAttrEqual(elem: ElementFinder, attr: string, value: string) {
    await expect(elem.getAttribute(attr)).to.eventually.equal(value);
  }

  async assertElementDisplayed(elem: ElementFinder) {
    await expect(elem.isDisplayed()).to.eventually.equal(true);
  }

  async assertElementToBeClickable(elem: ElementFinder) {
    await expect(elem.isDisplayed()).to.eventually.equal(true);
    await expect(elem.isEnabled()).to.eventually.equal(true);
  }
}

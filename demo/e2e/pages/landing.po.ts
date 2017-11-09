import { $, browser, ElementFinder } from 'protractor';
import { expect } from 'chai';

export class LandingPo {
  pageUrl = 'https://valor-software.com/ngx-bootstrap/#/getting-started';
  getStartedBtn: ElementFinder = $('.btn-primary');

  assertCurrentUrlEqual(template: string) {
    return expect(browser.getCurrentUrl()).to.eventually.equal(template);
  }
}

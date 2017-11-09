import { $, ElementFinder } from 'protractor';
import { expect } from 'chai';

export class GettingStartedPo {
  pageUrl = 'https://valor-software.com/ngx-bootstrap/#/getting-started';
  angularLogo: ElementFinder = $('[alt*="angular logo"]');

  assertElementDisplayed(elementFinder: ElementFinder) {
    return expect(elementFinder.isDisplayed()).to.eventually.equal(true);
  }
}

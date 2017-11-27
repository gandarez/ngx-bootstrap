import { $, browser, ElementFinder } from 'protractor';
import { BasePo } from '../shared/pages/basePage.po';

export class GettingStartedPo extends BasePo {
  templateUrl = 'getting-started';
  pageUrl = (browser.baseUrl as string) + this.templateUrl;
  angularLogo: ElementFinder = $('[alt*="angular logo"]');
  contentTitle: ElementFinder = $('h2')[2];
}

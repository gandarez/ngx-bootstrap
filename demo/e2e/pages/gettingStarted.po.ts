import { $, ElementFinder } from 'protractor';
import { BasePagePo } from '../shared/pages/basePage.po';

export class GettingStartedPo extends BasePagePo {
  pageUrl = 'getting-started';
  angularLogo: ElementFinder = $('[alt*="angular logo"]');
}

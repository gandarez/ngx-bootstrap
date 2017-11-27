import { BasePo } from '../shared/pages/basePage.po';
import { $, browser, ElementFinder } from 'protractor';

export class AccordionPo extends BasePo {
  templateUrl = 'accordion';
  pageUrl = (browser.baseUrl as string) + this.templateUrl;
  contentTitle: ElementFinder = $('.content-header');
  pageContent: ElementFinder = $('.content');
}

import { $, ElementFinder } from 'protractor';
import { BasePagePo } from '../shared/pages/basePage.po';


export class LandingPo extends BasePagePo {
  pageUrl = '';
  getStartedBtn: ElementFinder = $('.btn-primary');
  githubBtn: ElementFinder = $('.btn-outline-secondary');
}

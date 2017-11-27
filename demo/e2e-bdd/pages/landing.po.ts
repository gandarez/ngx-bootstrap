import { $, browser, ElementFinder } from 'protractor';
import { BasePo } from '../shared/pages/basePage.po';


export class LandingPo extends BasePo {
  pageUrl = browser.baseUrl;
  githubRepoUrl = 'https://github.com/valor-software/ngx-bootstrap';
  getStartedBtn: ElementFinder = $('.btn-primary');
  githubBtn: ElementFinder = $('.btn-outline-secondary');
}

import { browser, ElementFinder, ExpectedConditions } from 'protractor';

const TIMEOUT = 5000;
let message: string;

export async function waitFor(condition: Function, optMessage?: string) {
  await browser.wait(condition, TIMEOUT, optMessage);
}

export async function waitForClickable(button: ElementFinder) {
  message = 'Waiting for clickable ';

  await waitFor(ExpectedConditions.elementToBeClickable(button), message + button.locator());
}

export async function waitForVisible(elem: ElementFinder) {
  message = 'Waiting for appearing element ';

  await waitFor(ExpectedConditions.visibilityOf(elem), message + elem.locator());
}


export async function waitForUrlContains(template: string) {
  message = 'Waiting for url containing template ';

  await waitFor(ExpectedConditions.urlContains(template), message + template);
}

export async function safeClick(button: ElementFinder) {
  await waitForClickable(button);

  await button.click();
}

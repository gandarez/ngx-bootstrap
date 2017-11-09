import { browser, ElementFinder, ExpectedConditions } from 'protractor';

const TIMEOUT = 5000;
let message: string;

export function waitFor(condition: Function, optMessage?: string) {
  return browser.wait(condition, TIMEOUT, optMessage);
}

export function waitForClickable(button: ElementFinder) {
  message = 'Waiting for clickable ';

  return waitFor(ExpectedConditions.elementToBeClickable(button), message + button.locator());
}

export async function safeClick(button: ElementFinder) {
  await waitForClickable(button);

  return button.click();
}

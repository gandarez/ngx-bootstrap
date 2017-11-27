import { browser, by, element, ElementFinder, ExpectedConditions as EC } from 'protractor';
import { AccordionPo } from '../../pages/accordion.po';
import { LandingPo } from '../../pages/landing.po';
import { GettingStartedPo } from '../../pages/gettingStarted.po';
import { BasePo } from '../pages/basePage.po';

const TIMEOUT = 5000;
let message: string;

export async function clickOnElemWithText(selectorToCompare: string, template: string) {
  const searchedElement = await element(by.cssContainingText(selectorToCompare, template));

  await safeClick(searchedElement);
}

export async function safeClick(button: ElementFinder) {
  await waitForClickable(button);

  await button.click();
}

export async function waitFor(condition: Function, optMessage?: string) {
  await browser.wait(condition, TIMEOUT, optMessage);
}

export async function waitForClickable(button: ElementFinder) {
  message = 'Waiting for clickable ';

  await waitFor(EC.elementToBeClickable(button), message + (button.locator() as string));
}

export async function waitForVisible(elem: ElementFinder) {
  message = 'Waiting for appearing element ';

  await waitFor(EC.visibilityOf(elem), message + (elem.locator() as string));
}

export async function checkPageRedirect(componentName: string): Promise<BasePo> {
  let page: BasePo;

  switch (componentName) {
    case 'Getting Started': {
      page = new GettingStartedPo();
      break;
    }
    case 'Accordion': {
      page = new AccordionPo();
      break;
    }

    default: {
      page = new LandingPo();
    }
  }

  return page;
}

// export async function checkPageRedirect(componentName: string) {
//   let page: BasePo;
//
//   switch (componentName) {
//     case 'Getting Started': {
//       page = new GettingStartedPo();
//       break;
//     }
//     case 'Accordion': {
//       page = new AccordionPo();
//       break;
//     }
//
//     default: {
//       page = new LandingPo();
//     }
//   }
//
//   return page;
// }

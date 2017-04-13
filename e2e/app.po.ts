import { browser, element, by } from 'protractor';

export class MySassAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('truc-root h1')).getText();
  }
}

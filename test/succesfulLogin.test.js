const Main = require ('../page/main.page.js');
const Minsida = require ('../page/minsida.page.js');

describe('Tests login functionality on vision.se', function () {
  before('Open main page', function () {
    browser.url('/');
    Main.headerLogo.waitForExist(10000);
  });

  it('should open min sida', function () {
    Main.minasidor.click();
    Minsida.loginWithUsernamePassword.waitForExist(10000);
  });

  it('should open login dialogue for user and password input', function () {
    Minsida.loginWithUsernamePassword.click();
    Minsida.loginInfoPersonalNumber.waitForExist(10000);
  });

  it.skip('should succeed to login because of correct user-information', function () {
    Minsida.loginInfoPersonalNumber.click();
    Minsida.enterUsername('correctusername');
    Minsida.loginInfoPassword.click();
    Minsida.enterPassword('correctpassword');
    Minsida.loginButton.click();
    Minsida.landingPage.waitForExist(10000);
  });
});

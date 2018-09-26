const Main = require ('../page/main.page.js');
const Minsida = require ('../page/minsida.page.js');

describe('Tests login functionality on vision.se', function () {
  before('Open main page', function () {
    browser.url('/');
    Main.headerLogo.waitForExist(30000);
  });

  it('should open min sida', function () {
    Main.minasidor.click();
    Minsida.loginWithUsernamePassword.waitForExist(30000);
  });

  it('should open login dialogue for user and password input', function () {
    Minsida.loginWithUsernamePassword.click();
    Minsida.loginInfoPersonalNumber.waitForExist(30000);
  });

  it('should fail to login because of incorrect user-information', function () {
    Minsida.loginInfoPersonalNumber.click();
    Minsida.enterUsername('1234567890');
    Minsida.loginInfoPassword.click();
    Minsida.enterPassword('abc123456');
    Minsida.loginButton.click();
    Minsida.loginError.waitForExist(30000);
  });
});

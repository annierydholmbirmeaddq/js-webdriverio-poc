
class Minsida {
  get loginWithUsernamePassword() { return $('.vision-list-group > a:nth-child(3)') };
  get loginInfoPersonalNumber() { return $('.fieldset #pn') };
  get loginInfoPassword() { return $('.fieldset #password') };
  get loginButton() { return $('.panel-vision-body button') };
  get loginError() {return $('.panel-vision-body .error-text') };
  get landingPage() {return $('.landingPage') };

  enterUsername(input) {
    const result = browser.elementActive();
    const activeElement = result.value && (result.value.ELEMENT || result.value["element-6066-11e4-a52e-4f735466cecf"]);
    if(activeElement){
      browser.elementIdValue(activeElement, input);
    }
  }

  enterPassword(input) {
    const result = browser.elementActive();
    const activeElement = result.value && (result.value.ELEMENT || result.value["element-6066-11e4-a52e-4f735466cecf"]);
    if(activeElement){
      browser.elementIdValue(activeElement, input);
    }
  }

}

module.exports = new Minsida;

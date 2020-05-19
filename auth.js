const { I } = inject();
const slr = require('./selectors.js');
const cfg = require('./config.js');

module.exports = {
    login: async function (login, pass) {
        I.amOnPage('/');
        I.clearCookie();
        I.click(slr.entry);
        I.waitForElement(slr.login);
        I.fillField(slr.login, login);
        I.fillField(slr.password, pass);
        I.click(slr.sign_in);
        const name = login.split('@')[0];
        await this.check_csrf(name);
    },

    logout_nlk: function () {
        I.click(slr.click_on_login);
        I.click(slr.exit);
    },

    logout_slk: function () {
        I.wait(3);
        I.amOnPage('/');
        I.click(slr.click_on_login);
        I.click('.i-post-link_type_logout');
        I.click('div.b-dialog__actions > button.b-button_color_primary');
    },

    check_csrf: async function(name) {
    I.waitForElement(`//*[contains(text(), '${name}') or contains(text(),'CSRF-токен')]`, 60);
    const token = await I.grabNumberOfVisibleElements('.b-authorize-form__error-item');
    if (token) {
        I.click(slr.sign_in);
        I.waitForElement(`//span[contains(text(), '${name}')]`, 60);
    }
}
}


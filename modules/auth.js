const { I } = inject();
const slr = require('./selectors.js');

module.exports = {
    async login(user, pw, text) {
        I.amOnPage('/');
        I.click(slr.entry);
        I.waitForElement(slr.login);
        I.fillField(slr.login, user);
        I.fillField(slr.password, pw);
        I.click(slr.sign_in);
        await this.checkCsrf(text);
    },

    logout_nlk: function () {
        I.click(slr.click_on_login);
        I.click(slr.exit);
    },

    logout_slk: function () {
        I.amOnPage('/');
        I.click(slr.click_on_login);
        I.click('.i-post-link_type_logout');
        I.click('div.b-dialog__actions > button.b-button_color_primary');
    },

    checkCsrf: async function (text) {
        I.waitForElement(`//*[contains(text(), '${text}') or contains(@class, "b-authorize-form__error-item")]`, 6);
        const token = await I.grabNumberOfVisibleElements('.b-authorize-form__error-item');
        console.log(token);
        console.log(typeof token);
        if (token) {
            I.click(slr.sign_in);
            I.waitForElement(`//*[contains(text(), '${text}')]`, 6);
        }    
    }
}



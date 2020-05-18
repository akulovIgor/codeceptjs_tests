const { I } = inject();
const slr = require('./selectors.js');
const cfg = require('./config.js');

module.exports = {
    login: function(login, pass) {
        I.amOnPage('/');
        I.click(slr.entry);
        I.fillField(slr.login, login);
        I.fillField(slr.password, pass);
        I.click(slr.sign_in);
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
    }
}

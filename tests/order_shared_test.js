const auth = require('../modules/auth.js');
const cfg = require('../modules/config.js');
const shared = require('../modules/shared.js');
const slr = require('../modules/selectors.js');


Feature('Заказ shared-хостинга', { retries: 1 });

Scenario('Добавление хостинга в корзину', async (I) => {
    name = cfg.users.nlk.login.split('@')[0];
    await auth.login(cfg.users.nlk.login, cfg.users.nlk.password, name);
    shared.chooseHostingPlan('Host-0')
        .choosePeriod(12);
    I.click(slr.mastersCart);
    pause();
    I.amOnPage('/shopcart/clear');
});
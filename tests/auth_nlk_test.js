const auth = require('../modules/auth.js');
const cfg = require('../modules/config.js');

Feature('Auth_nlk', { retries: 0 }); 

Scenario('auth_and_logout_nlk', async (I) => {
    name = cfg.users.nlk.login.split('@')[0];
    await auth.login(cfg.users.nlk.login, cfg.users.nlk.password, name);
    auth.logout_nlk();
});
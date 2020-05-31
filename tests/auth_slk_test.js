const auth = require('../modules/auth.js');
const cfg = require('../modules/config.js');


Feature('Auth_slk', { retries: 1 }); 

Scenario('auth_and_logout_slk', async (I) => {
    name = cfg.users.slk.login.split('@')[0];
    await auth.login(cfg.users.slk.login, cfg.users.slk.password, name);
    auth.logout_slk();
});
const auth = require('./auth.js');
const cfg = require('./config.js');

Feature('Auth_slk', { retries: 1 }); 

Scenario('auth_and_logout_slk', (I) => {
    name = cfg.users.slk.login.split('@')[0];
    auth.login(cfg.users.slk.login, cfg.users.slk.password, name);
    auth.logout_slk();
});
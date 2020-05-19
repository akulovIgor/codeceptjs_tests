const auth = require('./auth.js');
const cfg = require('./config.js');

Feature('Auth_slk', { retries: 1 }); 

Scenario('auth_and_logout_slk', (I) => {
    auth.login(cfg.users.slk.login, cfg.users.slk.password);
    I.see(cfg.users.slk.login.split('@')[0]);
    auth.logout_slk();
});
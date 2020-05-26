const auth = require('./auth.js');
const cfg = require('./config.js');

Feature('Auth_nlk', { retries: 0 }); 

Scenario('auth_and_logout_nlk', (I) => {
    name = cfg.users.nlk.login.split('@')[0];
    auth.login(cfg.users.nlk.login, cfg.users.nlk.password, name);
    auth.logout_nlk();
});
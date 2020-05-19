const auth = require('./auth.js');
const cfg = require('./config.js');

Feature('Auth_nlk', { retries: 1 }); 

Scenario('auth_and_logout_nlk', (I) => {
    auth.login(cfg.users.nlk.login, cfg.users.nlk.password);
    I.see(cfg.users.nlk.login.split('@')[0]);
    auth.logout_nlk();
});
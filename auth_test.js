const { I } = inject();
const auth = require('./login_and_logout.js');
const cfg = require('./config.js');

Feature('My First Test');

Scenario('login_and_logout', (I) => {
    auth.login(cfg.users.random.login, cfg.users.nlk.password);
    auth.login(cfg.users.nlk.login, cfg.users.random.password);
    auth.login('', '');
    auth.login(cfg.users.nlk.login, cfg.users.nlk.password);
    auth.logout_nlk();
    auth.login(cfg.users.slk.login, cfg.users.slk.password);
    auth.logout_slk();
});
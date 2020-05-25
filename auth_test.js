const auth = require('./auth.js');
const cfg = require('./config.js');

Feature('Кейсы с некорректной авторизацией', { retries: 1 }); 

Scenario('auth_incorrect_login', (I) => {
    auth.login(cfg.users.random.login, cfg.users.nlk.password);
    I.see('Неверная почта/логин или пароль.');
    I.clearCookie();
});

Scenario('auth_incorrect_pw', (I) => {
    auth.login(cfg.users.nlk.login, cfg.users.random.password);
    I.see('Неверная почта/логин или пароль.');
    I.clearCookie();
});

Scenario('auth_login_and_pw_not_entered', (I) => {
    auth.login('', '');
    I.see('Введите имя пользователя и пароль.');
    I.clearCookie();
});
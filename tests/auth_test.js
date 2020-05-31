const auth = require('../modules/auth.js');
const cfg = require('../modules/config.js');


Feature('Кейсы с некорректной авторизацией'); 

Scenario('auth_incorrect_login', async (I) => {
    error = 'Неверная почта/логин';
    auth.login(cfg.users.random.login, cfg.users.nlk.password, error);
});

Scenario('auth_incorrect_pw', async (I) => {
    error = 'Неверная почта/логин';
    auth.login(cfg.users.nlk.login, cfg.users.random.password, error);
});

Scenario('auth_login_and_pw_not_entered', async (I) => {
    error = 'Введите имя пользователя';
    auth.login('', '', error);
});
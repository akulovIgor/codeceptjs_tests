const newLocal = exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
        WebDriver: {
            url: "https://www.reg.ru/",
            browser: 'chrome',
            host: 'ggr.int.reg.ru',
            port: 4444,
            user: 'selenoid',
            key: 'selenoid',
            windowSize: '1920x1680',
            capabilities: {
                'selenoid:options': {
                    //browserName: 'chrome',
                    //version: '81.0',
                    name: 'local test',
                    sessionTimeout: '10m',
                    enableVNC: true
                }
            }
        }
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'webdriverTraining',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    },
    translation: 'ru-RU'
};

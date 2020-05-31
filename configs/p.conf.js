const newLocal = exports.config = {
    tests: '../tests/*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: "https://www.reg.ru/",
            show: true,
            windowSize: '1920x1680',
            waitForNavigation: "domcontentloaded",
        }
    },
    include: {
        I: '../steps_file.js'
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
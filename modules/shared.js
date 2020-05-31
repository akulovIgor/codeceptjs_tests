const { I } = inject();

module.exports = {
    /**
    * Выбирает тарифный план хостинга
    * @param {String} plan - тарифный план
   */
    chooseHostingPlan(plan) {
        const planMap = {
            'Host-Lite': ['econom', 'Host-Lite'],
            'Host-A': ['econom', 'Host-A'],
            'Host-B': ['econom', 'Host-B'],
            'Host-0': ['speed', 'Host-0'],
            'Host-1': ['speed', 'Host-1'],
            'Host-3': ['speed', 'Host-3'],
            'VIP-2': ['vip', 'VIP-2'],
            'VIP-3': ['vip', 'VIP-3'],
            'VIP-4': ['vip', 'VIP-4'],
            'Win-Lite': ['econom', 'Win-Lite'],
            'Win-A': ['econom', 'Win-A'],
            'Win-B': ['econom', 'Win-B'],
            'Win-0': ['speed', 'Win-0'],
            'Win-1': ['speed', 'Win-1'],
            'Win-3': ['speed', 'Win-3'],
        };

        I.amOnPage('/hosting/?use_new_order=yes');
        if (plan.includes('Win')) {
            I.amOnPage('/hosting/windows');
        }

        if (plan === 'free') {
            const testLink = '.l-padding_right-huge.l-rel';

            I.click('//div[contains(text(), "Эконом")]');
            I.waitForElement(testLink);
            I.scrollTo(testLink);
            I.click(testLink);
            I.dontSee('.b-message_period-disabled');
            I.waitForElement('.b-hosting-test-period__button-start');
            I.click('.b-hosting-test-period__button-start');
        }
        else {
            const [category, qaClass] = planMap[plan];
            const tarif = '//*[contains(@class,"divider_no") or contains(@class,"l'
                + `-width_full")]//button[contains(@onclick, '${qaClass}')]`;

            I.waitForElement(`//*[@data-tab-name="${category}"]`);
            I.click(`//*[@data-tab-name="${category}"]`);
            I.waitForElement(`//button[contains(@onclick, '${qaClass}')]`);
            I.waitForElement(tarif);
            I.scrollTo(tarif);
            I.click(tarif);
            I.waitForElement(`//b[contains(text(), '${plan}')]`);
        }

        this.plan = plan;

        return this;
    },

    /**
     * Выбирает период заказа хостинга
     * @param {Number} period - количество месяцев
     */
    choosePeriod(period) {
        const selector = `.choice-item .pricing.qa_pricing-period_${period}`;

        I.waitForElement(selector);
        I.scrollTo(selector);
        I.click(selector);

        return this;
    }
}
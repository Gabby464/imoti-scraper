export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.imot.bg/', { waitUntil: 'networkidle0' });
    }

    async acceptCookies() {
        await this.page.click('#cookiescript_accept');
    }
}


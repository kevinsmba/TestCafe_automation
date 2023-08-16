import DemoBlazePage from './DemoBlazePage.js';
import { t } from 'testcafe';

const mainSelectors = new demoblazeSelectors();
export default class MainActionsDemoBlaze {
    constructor() {}

    async clickSignUp() {
        await t.click(mainSelectors.signUp);
    }
}
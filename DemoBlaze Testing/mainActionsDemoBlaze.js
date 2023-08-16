import demoblazeSelectors from './DemoBlazePage.js';
import { t } from 'testcafe';

const mainSelectors = new demoblazeSelectors();
export default class MainActionsDemoBlaze {
    constructor() {}

    async clickSignUp() {
        await t.click(mainSelectors.signUp);
    }
    async TypeUsername(username){
        await t.typeText(mainSelectors.typeUsername, username);
    }
    async TypePassword(password){
        await t.typeText(mainSelectors.typePassword, password);
    }
    async clickSubmitAccountTrue(){
        await t.setNativeDialogHandler(() => true);
        await t.click(mainSelectors.submitAccount);
    }
    async clickSubmitAccountFalse(){
        await t.setNativeDialogHandler(() => false);
        await t.click(mainSelectors.submitAccount);
    }
}
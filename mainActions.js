import  { demoblazeSelectors , DropdownSelectors } from './mainPage.js';
import { t } from 'testcafe';

const mainSelectors = new demoblazeSelectors();
export class MainActionsDemoBlaze {
    constructor() { }

    async clickSignUp() {
        await t.click(mainSelectors.signUp);
    }
    async TypeUsername(username) {
        await t.typeText(mainSelectors.typeUsername, username);
    }
    async TypePassword(password) {
        await t.typeText(mainSelectors.typePassword, password);
    }
    async clickSubmitAccountTrue() {
        await t.setNativeDialogHandler(() => true);
        await t.click(mainSelectors.submitAccount);
    }
    async clickSubmitAccountFalse() {
        await t.setNativeDialogHandler(() => false);
        await t.click(mainSelectors.submitAccount);
    }
}
const mainDropdown = new DropdownSelectors();
export class ActionsDropdown {
    constructor() { }
    
    async selectOptionDropdown() {
        await t.click(mainDropdown.dropDownList);
        await t.click(mainDropdown.testCafeInterface.withText('Both'));

    }
}
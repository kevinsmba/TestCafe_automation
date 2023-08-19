import { Selector } from 'testcafe';

export default class demoblazeSelectors {
    constructor() {
        this.signUp = Selector('#signin2');
        this.typeUsername = Selector('#sign-username');
        this.typePassword = Selector('#sign-password');
        this.submitAccount = Selector('button.btn.btn-primary').withText('Sign up');
    }
}
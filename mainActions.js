import MainPage from './mainPage';
import { t } from 'testcafe';

const mainPage = new MainPage();
export default class MainActions {
    constructor() {}

    async typeName(name) {
        await t.typeText(mainPage.nameDev, name);
    }

    async submitName(){
        await t.click(mainPage.submitButton);
    }

     articleHeader(){
        return mainPage.articleHeader;
    }
}
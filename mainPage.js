import { Selector } from 'testcafe';

export default class MainPage {
    constructor() {
        this.nameDev = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
        this.articleHeader = Selector('#article-header');
        this.signUp = Selector('#signin2');
    }
}
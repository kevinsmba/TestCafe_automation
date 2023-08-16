import MainActions from "./mainActions";
import { t } from 'testcafe';

fixture('Check Name is submitted')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    const mainActions = new MainActions();
    await mainActions.typeName('John Doe');
    await mainActions.submitName();
    await t.expect(mainActions.articleHeader().innerText).eql('Thank you, John Doe!');git 
});
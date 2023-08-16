import MainActionsDemoBlaze from "./mainActionsDemoBlaze.js";
import { t } from 'testcafe';

fixture('Complete the sign up for a new customer')
    .page('https://demoblaze.com/');

test('Complete the sign up process', async t => {
    const mainActionsD = new MainActionsDemoBlaze();
    await mainActionsD.clickSignUp();
});

/*test('Verify the sign up confirmation', async t => {
    const mainActions = new MainActions();
    await mainActions.typeName('John Doe');
    await mainActions.submitName();
    await t.expect(mainActions.articleHeader().innerText).eql('Thank you, John Doe!');git 
});*/
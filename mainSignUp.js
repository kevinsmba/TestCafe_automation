import { MainActionsDemoBlaze } from "./mainActionsDemoBlaze.js";
import { t } from 'testcafe';


fixture('Complete the sign up for a new customer')
    .page('https://demoblaze.com/');

test('Complete the sign up process', async t => {
    const mainActionsD = new MainActionsDemoBlaze();
    await mainActionsD.clickSignUp();
    await mainActionsD.TypeUsername('Kevin Torres');
    await mainActionsD.TypePassword('1234Jkln');
    await mainActionsD.clickSubmitAccountTrue();
});
/*
test('Verify that the account cannot be created again', async t => {
    const mainActionsD = new MainActionsDemoBlaze();
    await mainActionsD.clickSignUp();
    await mainActionsD.TypeUsername('Kevin Torres');
    await mainActionsD.TypePassword('1234Jkln');
    await mainActionsD.clickSubmitAccountFalse();
});*/

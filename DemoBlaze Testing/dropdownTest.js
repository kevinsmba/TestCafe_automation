import { ActionsDropdown, mainActionsDemoBlaze } from '../mainActions.js';
import { t } from 'testcafe';


fixture('Complete the sign up for a new customer')
    .page('https://devexpress.github.io/testcafe/example/');

test('Select an option from the Dropdown', async t => {
    const dropdownBoth = new ActionsDropdown();
    await dropdownBoth.selectOptionDropdown();
});
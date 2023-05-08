const { Given, When, Then } = require('@cucumber/cucumber');
const pass = 'input[name="password"]';
const identification = 'input[name="identification"]';
const assert = require('assert');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$(identification);
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$(pass);
    return await element.setValue(password);
});

When('I click general', async function () {
    let element = await this.driver.$("section.gh-nav-body").$('a[href="#/settings/general/"]');
    return await element.click();
});

When('I click sign in', async function () {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});
//
When('I click expand title and description', async function () {
    let element = await this.driver.$$('.gh-setting-first > .gh-setting-action > button')[0];
    return await element.click();
});

When('I type title {kraken-string}', async function (title) {
    let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
    return await element.setValue(title);
});

When('I type description {kraken-string}', async function (description) {
    let element = await this.driver.$$(".ember-text-field.gh-input.ember-view")[1];
    return await element.setValue(description);
});

When('I user save settings', async function () {
    let element = await this.driver.$(".gh-canvas-header > .view-actions > button");
    return await element.click();
});

Then('I title was updated', async function () {
    try {
        let element = await this.driver.$(".gh-nav-menu-details-blog");
        return assert.equal("Nuevo Título", element.getText());
    } catch (error) {
        return error;
    }
});
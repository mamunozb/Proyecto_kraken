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

When('I click post', async function () {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I click new post', async function () {
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
}); 

When('I enter name post {kraken-string}', async function (post) {
    let element = await this.driver.$('textarea[placeholder="Post Title"]');
    return await element.setValue(post);
});

When('I enter content post {kraken-string}', async function (contpost) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.click();
    return await element.setValue(contpost);
});

Then('I search post {kraken-string}', async function (post) {
    try {
        let element = await this.driver.$(`h3=${post}`);
        return await element.click();
    } catch (error) {
        return error;
    }
});

When('I click settings post', async function () {
    let element = await this.driver.$('button[title="Settings"]');
    return await element.click();
}); 

When('I assing tag to post {kraken-string}', async function (tag) {
    let element = await this.driver.$('input[type="Search"]');
    await element.click();
    let eletag = await this.driver.$(`li=${tag}`);
    return await eletag.click();
}); 

When('I close settings post', async function () {
    let element = await this.driver.$('button[aria-label="Close"]');
    return await element.click();
});

When('I click update post', async function () {
    try {
        let element = await this.driver.$('span=Udate');
        return await element.click();
    } catch (error) {
        let element = await this.driver.$('span=Publish');
        return await element.click();
    }
}); 


When('I click confirm update post', async function () {
    try {
        let element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    } catch (error) {
        element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    }
}); 

Then('I validate post publication', async function () {
    try {
        let element = await this.driver.$('span=Published');
        return assert.equal("Publish", element.getText());
    } catch (error) {
        return error;
    }
});

When('I click page', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I click new page', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
}); 

When('I enter name page {kraken-string}', async function (page) {
    let element = await this.driver.$('textarea[placeholder="Page Title"]');
    return await element.setValue(page);
});

When('I enter content page {kraken-string}', async function (contpage) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.click();
    return await element.setValue(contpage);
});

Then('I search page {kraken-string}', async function (page) {
    try {
        let element = await this.driver.$(`h3=${page}`);
        return await element.click();
    } catch (error) {
        return error;
    }
});

When('I click settings page', async function () {
    let element = await this.driver.$('button[title="Settings"]');
    return await element.click();
}); 

When('I assing tag to page {kraken-string}', async function (tag) {
    let element = await this.driver.$('input[type="Search"]');
    await element.click();
    let eletag = await this.driver.$(`li=${tag}`);
    return await eletag.click();
}); 

When('I close settings page', async function () {
    let element = await this.driver.$('button[aria-label="Close"]');
    return await element.click();
});

When('I click update page', async function () {
    try {
        let element = await this.driver.$('span=Udate');
        return await element.click();
    } catch (error) {
        let element = await this.driver.$('span=Publish');
        return await element.click();
    }
}); 


When('I click confirm update page', async function () {
    try {
        let element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    } catch (error) {
        element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    }
}); 

Then('I validate page publication', async function () {
    try {
        let element = await this.driver.$('span=Published');
        return assert.equal("Publish", element.getText());
    } catch (error) {
        return error;
    }
});


Then('I validate login error message', async function () {
    let element = await this.driver.$('p.main-error');
    return assert.notEqual(element, undefined)
});

Then('I validate login success', async function () {
    let element = await this.driver.$('.gh-nav-menu-details-blog');
    return assert.notEqual(element, undefined)
});

When('I expand profile options', async function () {
    let element = await this.driver.$('.gh-nav-bottom > div.pointer');
    return await element.click();
});

When('I click on logout', async function () {
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
});

Then('I am redirected to login page', async function () {
    let url = await this.driver.getUrl();
    return assert.equal(url.includes('/ghost/#/signin'), true)
});

When('I expand publish post', async function () {
    let element = await this.driver.$('div.gh-publishmenu-trigger');
    return await element.click();
});

When('I click publish post', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    return await element.click();
});

Then('I validate post was published', async function () {
    let element = await this.driver.$('div.gh-publishmenu-trigger');
    return assert.equal((await element.getText()).trim(), "Update");
});

When('I expand setting post', async function () {
    let element = await this.driver.$('button.post-settings');
    return await element.click();
});

When('I scroll to buttom', async function () {
    let element = await this.driver.$('.settings-menu-content');
    return await element.scrollIntoView({ block: "end" });
});

When('I click delete post', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    return await element.click();
});

When('I click to confirm delete post', async function () {
    let element = await this.driver.$('.modal-content > .modal-footer > button.gh-btn-red');
    return await element.click();
});

Then('I am redirected to posts list', async function () {
    let url = await this.driver.getUrl();
    return assert.equal(url.includes('ghost/#/posts'), true)
});

Then('I search post {kraken-string} in the list', async function (post) {
    let index = await this.driver.$$('.posts-list li > a > h3')
        .findIndex(async x => (await x.getText()).trim() == post)
    assert.notEqual(index, -1);
    let elementLinks = await this.driver.$$(`.posts-list li > a`);
    return await elementLinks[index].click();
});
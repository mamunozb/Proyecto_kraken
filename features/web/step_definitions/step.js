const { Given, When, Then } = require('@cucumber/cucumber');
const pass = 'input[name="password"]';
const identification = 'input[name="identification"]';
const assert = require('assert');
let slug;
let urlpost;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$(identification);
    return await element.setValue(email);
});


When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$(pass);
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});

When('I click additional', async function() {
    let element = await this.driver.$('div[class="gh-nav-bottom"]');
    return await element.click();
});

When('I click sign out', async function () {
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
});

When('I click tag', async function () {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('I click new tag', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
}); 

When('I click save', async function () {
    let element = await this.driver.$('span=Save');
    return await element.click();
}); 

When('I enter name tag {kraken-string}', async function (tag) {
    let element = await this.driver.$('input[name="name"]');
    return await element.setValue(tag);
});

Then('I validate title tag {kraken-string}', async function (tag) {
    let element = await this.driver.$('h2.gh-canvas-title');
    let text = await element.getText();
    return assert.equal(text, `Tags\n${tag}` );
});

When('I get text value slug', async function () {
    let eleslug = await this.driver.$('input[name="slug"]');
    this.slug = await eleslug.getValue();
    return this.slug;
});

When('I click tag list', async function () {
    let element = await this.driver.$(`a[href="#/tags/${this.slug}/"]`);
    return await element.click();
});

When('I click delete tag', async function () {
    let element = await this.driver.$('span=Delete tag');
    return await element.click();
});

When('I click confirm delete', async function () {
    let element = await this.driver.$('span=Delete');
    return await element.click();
});

Then('I search tag', async function () {
    try {
        let element = await this.driver.$(`a[href="#/tags/${this.slug}/"]`);
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

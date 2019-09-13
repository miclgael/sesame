/* Test environment variables are working */

/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

/*
Called when the item has been removed.
We'll just log success here.
*/
function onRemoved() {
    console.log("Item removed successfully");
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
    console.log(`Error: ${error}`);
}

/*
Create all the context menu items.
*/
browser.menus.create({
    id: "tab-localhost",
    title: 'Reopen as localhost',
    contexts: ["tab"]
}, onCreated);

browser.menus.create({
    id: "tab-staging",
    title: 'Reopen as staging',
    contexts: ["tab"]
}, onCreated);

browser.menus.create({
    id: "tab-www",
    title: 'Reopen as www',
    contexts: ["tab"]
}, onCreated);

var checkedState = true;

/*
Toggle checkedState, and update the menu item's title
appropriately.

Note that we should not have to maintain checkedState independently like
this, but have to because Firefox does not currently pass the "checked"
property into the event listener.
*/
function updateCheckUncheck() {
    checkedState = !checkedState;
    if (checkedState) {
        browser.menus.update("check-uncheck", {
            title: browser.i18n.getMessage("menuItemUncheckMe"),
        });
    } else {
        browser.menus.update("check-uncheck", {
            title: browser.i18n.getMessage("menuItemCheckMe"),
        });
    }
}


function identifyCurrentTab(tab) {
    console.log(tab.url)
}

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.menus.onClicked.addListener((info, tab) => {

    // info = the menu item info
    // tab = the tab that was clicked info

    switch (info.menuItemId) {
        case "tab-localhost":
            console.log(info, tab);
            identifyCurrentTab(tab)
            break;
        case "tab-staging":
            console.log(info, tab);
            break;
        case "tab-www":
            console.log(info, tab);
            break;
    }
});
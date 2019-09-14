const contexts = ['localhost', 'staging', 'www'];

/**
 * Create a context menu items (right click on any tab)
 * @param {Array} contexts 
 */
function createMenuItems(contexts) {
    contexts.forEach(label => {
        browser.menus.create({
            id: `menu-item-${label}`,
            title: `Reopen as ${label}`,
            contexts: ["tab"]
        }, onCreated);
    });
}



/* Fetch from the storage objects in */
const getting = browser.storage.sync.get();
      getting.then(checkOptions, onError);

function checkOptions(result) {
    console.log('from options', result);
};


function onCreated() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

function onRemoved() {
    console.log("Item removed successfully");
}

function onError(error) {
    console.log(`Error: ${error}`);
}



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
        case "menu-item-localhost":
            console.log(info, tab);
            identifyCurrentTab(tab)
            break;
        case "menu-item-staging":
            console.log(info, tab);
            break;
        case "menu-item-www":
            console.log(info, tab);
            break;
    }
});
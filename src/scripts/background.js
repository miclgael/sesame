import { updateUri } from "../src/helpers/updateUri";

const contexts = ["localhost", "staging", "www"];

/**
 * Create a context menu items (right click on any tab)
 * @param {Array} contexts
 */
contexts.forEach((label) => {
  browser.menus.create(
    {
      id: `menu-item-${label}`,
      title: `Reopen as ${label}`,
      contexts: ["tab"],
    },
    onCreated
  );
});

/* Also add a link to the Options page */
browser.menus.create(
  {
    id: `menu-item-options`,
    title: `   Options`,
    contexts: ["tab"],
  },
  onCreated
);

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

function identifyCurrentTab(tab) {
  console.log(tab.url);
}

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.menus.onClicked.addListener((info, tab) => {
  function onError(e) {
    console.log(`eee Error: ${e}`);
  }
  var getting = browser.storage.sync.get();

  switch (info.menuItemId) {
    case "menu-item-localhost":
      console.log(tab);

      getting.then((result) => {
        browser.tabs.update(tab.id, {
          url: updateUri(tab.url, result.localhost),
        });
      }, onError);

      break;
    case "menu-item-staging":
      getting.then((result) => {
        browser.tabs.update(tab.id, {
          url: updateUri(tab.url, result.staging),
        });
      }, onError);

      break;
    case "menu-item-www":
      getting.then((result) => {
        browser.tabs.update(tab.id, {
          url: updateUri(tab.url, result.www),
        });
      }, onError);

      break;
    case "menu-item-options":
      function onOpened() {
        console.log(`Options page opened`);
      }
      function onError() {
        console.log(`Options page error`);
      }
      var opening = browser.runtime.openOptionsPage();
      opening.then(onOpened, onError);

      break;
  }
});

/*
Default settings. Initialize storage to these values.
*/
var envVars = {
    localhost: "http://localhost:8888",
    staging: "https://staging.funky-cool-website.com",
    www: "https://funky-cool-website.com"
}

/*
Generic error logger.
*/
function onError(e) {
    console.error('efrom options', e);
}

/*
On startup, check whether we have stored settings.
If we don't, then store the default settings.
*/
function checkStoredSettings(storedSettings) {
    if (!storedSettings.envVars) {
        browser.storage.local.set({
            envVars
        });
    }
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);

/* Interacting with form */
// document.querySelector('#options');

document.querySelector('#options').addEventListener('submit', (e) => {
    
    e.preventDefault();

    envVars.local = document.getElementById("localhost").value;
    envVars.staging = document.getElementById("staging").value;
    envVars.www = document.getElementById("www").value;

    browser.storage.local.set({
        envVars
    });

});
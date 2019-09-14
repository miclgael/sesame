/* Store references to the form inputs on the options page */
const FormInputLocal = document.getElementById("localhost").value;
const FormInputStaging = document.getElementById("staging").value;
const FormInputProduction =  document.getElementById("www").value;

/**
 * Save current values of the form into local storage object
 * @param {*} e - event object
 */
function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        localhost: FormInputLocal,
        staging: FormInputStaging,
        www: FormInputProduction
    });
}

/**
 * Fetch from the local storage object and apply values back to the form
 */
function restoreOptions() {

    // 1. Set defaults if there's nothing in the local storage yet
    function setCurrentChoice(result) {
        FormInputLocal = result.localhost || "http://localhost:8888";
        FormInputStaging = result.staging || "https://staging.yourdomain.com";
        FormInputProduction = result.www  || "https://www.yourdomain.com";
    }

    // 2. Print an error message to `about:devtools-toolbox`
    function onError(error) {
        console.log(`Error: ${error}`);
    }

    // 3. Get and set.
    var getting = browser.storage.sync.get();
        getting.then(setCurrentChoice, onError);

}

/* Handle events here */
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("options").addEventListener("submit", saveOptions);
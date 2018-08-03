chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        "active": true
    });
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('option.html'));
    }
});
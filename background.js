chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(null, {file: "downloadVideo.js"});
});

chrome.runtime.onMessage.addListener((args, sender, response) => {
    let url = args.url
    let filename = args.filename

    chrome.downloads.download({
        url: url,
        filename: filename,
        saveAs: false
    });
});

function getVideoInfo() {
    try {
        var url = document.querySelector('video').src;
    }
    catch(error) {
        alert('failed to download');
    }

    try {
        var filename = document.querySelector('.wider').innerText + ' - ' + document.querySelector('.class-date').innerText + '.mp4';
    }
    catch(error) {
        alert('failed to name file');
    }

    return {url: url, filename: filename};    
};

chrome.runtime.sendMessage(getVideoInfo())

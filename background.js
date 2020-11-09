chrome.browserAction.onClicked.addListener(() => {
    t = chrome.windows.create({
        width: 200,
        height: 400,
        type: 'popup',
        focused: true,
        url: './index.html'
    }, (createdWindow => {
        setInterval(() => {
            console.log('attention');
            chrome.windows.update(createdWindow.id, {focused: true, drawAttention: true});
        }, 30000);
    }));
})


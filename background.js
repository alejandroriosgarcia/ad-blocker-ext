chrome.webRequest.onBeforeRequest.addListener(
    // contain details about request that we are about to send, blocks request
    function(details) { return {cancel:true }},
    { urls: filters},
    ["blocking"]
)
// Common ad websites, all requests to these websites are blocked
filters = [
    "*://*.doublelick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*zedo.com/*",
]
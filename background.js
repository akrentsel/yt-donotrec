// background.js
let isRunning = false;

chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.url.includes("youtube.com")) {
    if (isRunning) {
      chrome.tabs.sendMessage(tab.id, {action: "stop"});
      isRunning = false;
    } else {
      chrome.tabs.sendMessage(tab.id, {action: "start"});
      isRunning = true;
    }
  } else {
    alert("This extension only works on YouTube pages.");
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes("youtube.com")) {
    chrome.tabs.executeScript(tabId, { file: "content.js" });
  }
});
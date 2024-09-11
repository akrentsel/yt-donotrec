let isRunning = false;

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("youtube.com")) {
    if (isRunning) {
      chrome.tabs.sendMessage(tab.id, {action: "stop"});
      isRunning = false;
    } else {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["content.js"]
      }).then(() => {
        chrome.tabs.sendMessage(tab.id, {action: "start"});
        isRunning = true;
      });
    }
  } else {
    chrome.action.setPopup({popup: "This extension only works on YouTube pages."});
  }
});
// content.js
let isProcessing = false;
let shouldStop = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "start") {
    if (!isProcessing) {
      isProcessing = true;
      shouldStop = false;
      clickDoNotRecommend();
    }
  } else if (request.action === "stop") {
    shouldStop = true;
  }
});

async function clickDoNotRecommend() {
  console.log("Extension activated: Starting to process recommended videos");
  
  const menuButtons = document.querySelectorAll('ytd-compact-video-renderer ytd-menu-renderer yt-icon-button#button');
  console.log(`Found ${menuButtons.length} recommended videos`);
  
  let processedCount = 0;
  
  for (let index = 0; index < menuButtons.length; index++) {
    if (shouldStop) {
      console.log("Processing stopped by user");
      break;
    }

    const button = menuButtons[index];
    console.log(`Processing video ${index + 1}`);
    
    const videoRenderer = button.closest('ytd-compact-video-renderer');
    videoRenderer.style.border = '2px solid red';
    
    button.click();
    console.log("Clicked menu button");
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const menuItems = document.querySelectorAll('ytd-menu-service-item-renderer');
    const doNotRecommendOption = Array.from(menuItems).find(item => 
      item.textContent.includes("Don't recommend channel")
    );
    
    if (doNotRecommendOption) {
      console.log("Found 'Don't recommend channel' option");
      doNotRecommendOption.click();
      processedCount++;
      console.log("Clicked 'Don't recommend channel'");
      
      const indicator = document.createElement('div');
      indicator.textContent = '✓ Processed';
      indicator.style.cssText = 'position: absolute; top: 0; right: 0; background: green; color: white; padding: 5px; z-index: 9999;';
      videoRenderer.style.position = 'relative';
      videoRenderer.appendChild(indicator);
    } else {
      console.log("'Don't recommend channel' option not found");
    }
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    button.click();
    console.log("Closed menu");
    
    videoRenderer.style.border = '';
    
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`Finished processing. ${processedCount} out of ${menuButtons.length} videos processed.`);
  alert(`Processed ${processedCount} out of ${menuButtons.length} recommended videos.`);
  
  isProcessing = false;
}
# YouTube "Do Not Recommend Channel" Extension

## Overview

This browser extension automates the process of clicking the "Do not recommend channel" option for recommended videos on YouTube. It's designed for users who feel that YouTube's algorithm knows them too well and want to reduce the precision of recommendations.

This project was inspired by Ethan Zuckerman's work on algorithmic choice. For more details, see [this article](https://www.inc.com/associated-press/lawsuit-seeksfacebook-users-right-to-unfollow-content.html) about a lawsuit seeking Facebook users' right to unfollow content.

## Features

- Automatically clicks "Do not recommend channel" for multiple recommended videos
- Visual indicators for processed videos
- Interruptible processing (can be stopped mid-run)
- Works on scrolled content

## Installation

1. Clone this repository or download the source code.
2. Open your browser's extension management page:
   - For Chrome: Navigate to `chrome://extensions/`
   - For Firefox: Navigate to `about:addons`
3. Enable "Developer mode" (usually a toggle switch in the top right).
4. Click "Load unpacked" (Chrome) or "Load Temporary Add-on" (Firefox).
5. Select the directory containing the extension files.

## Usage

1. Navigate to YouTube.
2. Click the extension icon in your browser toolbar to start processing recommended videos.
3. The extension will mark processed videos with a green checkmark.
4. Scroll down to load more videos if desired.
5. Click the extension icon again to process newly loaded videos.
6. To stop processing mid-run, click the extension icon again.

## Files

- `manifest.json`: Extension configuration
- `background.js`: Handles extension icon clicks and communication with content script
- `content.js`: Contains the main logic for processing videos

## Customization

You can modify the `content.js` file to adjust the extension's behavior, such as changing the visual indicators or adjusting processing speed.

## Disclaimer

This extension is for educational purposes only. Be aware that automatically interacting with YouTube's interface may violate their terms of service. Use responsibly and at your own risk.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/yourusername/youtube-do-not-recommend-extension/issues) if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)
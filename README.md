# Rule34dle infinite daily challenge

Name is straightforward ! 

## Quick Start

Code : 
```js
for (let i = localStorage.length - 1; i >= 0; i--) {
  const key = localStorage.key(i);
  if (/^daily_game_\d{4}-\d{2}-\d{2}$/.test(key)) {
    console.log("Deleting:", key);
    localStorage.removeItem(key);
  }
}
console.log("Reload the page to play again!");

```
<details>
<summary>🛠️ How to Open Developer Tools and Run Code</summary>

### Step 1: Open Developer Tools

<details>
<summary>Chrome/Edge/Brave</summary>

- **Windows/Linux**: Press `Ctrl + Shift + I` or `F12`
- **Mac**: Press `Cmd + Option + I`
- **Alternative**: Right-click on any webpage - "Inspect" - Click "Console" tab

</details>

<details>
<summary>Firefox</summary>

- **Windows/Linux**: Press `Ctrl + Shift + K` or `F12`
- **Mac**: Press `Cmd + Option + K`
- **Alternative**: Right-click on any webpage ( "Inspect Element" - Click "Console" tab

</details>


### Step 2: Paste and Run Code

1. Copy the JavaScript code from this repository
3. Click in the console area (you'll see a cursor after `>`)
4. Paste the code using `Ctrl+V` (Windows/Linux) or `Cmd+V` (Mac)
5. Press `Enter` to run the code

### Step 3: View Results

If it works it will say it

</details>

## Installation

No installation required! This project runs directly in your browser's developer console.

## Contributing

Feel free to submit issues and enhancement requests!

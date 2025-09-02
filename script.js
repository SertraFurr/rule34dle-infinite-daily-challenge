for (let i = localStorage.length - 1; i >= 0; i--) {
  const key = localStorage.key(i);
  if (/^daily_game_\d{4}-\d{2}-\d{2}$/.test(key)) {
    console.log("Deleting:", key);
    localStorage.removeItem(key);
  }
}
console.log("Reload the page to play again!");

const moods = [
    { emoji: "😊", color: "#FFEB3B" },
    { emoji: "😎", color: "#00BCD4" },
    { emoji: "😡", color: "#F44336" },
    { emoji: "😴", color: "#9E9E9E" },
    { emoji: "🤪", color: "#E91E63" },
    { emoji: "🥳", color: "#4CAF50" },
    { emoji: "😭", color: "#2196F3" }
  ];
  
  function changeMood() {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    document.getElementById("mood").textContent = randomMood.emoji;
    document.body.style.backgroundColor = randomMood.color;
  }
  
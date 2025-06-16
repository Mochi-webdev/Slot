const diceUnicode = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

  let counter = 0;
  const maxSpins = 15; // Wie oft das Gesicht wechselt
  const interval = setInterval(() => {
    const rand1 = Math.floor(Math.random() * 6);
    const rand2 = Math.floor(Math.random() * 6);

    dice1.textContent = diceUnicode[rand1];
    dice2.textContent = diceUnicode[rand2];

    dice1.style.transform = `rotate(${Math.random() * 360}deg)`;
    dice2.style.transform = `rotate(${Math.random() * 360}deg)`;

    counter++;
    if (counter >= maxSpins) {
      clearInterval(interval);
    }
  }, 70);
}

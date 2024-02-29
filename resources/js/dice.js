document.addEventListener('DOMContentLoaded', function() {
    const lastRolled = document.getElementById('last-rolled');
    const diceImage = document.getElementById('dice-image');
    const diceText = document.getElementById('dice-text');
    const rollBtn = document.getElementById('roll-btn');
    const secondDiceText = document.getElementById('second-dice-text');
    const secondDiceDisplay = document.getElementById('second-dice-display');
    let allRolls = [];

    function rollDice() {
        console.log('User pressed the roll dice button');

        const result = Math.floor(Math.random() * 20) + 1;

        allRolls.push(result);

        lastRolled.textContent = allRolls;
        diceText.textContent = result;

        const diceImagePath = 'resources/images/d20.png';
        diceImage.style.backgroundImage = `url(${diceImagePath})`;
    }

    rollBtn.onclick = function() {
        rollDice();
    };
});

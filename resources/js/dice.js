document.addEventListener(`DOMContentLoaded`, function() {
    const lastRolled = document.getElementById("last-rolled");
    const diceImage = document.getElementById("dice-image");
    const rollBtn = document.getElementById("roll-btn");
    let allRolls = [];
    let diceMap = {
        1: '../resources/images/dice1.png',
        2: '../resources/images/dice2.png',
        3: '../resources/images/dice3.png',
        4: '../resources/images/dice4.png',
        5: '../resources/images/dice5.png',
        6: '../resources/images/dice6.png'
    };

    function rollDice() {
        const result = Math.floor(Math.random() * 6) + 1;

        allRolls.push(result);

        lastRolled.textContent = allRolls;

        diceImage.style.backgroundImage = `url(${diceMap[result]})`;
    }

    rollBtn.onclick = function() {
        rollDice();
    };
});

const buttonArray = document.querySelectorAll('.js-btn');
let round = 0;
const numberPlayer = document.getElementById('number-player');

for (const button of buttonArray) {
    button.addEventListener('click', function () {
        this.setAttribute("disabled", "true");
        
        this.classList.add(round % 2 === 0 ? 'button--cross' : 'button--circle');
        
        round++;
        
        numberPlayer.textContent = getPlayerNumber(round);
        console.log(getPlayerNumber (round));
    });

}

/**
 * get current player's number from game round.
 * @param {number} round round's number
 * @returns {number} player's number (1 or 2)
 */
function getPlayerNumber(round){
return round % 2 + 1;
}

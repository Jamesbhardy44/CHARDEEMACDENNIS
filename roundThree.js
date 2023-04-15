const challenges = [
    {
        type: 'Spirit',
        challenge: 'Canada: Canadian National Anthem: (Flip a coin, Heads in English, Tails in French) Whoever draws this card, must sing the Canadian National Anthem in French (lyrics may be used Appendix A) while standing on a chair, while the opposing team circles around and yells boos and slurs. The person signing must sing with the previously recorded voice and not fall more than one line behind. Upon success, the opposing team must take a shot each. Failure results in one\'s own team consuming one shot each.',
    },
    {
        type: 'Spirit',
        challenge: 'Secrets: The card puller must tell an embarrasing secret about themselves. if it is not embarrasing enough, the other team can say try again: if still not embarrasing enough, other team wins and must drink for 7 seconds counted by card puller team',
    },
    {
        type: 'Spirit',
        challenge: 'Speed chess: the card puller must play chess against somebody on the other team in a speed round for 3 minutes. Most pieces remaining at end of 3 min wins the card',
    },
    {
        type: 'Spirit',
        challenge: 'Russian Prison: The player who pulls this card has to keep their head down, their hands behind their back, and their mouths shut, except when the game calls for them to behave otherwise. The puller must respond to whatever shaming emotional beratement with a humbling "Dah" without defending themselves or getting angry. Speaking in russian accent is also acceptable,(does NOT override other accents) This lasts for five minutes. The card goes to the opposing team if the player breaks or to the puller if they are successful. Winning team must take a shot.',
    },
    {
        type: 'Spirit',
        challenge: 'Accents: The card puller must speak in the accent of a random country. the opposite team picks the country.',
    },
];

export function generateRoundThreeQuestion() {
    const category = Math.floor(Math.random() * challenges.length); // generate random number between 0 and 2
    const challenge = challenges[category];
    return challenge;
}

const challenge = generateRoundThreeQuestion();

  //module.exports = {generateartistryQuestion}
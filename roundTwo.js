const challenges = [
    {
        type: "Physical",
        challenge: "Do 10 push-ups while singing \"Don't Stop Believin'\" by Journey."
    },
    {
        type: "Drinking",
        challenge: "Make a blindfolded beer pong shot."
    },
    {
        type: "Physical",
        challenge: "Perform 20 jumping jacks while reciting the alphabet backward."
    },
    {
        type: "Physical",
        challenge: "Balance on one foot for 60 seconds while holding a cup of water on your head."
    },
    {
        type: "Physical",
        challenge: "Do a crab walk across the room and back."
    },
    {
        type: "Physical",
        challenge: "Spin around 10 times and then attempt to walk in a straight line."
    },
    {
        type: "Physical",
        challenge: "Complete a 30-second plank while maintaining a conversation."
    },
    {
        type: "Drinking",
        challenge: "Chug a can of soda or beer without stopping to take a breath."
    },
    {
        type: "Physical",
        challenge: "Perform 15 squats while balancing a book on your head."
    },
    {
        type: "Physical",
        challenge: "Do the \"Worm\" dance move for 10 seconds."
    },
    {
        type: "Physical",
        challenge: "Toss a coin into a cup from a distance of 6 feet."
    },
    {
        type: "Physical",
        challenge: "Hold a yoga pose of your choice for 1 minute."
    },
    {
        type: "Physical",
        challenge: "Complete a wall sit for 60 seconds while naming five famous landmarks."
    },
    {
        type: "Drinking",
        challenge: "Shotgun a beverage: Puncture a hole in the bottom of a can, place your mouth over the hole, and then crack open the top to chug the drink."
    },
    {
        type: "Physical",
        challenge: "Perform a handstand for 10 seconds or attempt three consecutive cartwheels."
    },
    {
        type: "Physical",
        challenge: "Run in place for 1 minute while naming all 50 U.S. states."
    },
    {
        type: "Physical",
        challenge: "Complete a 15-second \"Superman\" pose (lying on your stomach, lifting arms and legs) while humming the theme song from \"Superman.\""
    },
    {
        type: "Physical",
        challenge: "Dizzy bat challenge: Spin around with your forehead on a bat for 10 seconds, then attempt to hit a pitched ball."
    },
    {
        type: "Physical",
        challenge: "Flip a water bottle and have it land upright on a table."
    },
    {
        type: "Physical",
        challenge: "Toss a ping pong ball and catch it with chopsticks."
    }
];

export function generateRoundTwoQuestion() {
    const category = Math.floor(Math.random() * challenges.length); // generate random number between 0 and 2
    const challenge = challenges[category];
    return challenge;
}

const challenge = generateRoundTwoQuestion();

  //module.exports = {generateartistryQuestion}
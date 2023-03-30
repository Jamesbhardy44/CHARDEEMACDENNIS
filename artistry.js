const challenges = [
    {
      type: 'artistry',
      challenge: 'Draw a picture of your pet using only your non-dominant hand.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a portrait of your friend while they pose in the silliest way possible.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a cartoon version of your favorite food.'
    },
    {
      type: 'artistry',
      challenge: 'Use different colored markers to draw a rainbow-colored unicorn.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a landscape of your dream vacation destination.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of your favorite superhero.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a monster that you invented.'
    },
    {
      type: 'artistry',
      challenge: 'Use only black ink to draw a picture of your favorite celebrity.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a mythical creature that you think should exist.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of your favorite cartoon character.'
    },
    {
      type: 'artistry',
      challenge: 'Use only a pencil to draw a picture of your family.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a food that you dislike, but make it look appetizing.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a famous landmark that you want to visit someday.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a sports team logo.'
    },
    {
      type: 'artistry',
      challenge: 'Use only a black marker to draw a picture of your favorite animal.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a vehicle that you would love to own someday.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of your favorite hobby.'
    },
    {
      type: 'artistry',
      challenge: 'Use only a pencil to draw a picture of a landscape.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a cityscape at night.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a creature that is half one animal and half another.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a plant or flower.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a scene from your favorite book or movie.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of your favorite place to relax.'
    },
    {
      type: 'artistry',
      challenge: 'Draw a picture of a famous painting, but with a twist.'
    },
  ];

 export function generateArtistryQuestion() {
    const category = Math.floor(Math.random() * challenges.length); // generate random number between 0 and 2
    const challenge = challenges[category];
    return challenge;
  }

  const challenge = generateArtistryQuestion();
 
  //module.exports = {generateartistryQuestion}
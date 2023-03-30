const challenges = [
  {
    type: 'Trivia',
    challenge: 'Would you rather have a photographic memory or gain an extra 40 IQ points?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could have any superpower, but it had to be useless, what would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have to speak in rhyme for the rest of your life or have to speak in riddles?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could time travel, would you rather go to the past or the future?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have to wear a clown wig every day or clown shoes every day?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could switch lives with any fictional character, who would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather be able to talk to animals or speak all human languages fluently?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could only eat one food for the rest of your life, what would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather live in a world without music or a world without movies?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could be any character from The Office, who would you be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have to sleep in a coffin or sleep hanging upside down like a bat?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could live in any fictional world, which one would you choose?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have a third arm or a third leg?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could bring one extinct animal back to life, which one would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have a pet dragon or a pet unicorn?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could time travel, would you rather go to the 1800s or the 2100s?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have to wear a cape every day or a top hat every day?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could switch lives with any famous person, who would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather be able to teleport or fly?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could only listen to one musical artist for the rest of your life, who would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have a personal chef or a personal masseuse?'
  },
  {
    type: 'Trivia',
    challenge: 'If you could have any job in the world, what would it be?'
  },
  {
    type: 'Trivia',
    challenge: 'Would you rather have the power of invisibility or the power of super strength?'
  },
  ];
  
  export function generateTriviaQuestion() {
    const category = Math.floor(Math.random() * challenges.length); // generate random number between 0 and 2
    const challenge = challenges[category];
    return challenge;
  }

  const challenge = generateTriviaQuestion();
  //module.exports = { generateTriviaQuestion };
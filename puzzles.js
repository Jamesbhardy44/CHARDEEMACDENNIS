const challenges = [
    {
      type: 'Puzzle',
      challenge: 'What has a heart that doesn’t beat?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a neck but no head?'
    },
    {
      type: 'Puzzle',
      challenge: 'I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?'
    },
    {
      type: 'Puzzle',
      challenge: 'What can you catch but not throw?'
    },
    {
      type: 'Puzzle',
      challenge: 'What goes through cities and fields, but never moves?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has four legs in the morning, two legs in the afternoon, and three legs in the evening?'
    },
    {
      type: 'Puzzle',
      challenge: 'What is always in front of you but can’t be seen?'
    },
    {
      type: 'Puzzle',
      challenge: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a head and a tail, but no body?'
    },
    {
      type: 'Puzzle',
      challenge: 'I am an odd number. Take away a letter and I become even. What number am I?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a mouth but never speaks, runs but never walks, and has a bed but never sleeps?'
    },
    {
      type: 'Puzzle',
      challenge: 'What is full of holes but still holds water?'
    },
    {
      type: 'Puzzle',
      challenge: 'What is so fragile that saying its name breaks it?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a face and two hands but no arms or legs?'
    },
    {
      type: 'Puzzle',
      challenge: 'The more you take, the more you leave behind. What am I?'
    },
    {
      type: 'Puzzle',
      challenge: 'What starts with an E, ends with an E, but only contains one letter?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has one eye but cannot see?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a thumb and four fingers, but is not alive?'
    },
    {
      type: 'Puzzle',
      challenge: 'What belongs to you but is used more by others?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a head, a tail, is brown, and has no legs?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a bed but never sleeps, has a mouth but never eats, and runs but never walks?'
    },
    {
      type: 'Puzzle',
      challenge: 'What gets wetter and wetter the more it dries?'
    },
    {
      type: 'Puzzle',
      challenge: 'What has a heart that doesn’t beat?'
    },
    {
      type: 'Puzzle',
      challenge: 'What comes once in a minute, twice in a moment, but never in a thousand years?'
    }
];
export function generatePuzzleQuestion() {
    const category = Math.floor(Math.random() * challenges.length); // generate random number between 0 and 2
    const challenge = challenges[category];
    return challenge;
  }

  const challenge = generatePuzzleQuestion();


import { createInterface } from 'readline';
import { generateTriviaQuestion } from './trivia.js';
import { generatePuzzleQuestion } from './puzzles.js';
import { generateArtistryQuestion } from './artistry.js';
import { generateRoundTwoQuestion } from './roundTwo.js';
import { generateRoundThreeQuestion } from './roundThree.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
async function _registerTeam(teamNumber) {
  let team = [];
  team.teamNumber=teamNumber;
  console.log(`---------------------------------`);
  console.log(`Team ${teamNumber} Registration:`);

  team.push(await askQuestion(`Player 1, what is your name? $> `));
  team.push(await askQuestion(`Player 2, what is your name? $> `));
  team.push(await askQuestion(`Player 3, what is your name? $> `));

  console.log(`Team ${teamNumber} Registered Successfully: ${team}`);
  return team;
}
*/

async function _registerTeam(teamNumber) {
  let team = {
    teamNumber: teamNumber,
    members: [],
    level: 1
  };

  console.log(`---------------------------------`);
  console.log(`Team ${teamNumber} Registration:`);

  team.members.push(await askQuestion(`Player 1, what is your name? $> `));
  team.members.push(await askQuestion(`Player 2, what is your name? $> `));
  team.members.push(await askQuestion(`Player 3, what is your name? $> `));

  console.log(`Team ${teamNumber} Registered Successfully: ${team.members}`);
  return team;
}

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function _logIntro() {
  console.log('================================================');
  console.log('Welcome to CharDeeMacDennis: \n \nThe Game of Games!');
  console.log('-----------------------------------------------\n');
  console.log("Clay's Wedding Edition 1.0");
  console.log('-----------------------------------------------\n');
  console.log("Author: James Hardy\nLicense MIT\n2023");
  console.log('-----------------------------------------------');
}

async function _startGame() {
  const teamOne = await _registerTeam(1);
  const teamTwo = await _registerTeam(2);

  teamOne.level = 1;
  teamTwo.level = 1;

  console.log(`Team 1: ${teamOne} level:` + teamOne.level);
  console.log(`Team 2: ${teamTwo} level:` + teamTwo.level);
  console.log('All teams registered successfully!');
  console.log(teamOne, 'vs: ', teamTwo);
  let res = { teamOne, teamTwo };
  return res;
}

async function pressAnyKeyToContinue(message) {
  process.stdin.setRawMode(true);
  return new Promise((resolve) => {
    process.stdout.write(message, () => {
      process.stdin.once('data', () => {
        process.stdin.setRawMode(false);
        resolve();
      });
    });
  });
}

async function waitForKeyPress(string) {
  await new Promise(resolve => {
    //rl.input.once('keypress', () => {
    rl.question(string, () => {
      console.log(string);
      resolve();
    });
  });
}



async function _ritOfSportsmanship() {
  console.log('Begin the ritual of Sportsmanship....');
  console.log('--------------------------------------');
  console.log('Press any key to continue...');
  await new Promise(resolve => {
    rl.input.once('keypress', () => {
      console.log('Ladies and Gentleman....\n Censored! ');
      console.log('-------------------------------------------')
      console.log('** BEGIN MAURI WAR DANCE!!!!!! ');
      console.log('-------------------------------------------')
      resolve();
    });
  });
}


//2 * 60 * 1000 = 2 min
async function _timer(numOne, numTwo, numThree) {
  let paramTwo = numOne * numTwo * numThree;
  await new Promise(resolve => setTimeout(resolve, paramTwo)); // Wait for 2 minutes
  console.log('');
  console.log('');
}


function _drawCardRoundOne() {
  var options = ['trivia', 'puzzles', 'artistry'];
  var randomNum = Math.floor(Math.random() * 3); //between 0, 2
  return options[randomNum];
}

function _drawCardRoundTwo() {
  let challenge = generateRoundTwoQuestion();
  console.log(`Category: ${challenge.type}`);
  console.log(`Challenge: ${challenge.challenge}`);
  return challenge;
}

function _drawCardRoundThree() {
  let challenge = generateRoundThreeQuestion();
  console.log(`Category: ${challenge.type}`);
  console.log(`Challenge: ${challenge.challenge}`);
  return challenge;
}

async function _getGameWinner(roundOne, roundTwo, roundThree) {
  var teamOne = 0;
  var teamTwo = 0;

  if (roundOne === 1) {
    teamOne++;
  } else if (roundOne === 2) {
    teamTwo++;
  }

  if (roundTwo === 1) {
    teamOne++;
  } else if (roundTwo === 2) {
    teamTwo++;
  }

  if (roundThree === 1) {
    teamOne++;
  } else if (roundThree === 2) {
    teamTwo++;
  }

  if (teamOne > teamTwo) {
    return 1;
  }
  else if (teamTwo > teamOne) {
    return 2;
  }
  else if (teamOne === teamTwo) {
    console.log('In the Event of a tie... a winner must be chosen!');
    console.log('Draw the BLACK CARD........');
    await pressAnyKeyToContinue('Press to see the BLACK CARD....');
    console.log('FLIP  A   COIN');
  }
}

async function _getRoundWinner(teamOneWinNum, teamTwoWinNum) {
  let check = await askQuestion(`Please enter the winning team: (1 or 2) $>`);
  if (parseInt(check) === 1) {
    teamOneWinNum++;
    return 1;
  }
  else if (parseInt(check) === 2) {
    teamTwoWinNum++;
    return 2;
  }
}

async function _getCheaters() {
  let cheaterCheck = await askQuestion(`Was anybody caught cheating this last round? $>`);
  if (cheaterCheck.indexOf('no') >= 0) {
    return false;
  }
  else {
    return true;
  }

}

async function _setCheaterLevel(teamOne, teamOneLevel, teamTwo, teamTwoLevel) {

  let cheaterTeam = await askQuestion(`Please enter team number that cheated: $>`);
  console.log(`Team ${cheaterTeam} has been caught cheating. `);
  console.log('---------------------------------------------');

  if (parseInt(cheaterTeam) === teamOne.teamNumber && teamOne.level <= teamTwo.level) {
    teamOne.level = teamTwo.level;
    return `team 1: ${teamOne.members} jumps to level: ${teamOne.level}`;
  } else if (parseInt(cheaterTeam) === teamTwo.teamNumber && teamTwo.level <= teamOne.level) {
    teamTwo.level = teamOne.level;
    return `team 2: ${teamTwo.members} jumps to level: ${teamTwo.level}`;
  }
}
//MIND
async function roundOne() {
  _logIntro();
  var teams = [];
  teams.push(await _startGame());
  await _ritOfSportsmanship();
  console.log('------BEGIN ROUND 1------');
  let cardResult = _drawCardRoundOne();
  console.log('drawing card........');
  await pressAnyKeyToContinue('press any key to see the card!');
  console.log(cardResult);
  await pressAnyKeyToContinue('press any key to continue...');

  if (cardResult == 'trivia') {
    let challenge = generateTriviaQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await pressAnyKeyToContinue('press any key to continue...');
  }
  else if (cardResult == 'puzzles') {
    let challenge = generatePuzzleQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await pressAnyKeyToContinue('press any key to continue...');
  }
  else if (cardResult == 'artistry') {
    let challenge = generateArtistryQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await pressAnyKeyToContinue('press any key to continue...');
  }

  await pressAnyKeyToContinue('press any key to continue...');

  let cardResult2 = _drawCardRoundOne();
  console.log('drawing card........');
  await pressAnyKeyToContinue('press any key to see the card!');
  console.log(cardResult2);
  await pressAnyKeyToContinue('------END OF ROUND 1------');

}
//BODY
async function roundTwo() {
  await _ritOfSportsmanship();
  console.log('BEGIN ROUND 2: Physical Challenge');
  let cardResult = _drawCardRoundTwo();
  console.log('drawing card........');
  await waitForKeyPress('press any key to see the card!');
  console.log(cardResult);
  await waitForKeyPress('press any key to continue...');
  /*//PROBLEM HERE------------------------------------------------------------
  var cheaterRes = await _getCheaters(teamOne, teamOne.level, teamTwo, teamTwo.level);
  if (cheaterRes) {
    await _setCheaterLevel(teamOne, teamOne.level, teamTwo, teamTwo.level);
  }
  *///----------------------------------------------------------------------------
  await waitForKeyPress('press any key to continue...');
  console.log('-----BEGIN ROUND 2------');
  let cardResult2 = _drawCardRoundTwo();
  console.log('drawing card........');
  await waitForKeyPress('press any key to see the card!');
  console.log(cardResult2);
  await waitForKeyPress('press any key to continue...');
  await waitForKeyPress('------END OF ROUND 2------');
  await waitForKeyPress('press any key to continue...');
}
//SPIRIT
async function roundThree() {
  await _ritOfSportsmanship();
  console.log('------BEGIN ROUND 3------');
  let cardResult = _drawCardRoundThree();
  console.log('drawing card........');
  await waitForKeyPress('press any key to see the card!');
  console.log(cardResult);
  await waitForKeyPress('------END OF ROUND 3------');
  await waitForKeyPress('press any key to continue...');
}

async function main() {
  var teamOneCountWins = 0;
  var teamTwoCountWins = 0;
  await roundOne();
  var roundOneWinner = await _getRoundWinner(teamOneCountWins, teamTwoCountWins);

  await roundTwo();
  var roundTwoWinner = await _getRoundWinner(teamOneCountWins, teamTwoCountWins);

  await roundThree();
  var roundThreeWinner = await _getRoundWinner(teamOneCountWins, teamTwoCountWins);

  var winner = await _getGameWinner(roundOneWinner, roundTwoWinner, roundThreeWinner);
  if (winner != undefined) {
    console.log('Team: ' + JSON.stringify(winner) + ' has won the game of games!!!');
    console.log("You may smash the losers' game pieces if you wish.");
  }

  console.log("=================================================");
  console.log("Credit: game based on It's Always Sunny In Philadelphia");
  console.log("Author: James Hardy  :   License MIT   2023");
  console.log("=================================================");
  rl.close();
}

main();

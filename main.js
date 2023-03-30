import { createInterface } from 'readline';
import { generateTriviaQuestion } from './trivia.js';
import { generatePuzzleQuestion } from './puzzles.js';
import { generateArtistryQuestion } from './artistry.js';

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

function askQuestion(question) {
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
  console.log(teamOne,'vs: ', teamTwo);
  let res = {teamOne,teamTwo};
  return res;
}

async function waitForKeyPress(string){
await new Promise(resolve => {
  rl.input.once('keypress', () => {
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
      waitForKeyPress('press any key to continue...');
      resolve();
    });
  });
}


//2 * 60 * 1000 = 2 min
async function _timer(numOne,numTwo,numThree){
  let paramTwo = numOne * numTwo * numThree;
  await new Promise(resolve => setTimeout(resolve, paramTwo)); // Wait for 2 minutes
  console.log('');
  console.log('');
}


function _drawCard(){
  var options = ['trivia','puzzles','artistry'];
  var randomNum = Math.floor(Math.random()*3); //between 0, 2
  return options[randomNum];
}

async function _getCheaters(){
  let cheaterCheck = await askQuestion(`Was anybody caught cheating this last round? $>`);
  if(cheaterCheck.indexOf('no')>=0){
    return false;
  }
  else{
    return true;
  }

}

async function _setCheaterLevel(teamOne,teamOneLevel,teamTwo,teamTwoLevel){
 
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
async function roundOne(){
  _logIntro();
    var teams = [];
    teams.push(await _startGame());
    await  _ritOfSportsmanship();
    console.log('BEGIN ROUND 1');
    let cardResult = _drawCard();
    console.log('drawing card........');
    await waitForKeyPress('press any key to see the card!');
    console.log(cardResult);
    await waitForKeyPress('press any key to continue...');

  if(cardResult=='trivia'){
    let challenge = generateTriviaQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  else if(cardResult=='puzzles'){
    let challenge = generatePuzzleQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  else if(cardResult=='artistry'){
    let challenge = generateArtistryQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  var teamOne = teams[0].teamOne;
  var teamTwo = teams[0].teamTwo;
  var cheaterRes = await _getCheaters(teamOne,teamOne.level,teamTwo,teamTwo.level);
  if(cheaterRes){
    await _setCheaterLevel(teamOne,teamOne.level,teamTwo,teamTwo.level);
  }
  await waitForKeyPress('press any key to continue...');
  await  _ritOfSportsmanship();
  console.log('BEGIN ROUND 2');
  let cardResult2 = _drawCard();
  console.log('drawing card........');
  await waitForKeyPress('press any key to see the card!');
  console.log(cardResult2);
  await waitForKeyPress('press any key to continue...');

}

async function roundTwo(){
    await  _ritOfSportsmanship();
    console.log('BEGIN ROUND 2');
    let cardResult = _drawCard();
    console.log('drawing card........');
    await waitForKeyPress('press any key to see the card!');
    console.log(cardResult);
    await waitForKeyPress('press any key to continue...');

  if(cardResult=='trivia'){
    let challenge = generateTriviaQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  else if(cardResult=='puzzles'){
    let challenge = generatePuzzleQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  else if(cardResult=='artistry'){
    let challenge = generateArtistryQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  //PROBLEM HERE------------------------------------------------------------
  var cheaterRes = await _getCheaters(teamOne,teamOne.level,teamTwo,teamTwo.level);
  if(cheaterRes){
    await _setCheaterLevel(teamOne,teamOne.level,teamTwo,teamTwo.level);
  }
  //----------------------------------------------------------------------------
  await waitForKeyPress('press any key to continue...');
  await  _ritOfSportsmanship();
  console.log('BEGIN ROUND 2');
  let cardResult2 = _drawCard();
  console.log('drawing card........');
  await waitForKeyPress('press any key to see the card!');
  console.log(cardResult2);
  await waitForKeyPress('press any key to continue...');

}

async function roundThree(){
    await  _ritOfSportsmanship();
    console.log('BEGIN ROUND 3');
    let cardResult = _drawCard();
    console.log('drawing card........');
    await waitForKeyPress('press any key to see the card!');
    console.log(cardResult);
    await waitForKeyPress('press any key to continue...');

  if(cardResult=='trivia'){
    let challenge = generateTriviaQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  else if(cardResult=='puzzles'){
    let challenge = generatePuzzleQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  else if(cardResult=='artistry'){
    let challenge = generateArtistryQuestion();
    console.log(`Category: ${challenge.type}`);
    console.log(`Challenge: ${challenge.challenge}`);
    await waitForKeyPress('press any key to continue...');
  }
  var teamOne = teams[0].teamOne;
  var teamTwo = teams[0].teamTwo;
  var cheaterRes = await _getCheaters(teamOne,teamOne.level,teamTwo,teamTwo.level);
  if(cheaterRes){
    await _setCheaterLevel(teamOne,teamOne.level,teamTwo,teamTwo.level);
  }
  await waitForKeyPress('press any key to continue...');
  await  _ritOfSportsmanship();
  console.log('BEGIN ROUND 2');
  let cardResult2 = _drawCard();
  console.log('drawing card........');
  await waitForKeyPress('press any key to see the card!');
  console.log(cardResult2);
  await waitForKeyPress('press any key to continue...');

}

async function main() {
  await roundOne();
  await roundTwo();
  await roundThree();
  await waitForKeyPress('press any key to continue...');

  rl.close();
}

main();

/*
There are a few issues with the code that need to be fixed. 
Here are some suggestions:

In _registerTeam() function, 
change let team = []; to let team = {};.
 The team variable is supposed to be an object, but it is currently an array.

In _startGame() function, change
 let res = {teamOne,teamTwo}; to let res = [teamOne,teamTwo];. 
 
 The res variable is supposed to be an array, but it is currently an object.

In the same _startGame() function,
 change teamOne.level = teams[1]; to teamOne.level = teamOne.level; 
 and change teamTwo.level = teams[2]; to teamTwo.level = teamTwo.level;. 
 These lines of code are setting the level property to undefined 
 instead of the actual level value.

In _getCheaters() function,
 change if(teamOne==cheaterTeam 
  to if(teamOne.teamNumber==cheaterTeam 
    and change else if(teamTwo==cheaterTeam to
       else if(teamTwo.teamNumber==cheaterTeam.
         This is because teamOne and teamTwo are objects that contain the teamNumber property, not just the teamNumber itself.

In _setCheaterLevel() function, change if(teamOne==cheaterTeam to if(teamOne.teamNumber==cheaterTeam and change else if(teamTwo==cheaterTeam to else if(teamTwo.teamNumber==cheaterTeam. This is the same issue as #4 above.

With these changes, the code should work properly.
*/

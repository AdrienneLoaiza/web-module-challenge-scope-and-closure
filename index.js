// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    
 ---- Counter1 uses a private variable which is only available within the counterMaker() method
 ---- Counter2 uses a global variable which is available outside of the scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 ---- Counter1 uses closure because the count variavle is private and is written within the function vs being a global variable.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *---- Counter 1 would be better for a one time use for this counterMaker function() but Counter2 would be better for a universal use if you need multiple counters 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round(Math.random() * 2);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
 
function finalScore(callback, numberOfInns){
  const objToReturn = {
    "Home": 0,
    "Away": 0
  }
  for(let i = 0; i < numberOfInns; i++){
    objToReturn.Home += callback();
  }
  for(let i = 0; i < numberOfInns; i++){
    objToReturn.Away += callback();
  }
  return objToReturn;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(inningCallback, numberOfInnings) {
  let homeScore = 0;
  let awayScore = 0;
  for(let i = 0; i < numberOfInnings; i++){
    homeScore += inningCallback();
    awayScore += inningCallback();
    console.log(`Inning ${i + 1}: ${homeScore} - ${awayScore}`);
    if(i == numberOfInnings - 1){
      console.log(`Final Score: ${homeScore} - ${awayScore}`);
    }
  }
}

scoreboard(inning, 9);




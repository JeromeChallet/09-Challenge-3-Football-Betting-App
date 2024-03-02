/*
values are the event and keys are the minute/time at which they occured
Your tasks:
1.Create an array called 'events' that contains the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
a
*/
"use strict";
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

//1.
const events = new Set(gameEvents.values());
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()].pop(); //retrieve the last element key of the map
console.log(
  `An event happened, on average, every ${time / gameEvents}  minutes`
);

// 4.
for (const [min, events] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${events}`);
}

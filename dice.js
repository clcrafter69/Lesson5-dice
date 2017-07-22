
var rollDice = document.getElementById("roll-dice"),
    diceResults = document.getElementById("dice-results");


function getRandomInt(min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min +1)) + min;
}

rollDice.addEventListener("click",function()
{
  diceResults.innerText += getRandomInt(1,6) + "\n";
});

///to debug. use google developer tools , go to sources and set breakpoint
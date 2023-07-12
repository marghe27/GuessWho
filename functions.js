"use strict";

let characters = ["Jean-Claude", "Pierre", "Jean", "Amelie", "Mirabelle", "Isabelle", "Antonin", "Bernard", "Owen", "Dylan", "Herbert", "Christine", "Luc", "Cecilian", "Lionel", "Benoit", "Damien", "Henri", "Etienne", "Pierre-Louis", "Michel", "Renaud", "Charline", "Robert"];

const characteristics = ["Male", "Female", "Glasses", "Brown eyes", "Bald", "White hair", "Small mouth", "Mustache", "Brown hair", "Big mouth", "Small nose", "Blue eyes", "Hat", "Long hair", "Black hair", "Earrings", "Blonde hair", "Ginger hair", "Beard", "Big nose"];

let matches = [["Jean-Claude", ["Male", "Glasses", "Brown eyes", "Bald", "White hair", "Small mouth", "Small nose"]],
["Pierre", ["Male", "Mustache", "Brown eyes", "Brown hair", "Big mouth", "Small nose"]],
["Jean", ["Male", "White hair", "Big nose", "Big mouth", "Blue eyes"]],
["Amelie", ["Female", "Hat", "Brown hair", "Small mouth", "Long hair", "Brown eyes", "Small nose"]],
["Mirabelle", ["Female", "Black hair", "Earrings", "Small mouth", "Brown eyes", "Big nose"]],
["Isabelle", ["Female", "Blonde hair", "Glasses", "Hat", "Small mouth", "Small nose", "Brown eyes"]],
["Antonin", ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"]],
["Bernard", ["Male", "Brown eyes", "Brown hair", "Small nose", "Hat"]],
["Owen", ["Male", "Blue eyes", "Blonde hair", "Small nose", "Small mouth"]],
["Dylan", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Small mouth", "Bald", "Beard"]],
["Herbert", ["Male", "Brown eyes", "Blonde hair", "Big nose", "Small mouth", "Bald"]],
["Christine", ["Female", "Blue eyes", "Blonde hair", "Small nose", "Small mouth", "Long hair"]],
["Luc", ["Male", "Brown eyes", "White hair", "Small nose", "Small mouth", "Glasses"]],
["Cecilian", ["Male", "Brown eyes", "Ginger hair", "Small nose", "Small mouth"]],
["Lionel", ["Male", "Brown eyes", "Brown hair", "Big nose", "Big mouth", "Mustache"]],
["Benoit", ["Male", "Brown eyes", "Brown hair", "Small mouth", "Small nose", "Mustache", "Beard"]],
["Robert", ["Male", "Blue eyes", "Brown hair", "Big nose", "Big mouth"]],
["Charline", ["Female", "Brown hair", "White hair", "Small nose", "Big mouth"]],
["Renaud", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Mustache"]],
["Michel", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Beard"]],
["Pierre-Louis", ["Male", "Blue eyes", "Brown hair", "Small nose", "Small mouth", "Bald", "Glasses"]],
["Etienne", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Small mouth", "Glasses"]],
["Henri", ["Male", "Brown eyes", "White hair", "Small nose", "Big mouth", "Hat"]],
["Damien", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Hat"]]];

// funzione RANDOM 
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}
//totale personaggi 
const len = characters.length;

const initialCharacter = characters[getRandomNumber(len)];
console.log("Initial character: " + initialCharacter);

//metodo per la scelta random del nome o della caratteristica [EVA]
/* const playGame = (name, characteristic) => {
  const pcChoice = [name, characteristic];
  const choice = pcChoice[getRandomNumber(2)];
  const choiceLen = choice.length;
  console.log("choice "+choice[getRandomNumber(choiceLen)]);
  return choice[getRandomNumber(choiceLen)];
} */

//metodo per la scelta random del nome o della caratteristica da parte del PC [Marghe]
const playGame = (name, characteristic) => {
  const pcChoice = [name, characteristic];
  const choiceLen = pcChoice.length;
  const choice = pcChoice[getRandomNumber(choiceLen)];
  //console.log("choice "+choice[getRandomNumber(choice.length)]);
  return choice[getRandomNumber(choice.length)];
}



const game = playGame(characters, characteristics);
let count = 0;

//metodo per indovinare il personaggio passando il nome oppure la caratteristica
const guessWho = (game) => characters.includes(game) ? pcGuessCharacter(game) : pcGuessCharacteristic(game);

// metodo con cui  il computer prova ad indovinare un personaggio
const pcGuessCharacter = (game) => {
  console.log("PC Character " + game);
  if (game == initialCharacter) {
    characters = [];
    console.log("Vinto! In " + count + " turni");
    return "Correct! in " + count + " turns";
  } else {
    const index = characters.indexOf(game);
    characters.splice(index, 1);
    console.log("Remaining characters: " + characters);
    return characters;
  }
}

// metodo con cui il computer prova ad indovinare una caratteristica
const pcGuessCharacteristic = (game) => {
  console.log("PC Characteristic: " + game);
  const initialCharacterIndex = matches.findIndex((element) => element[0] === initialCharacter);
  const initialCharacterCharacteristics = matches[initialCharacterIndex][1];
  if (initialCharacterCharacteristics.includes(game)) {
    matches = matches.filter((_, index) => matches[index][1].includes(game));
    characters = matches.map(value => value[0]);
  } else {
    matches = matches.filter((_, index) => !matches[index][1].includes(game));
    characters = matches.map(value => value[0]);
  }
  console.log("Remaining characters: " + characters);
  return characters;
}

module.exports = {playGame, getRandomNumber, guessWho, pcGuessCharacter, pcGuessCharacteristic};
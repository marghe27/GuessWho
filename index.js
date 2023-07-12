// Guess who 
/*
LOGICA

V - Scrivere due array: uno con le caratteristiche e l'altro con i nomi dei personaggi. 
V - Scrivere un metodo random del PC che ti propone una caratteristica o un nome. Utilizzare Math.random()
V - Creare il nostro personaggio con: character[numeroRandom]
V - Scrivere funzione playGame che restituisce un nome o una caratteristica random.
V - Suddividere gameWho in due metodi differenti;
    parametro è  incluso nella lista dei nomi ? vai a confrontare con il nome : confronto con caratteristiche
V - Se il personaggio ha le caratterstiche richieste, il PC ti restituisce tutti quelli che hanno la stessa  caratteristica, altrimenti restituisce personaggi che non hanno quelle caratteristiche
V - Stessa cosa per i personaggi 
V - Per ogni scelta, aggiungere 1 al contatore dei turni 
V - Creare un loop startGame, che fa partire un loop che termina quando il pc indovina il personaggio
  
*/
"use strict";

const {playGame, guessWho} = require('./functions'); 
const fs = require('fs-js');

const characters = ["Jean-Claude", "Pierre", "Jean", "Amelie", "Mirabelle", "Isabelle", "Antonin", "Bernard", "Owen", "Dylan", "Herbert", "Christine", "Luc", "Cecilian", "Lionel", "Benoit", "Damien", "Henri", "Etienne", "Pierre-Louis", "Michel", "Renaud", "Charline", "Robert"];

const characteristics = ["Male", "Female", "Glasses", "Brown eyes", "Bald", "White hair", "Small mouth", "Mustache", "Brown hair", "Big mouth", "Small nose", "Blue eyes", "Hat", "Long hair", "Black hair", "Earrings", "Blonde hair", "Ginger hair", "Beard", "Big nose"];




const len = characters.length;
let count = 0;

//metodo con cui il gioco inizia e il computer continua a fare le sue scelte
function startGame() {
  while (characters.length >= 1) {
    count++;
    const game = playGame(characters, characteristics);
    guessWho(game);
    console.log("Tentativo in " + count + " turni");
    break;
  }
};

// Avviamo il gioco
startGame();

//ATTENZIONE!!! Commentare da qui in poi dopo le prove

/*
// funzione RANDOM 
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}
//personaggio iniziale 
//const len = characters.length;

const initialCharacter = characters[getRandomNumber(len)];
console.log("Initial character: " + initialCharacter);

//metodo per la scelta random del nome o della caratteristica
const playGame = (name, characteristic) => {
  const pcChoice = [name, characteristic];
  const choice = pcChoice[getRandomNumber(2)];
  const choiceLen = choice.length;
  return choice[getRandomNumber(choiceLen)];
}

let game = playGame(characters, characteristics);
//let count = 0;

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

//metodo con cui il gioco inizia e il computer continua a fare le sue scelte
function startGame() {
  while (characters.length >= 1) {
    count++;
    guessWho(game);
    game = playGame(characters, characteristics);
  }
};

// Avviamo il gioco
startGame();
*/

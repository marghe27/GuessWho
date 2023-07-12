# PROJECT NAME : Guess Who?

# Description
 ---

Guess Who? is a two-player guessing game created by Ora and Theo Coster, also known as Theora Design, that was first manufactured by Milton Bradley in 1979. It was first brought to the UK by Jack Barr Sr in 1982 (Source Wikipedia)
Your task is to make a simple class called GuessWho. The computer will try and guess your character, your job is to return back to the computer a list of possible characters so that it can guess successfully. You will need at least one method in the class called  guess, this is where the computer posts the guess.

# Rules
 ---

1.  The computer willl give you the character in the initialization of the class;
2.  The computer will post the guess to the method guess;
3.  The computers guess will either be a name of a character or one of these characteristics ["Male","Female","Glasses","Brown eyes","Bald","White hair","Small mouth","Mustache","Brown hair","Big mouth","Small nose","Blue eyes","Hat","Long hair","Black hair","Earrings","Blonde hair","Ginger hair","Beard","Big nose"];
4.  If the computer passes a characteristic that your character has then return all the characters that have that characteristic.
5.  If the computer passes a characteristic that your character does not have then return all characters that do not have that characteristic.
6.  Update your character list
7.  Keep a tally of the amount of turns the computer has had.
8.  All characters and characteristic are capitalized

Return ["Correct! in n turns"]. Where n is the amount of turns the computer has taken, if the computer guesses the correct character.
Return array of possible characters if a computer doesn't guess the correct character or characteristic.


# Built With
 --- 
Javascript, Node

# Install
 --- 
```
npm install
```
## Usage
 --- 
```
node index.js
```
# Authors
 --- 
* marghe27
* EvaLa94


# License
 --- 
ISC

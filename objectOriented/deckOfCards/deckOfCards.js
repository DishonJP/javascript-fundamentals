/**
 * Execution   : default node    cmd>node.deckOfCards.js
 * 
 * purpose     : suffle the cards and give those cards to 4 players
 * 
 * @description :to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2D Array.
 * @file        :deckOfCards.js
 * @overview    :using random method to suffle the cards and using some conditions to remove duplicate values and diplaying each player cards
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :11-1-2020
 * */
let access = require('./deckOfCardsBL');
access.deckOfCards();
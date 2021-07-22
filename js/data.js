'use strict';

const MINE = '💣'
const MARK = '🚩'
const EMPTY = ''

const SAD_FACE = '😒';
const HAPPY_FACE = '😁';
const WIN_FACE = '😎';

const LIVES = 3;

var gGame = {
    isOn: false,
    isFirstGuess: true,
    shownCount: 0,
    markedCount: 0,
    timerInterval: 0,
    secsPassed: 0,
    safeClicks: 3,
    lives: LIVES,
};
var gLevels = [
    {SIZE: 4, MINES: 2},
    {SIZE: 8, MINES: 12},
    {SIZE: 12, MINES: 30},
];
var gLevel = gLevels[1];
var gBoard = [];
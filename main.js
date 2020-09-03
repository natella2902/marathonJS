import Pokemon from './pokemon.js';
import {$getElementById, random, hit, generateLog, countBtn } from './utils.js';


const $btnThunder = $getElementById('btn-kick');
const $btnFire =$getElementById('btn-kick2');


const player1 = new Pokemon({
  name: 'Pikachu',
  hp: 500,
  type: 'electric',
  selectors: 'character'
});

const player2 = new Pokemon({
  name: 'Charmander',
  hp: 450,
  type: 'fire',
  selectors: 'enemy'
})

const characterHit = hit();
const enemyHit = hit();


const characterRest = countBtn(10, $btnThunder);
const enemyRest = countBtn(8, $btnFire);


$btnThunder.addEventListener('click', function() {
  player1.changeHP(random(40, 20), function(count){
    console.log(generateLog(player1, player2, count));
  });
  player2.changeHP(random(40, 20));
  

  characterHit();
  characterRest(); 
 
});

$btnFire.addEventListener('click', function(){
  player1.changeHP(random(50, 30));
  player2.changeHP(random(50, 30));

  enemyHit();
  enemyRest();
 
});
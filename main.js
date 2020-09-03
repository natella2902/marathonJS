import Pokemon from './pokemon.js';
import pokemons from './pokemons.js';
import {$getElementById, random, hit, generateLog, countBtn } from './utils.js';


// const $btnThunder = $getElementById('btn-kick');
// const $btnFire =$getElementById('btn-kick2');

const pikachu = pokemons.find(item => item.name === 'Pikachu');

const enemy = pokemons[random(pokemons.length)-1];

let player1 = new Pokemon({
  ...pikachu,
  selectors: 'player1'
});

let player2 = new Pokemon({
  ...enemy,
  selectors: 'player2'
})


//console.log(player2);

const control1 = document.querySelector('.control-player1');
const control2 = document.querySelector('.control-player2');

player1.attacks.forEach(item => {
  const $btn = document.createElement('button');
  $btn.classList.add('button');
  $btn.innerText = item.name; 
  control1.appendChild($btn);
  const btnCount = countBtn(item.maxCount, $btn);


  $btn.addEventListener('click', function() {
    player2.changeHP(random(item.maxDamage, item.minDamage), function(count){
      generateLog(player1, player2, count);
    });
    btnCount();
  })
});


player2.attacks.forEach(item => {
  const $btn2 = document.createElement('button');
  $btn2.classList.add('button');
  $btn2.innerText = item.name;
  control2.appendChild($btn2);
  const btnCount = countBtn(item.maxCount, $btn2);


  $btn2.addEventListener('click', function() {
    player1.changeHP(random(item.maxDamage, item.minDamage), function(count){
      generateLog(player2, player1, count);
    });
    btnCount();
  })
});


// const characterHit = hit();
// const enemyHit = hit();


// const characterRest = countBtn(10, $btnThunder);
// const enemyRest = countBtn(8, $btnFire);


// $btnThunder.addEventListener('click', function() {
//   player1.changeHP(random(40, 20), function(count){
//     console.log(generateLog(player1, player2, count));
//   });
//   player2.changeHP(random(40, 20));
  

//   characterHit();
//   characterRest(); 
 
// });

// $btnFire.addEventListener('click', function(){
//   player1.changeHP(random(50, 30));
//   player2.changeHP(random(50, 30));

//   enemyHit();
//   enemyRest();
 
// });
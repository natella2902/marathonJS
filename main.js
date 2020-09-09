import Pokemon from './pokemon.js';
import {$getElementById, random, hit, generateLog, countBtn, randomPokemon } from './utils.js';


class Game {

  getPokemons = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons'); 
    const body = responce.json();
    return body;
  }

  getKick = async (x, y, z) => {
    const responce = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${x}&attackId=${y}&player2id=${z}`);
    const body = responce.json();
    return body;
  }
  
  start = async () => {
    const pokemons = await this.getPokemons();
    const firstKick = await this.getKick(25, 1, 1);

    console.log(firstKick);
  
    let player1 = new Pokemon({
      ...randomPokemon(pokemons),
      selectors: 'player1'
    });  

    console.log(player1, 'pokemons');

    let player2 = new Pokemon({
      ...randomPokemon(pokemons),
      selectors: 'player2'
    });

    
    const $logs = document.querySelector('#logs');
    const p = document.createElement('p');
    $logs.insertBefore(p, logs.children[0]);
  
    function fightPoki(first, second) {

      const control = document.querySelector('.control');

      first.attacks.forEach(item => {
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = item.name;
        
        control.appendChild($btn);
        const btnCount = countBtn(item.maxCount, $btn);
      
        $btn.addEventListener('click', async function() {
          console.log(item.id, first.id, second.id);

          let dem = await this.getKick(item.id, first.id, second.id)
  
          second.changeHP(random(item.maxDamage, item.minDamage), function(count){
            const log = generateLog(second, first, count);
            p.innerText = log; 
          });
          btnCount();
          if (second.hp.current <= 0) {
            const start = document.querySelector('.startButton');
            start.addEventListener('click', function(){
            console.log('Click start button')
            });
          }
        })
      });
    }
    
    fightPoki(player1, player2);
    fightPoki(player2, player1)
  }


}

const game = new Game();
game.start();



// const $btnThunder = $getElementById('btn-kick');
// const $btnFire =$getElementById('btn-kick2');

// const character = pokemons[random(pokemons.length)-1];
// const enemy = pokemons[random(pokemons.length)-1];

// let player1 = new Pokemon({
//   ...character,
//   selectors: 'player1'
// });

// let player2 = new Pokemon({
//   ...enemy,
//   selectors: 'player2'
// })



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

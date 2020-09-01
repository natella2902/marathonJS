import Pokemon from './pokemon.js';
import random from './utils.js';

function $getElementById(id) {
  return document.getElementById(id); 
}

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


function hit() {
  let a = 0;

  return function(n=1) {
    a += n;
    return a;
  }  
}

const characterHit = hit();
const enemyHit = hit();

function countBtn(count=6, el){
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count})`;
  return function(){
    count--;
    if (count === 0) {
      $btnThunder.disabled = true;
    }
    el.innerText = `${innerText} (${count})`;
    return count;
  }
} 


const characterRest = countBtn(6, $btnThunder);
const enemyRest = countBtn(6, $btnFire);


$btnThunder.addEventListener('click', function() {
  player1.changeHP(random(40, 20), function(count){
    console.log(player1, player2, count);
    console.log(generateLog(player1, player2, count));
  });
  player2.changeHP(random(40, 20), function(count){
    //console.log(player2.name, count);    
  });
  

  characterHit();
  characterRest(); 
 
});

$btnFire.addEventListener('click', function(){
  player1.changeHP(random(50, 30));
  player2.changeHP(random(50, 30));

  enemyHit();
  enemyRest();
 
});


function generateLog(firstPerson, secondPerson, count) {

  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Удар силой ${count} [${firstPerson.damageHP} / ${secondPerson.damageHP}]`
  ];
  
  console.log(logs[random(logs.length) - 1]);
  return logs[random(logs.length) - 1];
}

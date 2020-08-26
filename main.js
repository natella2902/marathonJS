$btn = $getElementById('btn-kick');

function $getElementById(id) {
  return document.getElementById(id); 
}

const character = {
  name: 'pickachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElementById('health-character'),
  elProgressBar: $getElementById('progressbar-character'),
  renderHPLife: renderHPLife,
  renderProgressBar: renderProgressBar,
  renderHP: renderHP,
  changeHP: changeHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElementById('health-enemy'),
  elProgressBar: $getElementById('progressbar-enemy'),
  renderHPLife: renderHPLife,
  renderProgressBar: renderProgressBar,
  renderHP: renderHP,
  changeHP: changeHP
}

$btn.addEventListener('click', function() {
  console.log('btn click');
  character.changeHP(random(20));
  enemy.changeHP(random(20));
  
});

function init() {
  console.log('Start game!');
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressBar();    
} 

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBar() {
  this.elProgressBar.style.width = this.damageHP/this.defaultHP*100 + '%';
}

function changeHP(count){
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character, count) : generateLog(enemy, this, count);
  console.log(log);

  const $logs = document.querySelector('#logs');

  for (let i=0; i < 1; i ++) {     
    const p = document.createElement('p');
    $logs.insertBefore(p, logs.children[0]);
    p.innerText = log;  
  }


  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert(this.name + ' проиграл!!!');
    $btn.disabled = true;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}


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
  
  return logs[random(logs.length) - 1];
}


init();

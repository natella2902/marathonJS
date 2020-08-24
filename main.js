$btn = document.getElementById('btn-kick');

const character = {
  name: 'pickachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character'),
  renderHPLife: renderHPLife,
  renderProgressBar: renderProgressBar,
  renderHP: renderHP,
  changeHP: changeHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy'),
  renderHPLife: renderHPLife,
  renderProgressBar: renderProgressBar,
  renderHP: renderHP,
  changeHP: changeHP
}


$btn.addEventListener('click', function() {
  console.log('btn click');
  character.changeHP.apply(character, [random(20)]);
  enemy.changeHP.apply(enemy, [random(20)]);
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

init();

function changeHP(count){
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert( this.name + ' проиграл!!!');
    } else {
    this.damageHP -= count;
  }
  
  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}
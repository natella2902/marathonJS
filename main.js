$btn = document.getElementById('btn-kick');

const character = {
  name: 'pickachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character')
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 90,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy')

}


$btn.addEventListener('click', function() {
  console.log('btn click');
  changeHP(character, random(20));
  changeHP(enemy, random(20));
});

function init() {
  console.log('Start game!');
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressBar(person);  
} 


function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressBar(person) {
  person.elProgressBar.style.width = person.damageHP + '%';
}

init();

function changeHP(person, count){
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert( person.name + ' проиграл!!!');
    } else {
    person.damageHP -= count;
  }
  
  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}
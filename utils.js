function $getElementById(id) {
  return document.getElementById(id); 
}


function random(max, min=0) {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
}

function hit() {
  let a = 0;

  return function(n=1) {
    a += n;
    return a;
  }  
}

function countBtn(count=10, el){
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count})`;
  return function(){
    count--;
    if (count === 0) {
      el.disabled = true;
    }
    el.innerText = `${innerText} (${count})`;
    return count;
  }
} 


function generateLog(firstPerson, secondPerson, count) {

  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Удар силой ${count} [${firstPerson.hp.current} / ${secondPerson.hp.current}]`
  ];
  
  console.log(logs[random(logs.length) - 1]);
  return logs[random(logs.length) - 1];
}


function randomPokemon(arr){
  return arr[random(arr.length)-1]
}


export { $getElementById, random, hit, generateLog, countBtn, randomPokemon };
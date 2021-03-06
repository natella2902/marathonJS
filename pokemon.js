class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressBar = document.getElementById(`progressbar-${name}`);
    this.playerName = document.getElementById(`name-${name}`);
    this.elImg = document.getElementById(`img-${name}`);
    //this.control = document.querySelector(`.control-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, img, hp, type, attacks, selectors}) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp
    };
    this.type = type;
    this.attacks = attacks;
    this.img = img;
    this.renderHP();
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBar();  
    this.renderName();  
    this.renderImg();
  } 
  
  renderHPLife = () => {
    this.elHP.innerText = this.hp.current + ' / ' + this.hp.total;
  }
  
  renderProgressBar = () => {
    this.elProgressBar.style.width = this.hp.current/this.hp.total*100 + '%';
  }

  renderName = () => {
    this.playerName.innerText = this.name;
  }

  renderImg = () => {
    this.elImg.src = this.img;
  }

  changeHP = (count, cb) => {
    this.hp.current -= count; 

    if (this.hp.current <= 0) {
      this.hp.current = 0;
      this.removeBtn(); 
      this.finalLog();
    }
  
    this.renderHP();
    cb && cb(count);
  }


  removeBtn = () => {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach(item => item.remove());  
  }

  finalLog = () => {
    const control = document.querySelector('.control');
    const h2 = document.createElement('h2');
    control.appendChild(h2);
    h2.innerText = `${this.name} проиграл!`;

    const startBtn = document.createElement('button');
    control.appendChild(startBtn);
    startBtn.innerText = "Start New Game"
    startBtn.classList.add('button');
    startBtn.classList.add('startButton');

  }

}

export default Pokemon;

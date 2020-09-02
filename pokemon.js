class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressBar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors}) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp
    };
    this.type = type;

    this.renderHP();
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBar();    
  } 
  
  renderHPLife = () => {
    this.elHP.innerText = this.hp.current + ' / ' + this.hp.total;
  }
  
  renderProgressBar = () => {
    this.elProgressBar.style.width = this.hp.current/this.hp.total*100 + '%';
  }

  changeHP = (count, cb) => {
    this.hp.current -= count; 

    if (this.hp.current <= 0) {
      this.hp.current = 0;
    }
  
    this.renderHP();
    cb && cb(count);
  }
    
}

export default Pokemon;
